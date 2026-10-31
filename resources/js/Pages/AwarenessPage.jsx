import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import AwarenessCampaignsSection from '@/Components/AwarenessCampaignsSection';
import GlobalAffiliationsSection from '@/Components/GlobalAffiliationsSection';
import { useLanguage } from '@/Context/LanguageContext';
import { BookOpen } from 'lucide-react';

function AwarenessPageContent({ campaigns = [] }) {
    const { t, lang } = useLanguage();

    return (
        <>
            <Head>
                <title>{lang === 'bn' ? 'গণসচেতনতা ও নিরাপত্তা বিধিমালা - নিরাপদ যাতায়াত' : 'Public Awareness & Safety Protocols - Nirapod Jatayat'}</title>
            </Head>

            {/* Header: Frosted Light Aesthetic */}
            <div className="relative py-20 bg-slate-50/80 border-b border-slate-200/80 overflow-hidden font-bengali">
                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('awarenessBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('awarenessTitle')}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('awarenessSubtitle')}
                    </p>
                </div>
            </div>

            <AwarenessCampaignsSection campaigns={campaigns} />
            <GlobalAffiliationsSection />
        </>
    );
}

export default function AwarenessPage(props) {
    return (
        <PublicLayout>
            <AwarenessPageContent {...props} />
        </PublicLayout>
    );
}
