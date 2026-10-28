import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import AwarenessCampaignsSection from '@/Components/AwarenessCampaignsSection';
import GlobalAffiliationsSection from '@/Components/GlobalAffiliationsSection';
import { BookOpen, ShieldCheck, Download, AlertTriangle } from 'lucide-react';

export default function AwarenessPage({ campaigns = [] }) {
    return (
        <PublicLayout>
            <Head>
                <title>Public Awareness & Safety Protocols - Nirapod Jatayat</title>
            </Head>

            {/* Header */}
            <div className="bg-slate-950 py-16 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Public Education & Standards</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Civic Transit Safety Guidelines & Legal Rights
                    </h1>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        Clear, actionable safety rules for commuters, motorcyclists, air travelers, train passengers, and river ferry travelers.
                    </p>
                </div>
            </div>

            <AwarenessCampaignsSection campaigns={campaigns} />
            <GlobalAffiliationsSection />
        </PublicLayout>
    );
}
