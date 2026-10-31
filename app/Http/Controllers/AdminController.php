<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\IncidentReport;
use App\Models\GalleryItem;
use App\Models\SuccessStory;
use App\Models\TeamMember;
use App\Models\SiteSetting;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    /**
     * Main Dashboard Overview
     */
    public function index(Request $request)
    {
        $statusCounts = [
            'total' => IncidentReport::count(),
            'reported' => IncidentReport::where('status', 'reported')->count(),
            'investigating' => IncidentReport::where('status', 'investigating')->count(),
            'action_taken' => IncidentReport::where('status', 'action_taken')->count(),
            'resolved' => IncidentReport::where('status', 'resolved')->count(),
        ];

        $incidents = IncidentReport::latest()
            ->when($request->transit_mode, function ($q, $mode) {
                if ($mode !== 'all') {
                    $q->where('transit_mode', $mode);
                }
            })
            ->when($request->status, function ($q, $status) {
                if ($status !== 'all') {
                    $q->where('status', $status);
                }
            })
            ->get();

        $gallery = GalleryItem::orderBy('id', 'desc')->get();
        $stories = SuccessStory::orderBy('id', 'desc')->get();
        $team = TeamMember::orderBy('sort_order')->orderBy('id', 'asc')->get();

        $settings = [
            'hero_audits' => SiteSetting::get('hero_audits', '1420'),
            'hero_citizens' => SiteSetting::get('hero_citizens', '850K+'),
            'hero_corridors' => SiteSetting::get('hero_corridors', '64'),
            'hero_resolution' => SiteSetting::get('hero_resolution', '98.4%'),
            'hotline_number' => SiteSetting::get('hotline_number', '16100'),
            'volunteer_count' => SiteSetting::get('volunteer_count', '3,200+'),
        ];

        return Inertia::render('Dashboard', [
            'statusCounts' => $statusCounts,
            'incidents' => $incidents,
            'gallery' => $gallery,
            'stories' => $stories,
            'team' => $team,
            'settings' => $settings,
            'filters' => $request->only(['transit_mode', 'status']),
        ]);
    }

    /**
     * Update Incident Report Status and Investigation Notes
     */
    public function updateIncident(Request $request, IncidentReport $incident)
    {
        $validated = $request->validate([
            'status' => 'required|in:reported,investigating,action_taken,resolved,dismissed',
            'investigation_notes' => 'nullable|string',
        ]);

        $incident->update($validated);

        return back()->with('success', 'ইনসিডেন্টের স্ট্যাটাস সফলভাবে আপডেট করা হয়েছে।');
    }

    /**
     * Delete Incident Report
     */
    public function destroyIncident(IncidentReport $incident)
    {
        $incident->delete();
        return back()->with('success', 'ইনসিডেন্ট রিপোর্টটি ডিলিট করা হয়েছে।');
    }

    /**
     * Store new Gallery Item
     */
    public function storeGallery(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'caption' => 'nullable|string',
            'category' => 'required|string|in:road,air,train,water,awareness,international',
            'location' => 'nullable|string|max:255',
            'event_date' => 'nullable|date',
            'is_featured' => 'boolean',
            'image_url' => 'nullable|string',
            'image_file' => 'nullable|image|max:8192', // 8MB max
        ]);

        $imageUrl = $validated['image_url'] ?? '';

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('gallery', 'public');
            $imageUrl = '/storage/' . $path;
        }

        if (empty($imageUrl)) {
            return back()->withErrors(['image_url' => 'ছবির ফাইল আপলোড করুন অথবা ইমেজ লিংক দিন।']);
        }

        GalleryItem::create([
            'title' => $validated['title'],
            'caption' => $validated['caption'] ?? '',
            'category' => $validated['category'],
            'location' => $validated['location'] ?? '',
            'event_date' => $validated['event_date'] ?? now()->toDateString(),
            'is_featured' => $request->boolean('is_featured', false),
            'image_url' => $imageUrl,
            'sort_order' => GalleryItem::max('sort_order') + 1,
        ]);

        return back()->with('success', 'নতুন ছবি গ্যালারিতে সফলভাবে যুক্ত হয়েছে।');
    }

    /**
     * Update Gallery Item
     */
    public function updateGallery(Request $request, GalleryItem $gallery)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'caption' => 'nullable|string',
            'category' => 'required|string|in:road,air,train,water,awareness,international',
            'location' => 'nullable|string|max:255',
            'event_date' => 'nullable|date',
            'is_featured' => 'boolean',
            'image_url' => 'nullable|string',
            'image_file' => 'nullable|image|max:8192',
        ]);

        $imageUrl = $gallery->image_url;

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('gallery', 'public');
            $imageUrl = '/storage/' . $path;
        } elseif (!empty($validated['image_url'])) {
            $imageUrl = $validated['image_url'];
        }

        $gallery->update([
            'title' => $validated['title'],
            'caption' => $validated['caption'] ?? '',
            'category' => $validated['category'],
            'location' => $validated['location'] ?? '',
            'event_date' => $validated['event_date'] ?? $gallery->event_date,
            'is_featured' => $request->boolean('is_featured', false),
            'image_url' => $imageUrl,
        ]);

        return back()->with('success', 'গ্যালারির তথ্য আপডেট করা হয়েছে।');
    }

    /**
     * Delete Gallery Item
     */
    public function destroyGallery(GalleryItem $gallery)
    {
        $gallery->delete();
        return back()->with('success', 'গ্যালারি আইটেমটি মুছে ফেলা হয়েছে।');
    }

    /**
     * Store Success Story
     */
    public function storeStory(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'transit_mode' => 'required|string|in:road,air,train,water',
            'impact_stat' => 'nullable|string|max:100',
            'summary' => 'required|string',
            'body' => 'nullable|string',
            'location' => 'nullable|string',
            'story_date' => 'nullable|date',
            'is_published' => 'boolean',
            'image_url' => 'nullable|string',
            'image_file' => 'nullable|image|max:8192',
        ]);

        $imageUrl = $validated['image_url'] ?? '';

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('stories', 'public');
            $imageUrl = '/storage/' . $path;
        }

        if (empty($imageUrl)) {
            $imageUrl = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80';
        }

        SuccessStory::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']) . '-' . Str::random(5),
            'category' => $validated['category'],
            'transit_mode' => $validated['transit_mode'],
            'impact_stat' => $validated['impact_stat'] ?? '১০০% সফল',
            'summary' => $validated['summary'],
            'body' => $validated['body'] ?? $validated['summary'],
            'location' => $validated['location'] ?? '',
            'story_date' => $validated['story_date'] ?? now()->toDateString(),
            'is_published' => $request->boolean('is_published', true),
            'image_url' => $imageUrl,
            'sort_order' => SuccessStory::max('sort_order') + 1,
        ]);

        return back()->with('success', 'সাফল্যের গল্প সফলভাবে প্রকাশিত হয়েছে।');
    }

    /**
     * Update Success Story
     */
    public function updateStory(Request $request, SuccessStory $story)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'transit_mode' => 'required|string|in:road,air,train,water',
            'impact_stat' => 'nullable|string|max:100',
            'summary' => 'required|string',
            'body' => 'nullable|string',
            'location' => 'nullable|string',
            'story_date' => 'nullable|date',
            'is_published' => 'boolean',
            'image_url' => 'nullable|string',
            'image_file' => 'nullable|image|max:8192',
        ]);

        $imageUrl = $story->image_url;

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('stories', 'public');
            $imageUrl = '/storage/' . $path;
        } elseif (!empty($validated['image_url'])) {
            $imageUrl = $validated['image_url'];
        }

        $story->update([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'transit_mode' => $validated['transit_mode'],
            'impact_stat' => $validated['impact_stat'] ?? $story->impact_stat,
            'summary' => $validated['summary'],
            'body' => $validated['body'] ?? $validated['summary'],
            'location' => $validated['location'] ?? $story->location,
            'story_date' => $validated['story_date'] ?? $story->story_date,
            'is_published' => $request->boolean('is_published', true),
            'image_url' => $imageUrl,
        ]);

        return back()->with('success', 'সাফল্যের গল্প সফলভাবে আপডেট করা হয়েছে।');
    }

    /**
     * Delete Success Story
     */
    public function destroyStory(SuccessStory $story)
    {
        $story->delete();
        return back()->with('success', 'গল্পটি মুছে ফেলা হয়েছে।');
    }

    /**
     * Store Team Member
     */
    public function storeTeam(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email',
            'linkedin' => 'nullable|string',
            'is_executive' => 'boolean',
            'avatar_url' => 'nullable|string',
            'avatar_file' => 'nullable|image|max:8192',
        ]);

        $avatarUrl = $validated['avatar_url'] ?? '';

        if ($request->hasFile('avatar_file')) {
            $path = $request->file('avatar_file')->store('team', 'public');
            $avatarUrl = '/storage/' . $path;
        }

        if (empty($avatarUrl)) {
            $avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
        }

        TeamMember::create([
            'name' => $validated['name'],
            'role' => $validated['role'],
            'department' => $validated['department'],
            'bio' => $validated['bio'] ?? '',
            'email' => $validated['email'] ?? '',
            'linkedin' => $validated['linkedin'] ?? '',
            'is_executive' => $request->boolean('is_executive', false),
            'avatar_url' => $avatarUrl,
            'sort_order' => TeamMember::max('sort_order') + 1,
        ]);

        return back()->with('success', 'নতুন কর্মকর্তা/উপদেষ্টা যুক্ত করা হয়েছে।');
    }

    /**
     * Update Team Member
     */
    public function updateTeam(Request $request, TeamMember $member)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email',
            'linkedin' => 'nullable|string',
            'is_executive' => 'boolean',
            'avatar_url' => 'nullable|string',
            'avatar_file' => 'nullable|image|max:8192',
        ]);

        $avatarUrl = $member->avatar_url;

        if ($request->hasFile('avatar_file')) {
            $path = $request->file('avatar_file')->store('team', 'public');
            $avatarUrl = '/storage/' . $path;
        } elseif (!empty($validated['avatar_url'])) {
            $avatarUrl = $validated['avatar_url'];
        }

        $member->update([
            'name' => $validated['name'],
            'role' => $validated['role'],
            'department' => $validated['department'],
            'bio' => $validated['bio'] ?? '',
            'email' => $validated['email'] ?? '',
            'linkedin' => $validated['linkedin'] ?? '',
            'is_executive' => $request->boolean('is_executive', false),
            'avatar_url' => $avatarUrl,
        ]);

        return back()->with('success', 'সদস্যের তথ্য সফলভাবে আপডেট করা হয়েছে।');
    }

    /**
     * Delete Team Member
     */
    public function destroyTeam(TeamMember $member)
    {
        $member->delete();
        return back()->with('success', 'সদস্য প্রোফাইল মুছে ফেলা হয়েছে।');
    }

    /**
     * Update Site Settings / Hero Counters
     */
    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'hero_audits' => 'required|string|max:50',
            'hero_citizens' => 'required|string|max:50',
            'hero_corridors' => 'required|string|max:50',
            'hero_resolution' => 'required|string|max:50',
            'hotline_number' => 'required|string|max:50',
            'volunteer_count' => 'required|string|max:50',
        ]);

        foreach ($validated as $key => $val) {
            SiteSetting::set($key, $val);
        }

        return back()->with('success', 'সাইট সেটিংস ও লাইভ সংখ্যা সফলভাবে আপডেট করা হয়েছে।');
    }
}

