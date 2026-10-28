import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import HeroSection from '@/Components/HeroSection';
import TransitQuadrants from '@/Components/TransitQuadrants';
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

            {/* 3. Photo Gallery Slider Showcase - Light Mode */}
            <section id="gallery" className="py-20 bg-white border-t border-slate-200/80 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wide">
                            <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                            <span>{t('galleryBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {t('galleryTitle')}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600">
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
