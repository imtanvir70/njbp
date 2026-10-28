import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import HeroSection from '@/Components/HeroSection';
import TransitQuadrants from '@/Components/TransitQuadrants';
import GallerySlider from '@/Components/GallerySlider';
import SuccessStoriesSection from '@/Components/SuccessStoriesSection';
import TeamSection from '@/Components/TeamSection';
import AwarenessCampaignsSection from '@/Components/AwarenessCampaignsSection';
import GlobalAffiliationsSection from '@/Components/GlobalAffiliationsSection';
import { 
    Image as ImageIcon, 
    ShieldAlert, 
    ArrowRight, 
    CheckCircle2, 
    PhoneCall, 
    ExternalLink 
} from 'lucide-react';

export default function Home({
    gallery = [],
    teamMembers = [],
    successStories = [],
    campaigns = [],
    recentIncidents = [],
    stats = {},
}) {
    const [isReportOpen, setIsReportOpen] = useState(false);

    return (
        <PublicLayout>
            <Head>
                <title>Nirapod Jatayat - Safe Multimodal Transit International</title>
                <meta name="description" content="Nirapod Jatayat (Safe Journey) monitors Road, Air, Train, and Water transit safety, conducts scientific safety audits, and champions public awareness." />
            </Head>

            {/* 1. Hero Section */}
            <HeroSection
                stats={stats}
                onOpenIncidentModal={() => {
                    const btn = document.querySelector('button[title="Report Incident"]') || document.querySelector('button span');
                    // Find modal trigger from layout
                    const event = new CustomEvent('open-incident-modal');
                    window.dispatchEvent(event);
                }}
            />

            {/* 2. Four Transit Quadrants Matrix (Road, Air, Rail, Water) */}
            <TransitQuadrants />

            {/* 3. Photo Gallery Slider Showcase */}
            <section id="gallery" className="py-20 bg-slate-900/50 border-t border-slate-800 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide">
                            <ImageIcon className="w-3.5 h-3.5" />
                            <span>Visual Evidence & Field Operations</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Transit Vigilance in Action
                        </h2>
                        <p className="text-sm sm:text-base text-slate-400">
                            Explore high-resolution field photographs documenting our real-time road radars, aerodrome inspections, river launch load-line checks, and nationwide youth safety rallies.
                        </p>
                    </div>

                    {/* Interactive Slider Component */}
                    <GallerySlider items={gallery} />
                </div>
            </section>

            {/* 4. Success Stories & Case Studies */}
            <SuccessStoriesSection stories={successStories} />

            {/* 5. Members / Leadership & Global Advisory Board */}
            <TeamSection members={teamMembers} />

            {/* 6. Public Awareness & Safety Protocols Hub */}
            <AwarenessCampaignsSection campaigns={campaigns} />

            {/* 7. Global Affiliations & Standards */}
            <GlobalAffiliationsSection />
        </PublicLayout>
    );
}
