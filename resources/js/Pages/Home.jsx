import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import HeroSection from '@/Components/HeroSection';
import TransitQuadrants from '@/Components/TransitQuadrants';
import EmergencyRescueGuideSection from '@/Components/EmergencyRescueGuideSection';
import GallerySlider from '@/Components/GallerySlider';
import SuccessStoriesSection from '@/Components/SuccessStoriesSection';
import TeamSection from '@/Components/TeamSection';
import AwarenessCampaignsSection from '@/Components/AwarenessCampaignsSection';
import GlobalAffiliationsSection from '@/Components/GlobalAffiliationsSection';
import { useLanguage } from '@/Context/LanguageContext';
import { Image as ImageIcon } from 'lucide-react';

function HomeContent({
    gallery = [],
    teamMembers = [],
    successStories = [],
    campaigns = [],
    recentIncidents = [],
    stats = {},
}) {
    const { t, lang } = useLanguage();

    return (
        <>
            <Head>
                <title>{lang === 'bn' ? 'নিরাপদ যাতায়াত - আন্তর্জাতিক নিরাপদ পরিবহন নেটওয়ার্ক' : 'Nirapod Jatayat - Safe Multimodal Transit International'}</title>
                <meta name="description" content="Nirapod Jatayat (Safe Journey) monitors Road, Air, Train, and Water transit safety, conducts scientific safety audits, and champions public awareness." />
            </Head>

            {/* 1. Hero Section */}
            <HeroSection
                stats={stats}
                onOpenIncidentModal={() => {
                    window.dispatchEvent(new CustomEvent('open-incident-modal'));
                }}
            />

            {/* 2. Four Transit Quadrants Matrix (Road, Air, Rail, Water) */}
            <TransitQuadrants />

            {/* 3. Emergency Rescue & First Aid Lifesaving Guide (Golden Hour Protocols) */}
            <EmergencyRescueGuideSection />

            {/* 4. Photo Gallery Slider Showcase - Frosted Light Aesthetic */}
            <section id="gallery" className="py-24 bg-white/70 border-t border-slate-200/80 relative overflow-hidden font-bengali">
                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('galleryBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                            {t('galleryTitle')}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            {t('gallerySubtitle')}
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
        </>
    );
}

export default function Home(props) {
    return (
        <PublicLayout>
            <HomeContent {...props} />
        </PublicLayout>
    );
}
