import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useLanguage } from '@/Context/LanguageContext';
import { Award, ArrowRight, MapPin } from 'lucide-react';

function StoriesPageContent({ stories = [], activeMode = 'all' }) {
    const { t, lang } = useLanguage();
    const [selectedMode, setSelectedMode] = useState(activeMode);

    const modes = [
        { id: 'all', label: lang === 'bn' ? 'সকল সাফল্যের গল্প' : 'All Impact Chronicles' },
        { id: 'road', label: t('sectorRoad') },
        { id: 'air', label: t('sectorAir') },
        { id: 'train', label: t('sectorTrain') },
        { id: 'water', label: t('sectorWater') },
    ];

    const filtered = selectedMode === 'all'
        ? stories
        : stories.filter(s => s.transit_mode === selectedMode);

    return (
        <>
            <Head>
                <title>{lang === 'bn' ? 'সাফল্যের গল্প ও সংস্কার - নিরাপদ যাতায়াত' : 'Success Stories & Impact Studies - Nirapod Jatayat'}</title>
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
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('storiesBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('storiesTitle')}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('storiesSubtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 font-bengali">
                {/* Filter Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
                    {modes.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setSelectedMode(m.id)}
                            className={`relative overflow-hidden px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 ${
                                selectedMode === m.id
                                    ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/25 scale-105'
                                    : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                            }`}
                        >
                            {selectedMode === m.id && (
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                            )}
                            {m.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filtered.map((story) => (
                        <Link
                            key={story.id}
                            href={route('stories.show', story.slug)}
                            className="relative overflow-hidden bg-white/70 hover:bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
                        >
                            {/* Glossy top edge highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image_url}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>

                                {story.impact_stat && (
                                    <div className="absolute top-4 left-4 bg-emerald-600/90 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-lg backdrop-blur-md border border-emerald-400/30">
                                        {story.impact_stat}
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                                    <span className="font-extrabold uppercase tracking-wider text-sky-200 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/30">
                                        {story.category}
                                    </span>
                                    {story.location && (
                                        <span className="flex items-center gap-1 text-slate-100 bg-black/50 px-2.5 py-0.5 rounded-lg backdrop-blur-md">
                                            <MapPin className="w-3 h-3 text-rose-400" />
                                            <span>{story.location}</span>
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2.5">
                                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight line-clamp-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-medium">
                                        {story.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-500">
                                        {story.story_date && new Date(story.story_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                    <span className="text-xs font-black text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        <span>{lang === 'bn' ? 'সম্পূর্ণ প্রতিবেদন পড়ুন' : 'Read Full Report'}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default function StoriesPage(props) {
    return (
        <PublicLayout>
            <StoriesPageContent {...props} />
        </PublicLayout>
    );
}
