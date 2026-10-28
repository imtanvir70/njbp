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

            {/* Header - Light Mode */}
            <div className="bg-white py-16 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t('awarenessBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {t('awarenessTitle')}
                    </h1>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
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
