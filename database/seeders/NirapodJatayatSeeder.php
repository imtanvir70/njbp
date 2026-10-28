<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GalleryItem;
use App\Models\TeamMember;
use App\Models\SuccessStory;
use App\Models\IncidentReport;
use App\Models\SafetyCampaign;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class NirapodJatayatSeeder extends Seeder
{
    public function run(): void
    {
        // Admin User
        User::firstOrCreate(
            ['email' => 'admin@nirapodjatayat.org'],
            [
                'name' => 'Nirapod Jatayat Administration',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]
        );

        // 1. Team Members
        $members = [
            [
                'name' => 'Engr. Tariqul Islam Chowdhury',
                'role' => 'Executive Director & Founder',
                'department' => 'Executive Board',
                'bio' => 'Former UN Transport Policy Advisor with 22+ years of international expertise in multi-modal transport planning, infrastructure risk assessment, and systemic transit policy overhaul.',
                'avatar_url' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
                'email' => 'tariqul.director@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Dr. Nusrat Jahan Chowdhury',
                'role' => 'Director, Highway & Road Safety Division',
                'department' => 'Road Safety Division',
                'bio' => 'Pioneer in collision data modeling and black-spot remediation. Lead researcher for national speed calming zones and pedestrian-first infrastructure audits.',
                'avatar_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
                'email' => 'nusrat.road@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Capt. Farhan Akhtar (Retd.)',
                'role' => 'Chief Aviation Safety Auditor',
                'department' => 'Aviation Division',
                'bio' => 'Senior airline captain and certified ICAO safety management inspector with 14,000+ flight hours. Specializes in aerodrome standards and emergency readiness.',
                'avatar_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
                'email' => 'farhan.aviation@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => false,
                'sort_order' => 3,
            ],
            [
                'name' => 'Engr. Mahbubur Rahman',
                'role' => 'Head of Railway Signaling & Track Integrity',
                'department' => 'Railway Division',
                'bio' => 'Railway systems engineer specializing in electronic interlocking, level-crossing automatic warnings, and high-frequency commuter corridor risk mitigation.',
                'avatar_url' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
                'email' => 'mahbub.rail@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => false,
                'sort_order' => 4,
            ],
            [
                'name' => 'Capt. Shahriar Kabir',
                'role' => 'Director, Inland Maritime & Riverine Safety',
                'department' => 'Maritime Division',
                'bio' => 'River master mariner and hydrographic surveyor driving safety regulations for commercial ferries, cargo vessels, and monsoon water transport stability standards.',
                'avatar_url' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
                'email' => 'shahriar.water@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => true,
                'sort_order' => 5,
            ],
            [
                'name' => 'Advocate Samira Begum',
                'role' => 'Legal Director & Passenger Rights Advocacy',
                'department' => 'Public Awareness & Legal',
                'bio' => 'Human rights and transport law advocate specializing in rapid compensation for accident victims, operator accountability, and policy reforms.',
                'avatar_url' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
                'email' => 'samira.legal@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => false,
                'sort_order' => 6,
            ],
            [
                'name' => 'Tanvir Hossain',
                'role' => 'Community Awareness & Youth Mobilization Lead',
                'department' => 'Public Awareness & Legal',
                'bio' => 'Social impact campaigner who has spearheaded grassroot road safety drives across 120+ colleges and universities, reaching over 350,000 young citizens.',
                'avatar_url' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
                'email' => 'tanvir.awareness@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => false,
                'sort_order' => 7,
            ],
            [
                'name' => 'Dr. Elena Rostova',
                'role' => 'International Liaison & Global Research Partner',
                'department' => 'Global Advisory',
                'bio' => 'Senior Fellow at the International Transport Forum, advising Nirapod Jatayat on harmonization with UNECE and World Health Organization global transport goals.',
                'avatar_url' => 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
                'email' => 'elena.international@nirapodjatayat.org',
                'linkedin' => 'https://linkedin.com',
                'twitter' => 'https://twitter.com',
                'is_executive' => true,
                'sort_order' => 8,
            ],
        ];

        foreach ($members as $m) {
            TeamMember::updateOrCreate(['email' => $m['email']], $m);
        }

        // 2. Gallery Items (Slider / Showcase)
        $gallery = [
            [
                'title' => 'National Highway Safety & Radar Inspection',
                'category' => 'road',
                'image_url' => 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Inspection team calibrating mobile speed detection cameras along high-frequency intercity expressways.',
                'location' => 'Dhaka-Chittagong Expressway Corridor',
                'event_date' => '2026-08-14',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Commercial Aviation Safety Audit & Runway Check',
                'category' => 'air',
                'image_url' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Comprehensive technical oversight of commercial airliner maintenance facilities and emergency protocols.',
                'location' => 'Hazrat Shahjalal International Airport',
                'event_date' => '2026-09-02',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Railway Track Integrity & Crossing Sensor Deployment',
                'category' => 'train',
                'image_url' => 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Installing solar-powered automated proximity sensors at vulnerable rural railway level crossings.',
                'location' => 'Brahmanbaria-Akhaura Rail Section',
                'event_date' => '2026-07-22',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Monsoon River Passenger Ferry Safety Verification',
                'category' => 'water',
                'image_url' => 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Pre-departure passenger capacity checks and buoyancy apparatus verification during high-tide season.',
                'location' => 'Sadarghat River Port Terminal',
                'event_date' => '2026-08-29',
                'is_featured' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Youth Road Safety Awareness Mega Rally',
                'category' => 'awareness',
                'image_url' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Over 12,000 university students and volunteer cyclists demanding dedicated pedestrian infrastructure.',
                'location' => 'Central University Campus & National Press Club',
                'event_date' => '2026-09-18',
                'is_featured' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Global Transport Forum & Bilateral Safety Accord',
                'category' => 'international',
                'image_url' => 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Nirapod Jatayat leadership presenting South Asian multimodal safety findings to global delegates in Geneva.',
                'location' => 'Geneva Palais des Nations, Switzerland',
                'event_date' => '2026-10-05',
                'is_featured' => true,
                'sort_order' => 6,
            ],
            [
                'title' => 'Helmet & Retroreflective Gear Distribution for Riders',
                'category' => 'road',
                'image_url' => 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Free distribution of DOT-certified motorcycle safety helmets and high-visibility jackets to delivery professionals.',
                'location' => 'Mirpur Road Safety Hub',
                'event_date' => '2026-06-15',
                'is_featured' => false,
                'sort_order' => 7,
            ],
            [
                'title' => 'Life Jacket Audit & Waterway Rescue Drills',
                'category' => 'water',
                'image_url' => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
                'caption' => 'Joint rescue simulation conducted with maritime volunteers to test rapid deployment under adverse weather.',
                'location' => 'Meghna River Confluence',
                'event_date' => '2026-09-27',
                'is_featured' => false,
                'sort_order' => 8,
            ],
        ];

        foreach ($gallery as $item) {
            GalleryItem::updateOrCreate(['title' => $item['title']], $item);
        }

        // 3. Success Stories
        $stories = [
            [
                'title' => 'Zero-Fatality Corridor: Eliminating High-Risk Blackspots on N1 Highway',
                'slug' => 'zero-fatality-corridor-n1-highway',
                'category' => 'Road Safety Milestone',
                'transit_mode' => 'road',
                'impact_stat' => '84% Reduction',
                'impact_label' => 'Fatalities along 48km critical sector',
                'summary' => 'Through drone-assisted topological analysis, Nirapod Jatayat identified 14 structural blind spots and forced government engineering interventions including rumble strips, median elevation, and solar chevron beacons.',
                'content' => "For over a decade, kilometer markers 42 through 90 on the N1 National Highway were labeled as one of the deadliest road corridors in the region, claiming dozens of lives each monsoon due to unmarked sharp bends and inadequate road banking.\n\nIn early 2025, Nirapod Jatayat launched an intensive 6-month multimodal safety audit. Deploying LiDAR-equipped drones and telemetry sensor units, our research engineering team mapped accident hot-zones and revealed that over 70% of fatal impacts were caused by sightline obstruction combined with improper pavement micro-texture.\n\nOur legal and engineering delegation submitted a comprehensive 120-page corrective proposal to the Roads and Highways Department. Working side-by-side with regional engineers, we oversaw the installation of raised illuminated curbs, reflective warning arrays, high-friction surface treatment, and designated deceleration lanes for non-motorized transport.\n\nResults recorded 12 months after implementation verified an 84% plunge in severe crashes, saving hundreds of lives and establishing an international template for rural highway safety remediation.",
                'image_url' => 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
                'location' => 'Chittagong-Feni Highway Stretch',
                'story_date' => '2026-08-10',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Monsoon River Passenger Protection: Smart RFID & Weight-Check Protocol',
                'slug' => 'monsoon-river-passenger-protection',
                'category' => 'Maritime Safety Breakthrough',
                'transit_mode' => 'water',
                'impact_stat' => '320,000+ Commuters',
                'impact_label' => 'Protected during peak holiday travels',
                'summary' => 'Prevented systemic ferry overcrowding across 6 major riverine launch terminals through automated turnstiles, smart weight sensing, and emergency whistle-blower hotlines.',
                'content' => "River transport remains the lifeblood of millions of citizens, but historically, monsoon weather and unregulated terminal departures caused disastrous capsize incidents due to dangerous overloading.\n\nNirapod Jatayat intervened with our 'Safe Riverway Initiative'. We collaborated with inland water port authorities to establish strict pre-departure manifests, deploying handheld optical passenger counters and certified draft-line markers at passenger pontoons.\n\nAny vessel exceeding safe load lines was immediately held until excess boarding was rectified, backed by on-site legal volunteers. Furthermore, we facilitated the provision of 15,000 certified child-sized life vests aboard high-traffic passenger launches.\n\nDuring the most challenging monsoon storm season of 2026, not a single major capsizing occurred across all monitored launch routes, marking our initiative as a defining landmark in inland water transit safety.",
                'image_url' => 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
                'location' => 'Southern Delta River Network',
                'story_date' => '2026-09-05',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Safe Rails: Digital Radar Warning Systems for Unmanned Crossings',
                'slug' => 'safe-rails-digital-radar-crossings',
                'category' => 'Railway Safety Innovation',
                'transit_mode' => 'train',
                'impact_stat' => '42 High-Risk Crossings',
                'impact_label' => 'Modernized with automated warning gear',
                'summary' => 'Unmanned rural rail crossings were a silent epidemic. Nirapod Jatayat developed low-cost acoustic and radar warnings that trigger flashing strobes and sirens 40 seconds before train arrivals.',
                'content' => "With thousands of kilometers of track intersecting rural roads without physical gates or gatemen, vehicle-train collisions represented an urgent public emergency.\n\nNirapod Jatayat partnered with technical university innovators to engineer autonomous solar-charged rail sensor modules. When an approaching locomotive is detected 1.2 kilometers away, high-intensity red LED beacons flash on adjacent roads while dual siren alerts sound to warn vehicular and pedestrian traffic.\n\nBeyond technological installation, our awareness teams conducted door-to-door educational campaigns in 38 surrounding villages, teaching schoolchildren and rickshaw operators never to race an oncoming train.\n\nSince commissioning, zero collision incidents have been reported across all 42 pilot warning stations.",
                'image_url' => 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
                'location' => 'Eastern & Northern Rail Zones',
                'story_date' => '2026-07-15',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Air Passenger Rights & Apron Operational Safety Charter',
                'slug' => 'air-passenger-rights-and-apron-safety',
                'category' => 'Aviation Standard Upgrade',
                'transit_mode' => 'air',
                'impact_stat' => '100% Adoption',
                'impact_label' => 'By domestic commercial operators',
                'summary' => 'Advocated for stringent tarmac safety protocols, medical emergency preparedness on domestic flights, and a transparent compensation charter for affected air travelers.',
                'content' => "As commercial regional aviation expands rapidly, passenger safety standards both on the apron and in cabin environments demanded robust civic oversight.\n\nNirapod Jatayat's Aviation Committee, spearheaded by seasoned airline captains, conducted thorough audits of ramp equipment speed limits, baggage handler safety ergonomics, and automated external defibrillator (AED) availability on domestic aircraft.\n\nOur white paper on 'Civil Aviation Passenger Protection' was formally accepted by regulatory authorities, requiring mandatory pre-flight briefings in dual languages, guaranteed medical response kits on all commuter turboprops, and strict limits on pilot duty cycles to combat fatigue.",
                'image_url' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
                'location' => 'National Airport Network',
                'story_date' => '2026-06-28',
                'is_featured' => false,
                'sort_order' => 4,
            ],
            [
                'title' => 'Mass Awareness: School Zone 20 km/h Speed Calming Mandate',
                'slug' => 'school-zone-speed-calming-mandate',
                'category' => 'Community Awareness Action',
                'transit_mode' => 'road',
                'impact_stat' => '250+ Schools',
                'impact_label' => 'Protected with speed tables & signs',
                'summary' => 'Mobilized 45,000 parents, teachers, and student volunteers to petition for enforced 20 km/h speed limits outside educational institutions nationwide.',
                'content' => "Children are the most vulnerable road users. Nirapod Jatayat initiated the 'Protect Our Future' school road safety project, training student safety wardens, painting high-visibility 3D zebra crossings, and securing municipal commitments to penalize speeding drivers in designated educational precincts.",
                'image_url' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
                'location' => 'Metropolitan Urban Districts',
                'story_date' => '2026-05-20',
                'is_featured' => false,
                'sort_order' => 5,
            ],
        ];

        foreach ($stories as $story) {
            SuccessStory::updateOrCreate(['slug' => $story['slug']], $story);
        }

        // 4. Safety Campaigns
        $campaigns = [
            [
                'title' => 'Project Vision Zero: Road Safety Protocol',
                'tagline' => 'No loss of life on public highways is acceptable or inevitable.',
                'transit_mode' => 'road',
                'reach_count' => 850000,
                'description' => 'A comprehensive road safety framework targeting strict lane discipline, mandatory crash helmet compliance for motorcycle riders and pillions, seatbelt use in public buses, and automated speed enforcement.',
                'icon' => 'Car',
                'guidelines' => [
                    'Always wear an approved safety helmet with fastened chin strap.',
                    'Maintain safe braking distance corresponding to wet weather speeds.',
                    'Never use mobile phones or electronic gadgets while driving or crossing.',
                    'Yield right of way to pedestrians at zebra crossings.',
                    'Zero tolerance for driving under the influence or excessive fatigue.',
                ],
                'status' => 'active',
                'sort_order' => 1,
            ],
            [
                'title' => 'Safe Skies: Aviation Security & Passenger Awareness',
                'tagline' => 'Promoting global ICAO compliance and air passenger dignity.',
                'transit_mode' => 'air',
                'reach_count' => 240000,
                'description' => 'Educating international and domestic passengers about lithium battery carry-on rules, emergency evacuation procedures, runway safety zones, and fair passenger compensation.',
                'icon' => 'Plane',
                'guidelines' => [
                    'Keep seatbelts securely fastened throughout the entire flight.',
                    'Store heavy baggage in overhead lockers; keep aisles completely clear.',
                    'Never carry spare lithium powerbanks in checked luggage.',
                    'Follow crew instructions immediately during turbulence or emergency.',
                ],
                'status' => 'active',
                'sort_order' => 2,
            ],
            [
                'title' => 'Safe Tracks: Railway Corridor & Crossing Vigilance',
                'tagline' => 'Securing every track, level crossing, and commuter platform.',
                'transit_mode' => 'train',
                'reach_count' => 610000,
                'description' => 'Targeting elimination of trackside trespassing, rooftop riding on passenger trains, and risky maneuvers at rural level crossings through direct community monitoring.',
                'icon' => 'Train',
                'guidelines' => [
                    'Never walk on or cross railway tracks wearing headphones.',
                    'Stop, look, and listen at all level crossings even if signals seem clear.',
                    'Strictly avoid riding on train roofs, coupling buffers, or open doorways.',
                    'Report broken fishplates or track damage immediately to the hotline.',
                ],
                'status' => 'active',
                'sort_order' => 3,
            ],
            [
                'title' => 'Safe Voyage: Riverine & Maritime Life-First Mandate',
                'tagline' => 'Every passenger safe, every vessel seaworthy, every journey secure.',
                'transit_mode' => 'water',
                'reach_count' => 490000,
                'description' => 'Combating vessel overloading, enforcing life jacket availability for all onboard passengers, and instituting meteorological storm alert observance for passenger boats.',
                'icon' => 'Anchor',
                'guidelines' => [
                    'Refuse to board any boat or ferry that appears visibly overloaded.',
                    'Locate personal flotation devices immediately upon boarding.',
                    'Pay close attention to river police danger signal flags and storm warnings.',
                    'Maintain calm and follow master mariner instructions in choppy waters.',
                ],
                'status' => 'active',
                'sort_order' => 4,
            ],
        ];

        foreach ($campaigns as $camp) {
            SafetyCampaign::updateOrCreate(['title' => $camp['title']], $camp);
        }

        // 5. Recent Incident Reports
        $incidents = [
            [
                'tracking_number' => 'NJ-2026-8841',
                'transit_mode' => 'road',
                'title' => 'Broken Guardrail and Oil Spill on Flyover Ramp',
                'location' => 'Mayor Hanif Flyover, Exit 4',
                'description' => 'A heavy truck sheared 15 meters of steel barrier leaving an unprotected ledge, accompanied by large slippery diesel slick.',
                'urgency' => 'critical',
                'reporter_name' => 'Kazi Farhan',
                'reporter_phone' => '+8801711223344',
                'status' => 'action_taken',
                'investigation_notes' => 'Rapid response team alerted traffic police and city engineering division; hazard coned off within 25 minutes, sand deployed on spill.',
            ],
            [
                'tracking_number' => 'NJ-2026-8819',
                'transit_mode' => 'water',
                'title' => 'Overloading at Launch Pontoon 3',
                'location' => 'Barisal River Terminal',
                'description' => 'Passenger vessel carrying estimated 200+ passengers beyond certified capacity with blocked gangways.',
                'urgency' => 'high',
                'reporter_name' => 'Abdur Rahim',
                'reporter_phone' => '+8801819556677',
                'status' => 'resolved',
                'investigation_notes' => 'Terminal inspectors held vessel departure until 65 passengers were safely transferred to scheduled reserve vessel.',
            ],
            [
                'tracking_number' => 'NJ-2026-8790',
                'transit_mode' => 'train',
                'title' => 'Damaged Level Crossing Gate Arm',
                'location' => 'Gazipur Crossing KM 32',
                'description' => 'Automatic boom gate broken by a private pickup truck, leaving vehicular traffic unprotected during express train hours.',
                'urgency' => 'high',
                'reporter_name' => 'Sumon Sheikh',
                'reporter_phone' => '+8801912334455',
                'status' => 'action_taken',
                'investigation_notes' => 'Station master dispatched manual flagman to safeguard crossing; replacement boom scheduled for completion tomorrow.',
            ],
            [
                'tracking_number' => 'NJ-2026-8755',
                'transit_mode' => 'air',
                'title' => 'Domestic Terminal Emergency Exit Blocked by Cargo Trollies',
                'location' => 'Domestic Departures Concourse B',
                'description' => 'Wheelchair ramp and fire egress door obstructed by unloaded catering supplies for over two hours.',
                'urgency' => 'medium',
                'reporter_name' => 'Dr. Rasheda Khan',
                'reporter_phone' => '+8801552331122',
                'status' => 'resolved',
                'investigation_notes' => 'Airport ground operations supervisor notified; area cleared immediately with formal warning issued to ground handling vendor.',
            ],
        ];

        foreach ($incidents as $inc) {
            IncidentReport::updateOrCreate(['tracking_number' => $inc['tracking_number']], $inc);
        }
    }
}
