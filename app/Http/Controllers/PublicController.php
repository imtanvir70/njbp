<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\GalleryItem;
use App\Models\TeamMember;
use App\Models\SuccessStory;
use App\Models\IncidentReport;
use App\Models\SafetyCampaign;
use App\Models\SiteSetting;
use Illuminate\Support\Str;

class PublicController extends Controller
{
    /**
     * Home / Main International Portal
     */
    public function index()
    {
        $gallery = GalleryItem::orderBy('sort_order')
            ->orderBy('id', 'desc')
            ->get();

        $teamMembers = TeamMember::orderBy('sort_order')
            ->orderBy('id', 'asc')
            ->get();

        $successStories = SuccessStory::orderBy('sort_order')
            ->orderBy('story_date', 'desc')
            ->get();

        $campaigns = SafetyCampaign::orderBy('sort_order')
            ->get();

        $recentIncidents = IncidentReport::latest()
            ->take(5)
            ->get();

        $stats = [
            'total_audits' => SiteSetting::get('hero_audits', '1420'),
            'citizens_reached' => SiteSetting::get('hero_citizens', '850K+'),
            'corridors_monitored' => SiteSetting::get('hero_corridors', '64'),
            'resolution_rate' => SiteSetting::get('hero_resolution', '98.4%'),
            'active_volunteers' => SiteSetting::get('volunteer_count', '3,200+'),
            'hotline_number' => SiteSetting::get('hotline_number', '16100'),
            'countries_collaborating' => 12,
        ];

        return Inertia::render('Home', [
            'gallery' => $gallery,
            'teamMembers' => $teamMembers,
            'successStories' => $successStories,
            'campaigns' => $campaigns,
            'recentIncidents' => $recentIncidents,
            'stats' => $stats,
        ]);
    }

    /**
     * Gallery Page
     */
    public function gallery(Request $request)
    {
        $query = GalleryItem::query();

        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        $gallery = $query->orderBy('sort_order')->orderBy('id', 'desc')->get();

        return Inertia::render('GalleryPage', [
            'gallery' => $gallery,
            'activeCategory' => $request->category ?? 'all',
        ]);
    }

    /**
     * Team Members Page
     */
    public function team()
    {
        $team = TeamMember::orderBy('sort_order')->get();

        return Inertia::render('TeamPage', [
            'team' => $team,
        ]);
    }

    /**
     * Success Stories list
     */
    public function stories(Request $request)
    {
        $query = SuccessStory::query();

        if ($request->has('transit_mode') && $request->transit_mode !== 'all') {
            $query->where('transit_mode', $request->transit_mode);
        }

        $stories = $query->orderBy('sort_order')->orderBy('story_date', 'desc')->get();

        return Inertia::render('StoriesPage', [
            'stories' => $stories,
            'activeMode' => $request->transit_mode ?? 'all',
        ]);
    }

    /**
     * Single Success Story
     */
    public function storyShow($slug)
    {
        $story = SuccessStory::where('slug', $slug)->firstOrFail();
        $relatedStories = SuccessStory::where('id', '!=', $story->id)
            ->take(3)
            ->get();

        return Inertia::render('StoryDetail', [
            'story' => $story,
            'relatedStories' => $relatedStories,
        ]);
    }

    /**
     * Safety Campaigns & Awareness Page
     */
    public function awareness()
    {
        $campaigns = SafetyCampaign::orderBy('sort_order')->get();

        return Inertia::render('AwarenessPage', [
            'campaigns' => $campaigns,
        ]);
    }

    /**
     * Store citizen incident report
     */
    public function storeIncident(Request $request)
    {
        $validated = $request->validate([
            'transit_mode' => 'required|in:road,air,train,water',
            'title' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'description' => 'required|string|min:15',
            'urgency' => 'required|in:low,medium,high,critical',
            'reporter_name' => 'nullable|string|max:100',
            'reporter_email' => 'nullable|email|max:100',
            'reporter_phone' => 'nullable|string|max:30',
        ]);

        $trackingNumber = 'NJ-' . date('Y') . '-' . strtoupper(Str::random(5));

        $incident = IncidentReport::create(array_merge($validated, [
            'tracking_number' => $trackingNumber,
            'status' => 'reported',
            'investigation_notes' => 'Received via Public Citizen Vigilance Portal. Awaiting preliminary inspection triage.',
        ]));

        return back()->with([
            'success' => true,
            'tracking_number' => $trackingNumber,
            'message' => 'Incident reported successfully! Our Rapid Response Unit has logged case #' . $trackingNumber,
        ]);
    }

    /**
     * Query incident status by tracking number
     */
    public function trackIncident(Request $request)
    {
        $request->validate([
            'tracking_number' => 'required|string',
        ]);

        $incident = IncidentReport::where('tracking_number', trim($request->tracking_number))->first();

        if (!$incident) {
            return back()->with('tracking_error', 'No incident report found with tracking ID: ' . $request->tracking_number);
        }

        return back()->with([
            'tracked_incident' => $incident,
        ]);
    }
}
