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

            {/* Header - Light Mode */}
            <div className="bg-white py-16 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t('storiesBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {t('storiesTitle')}
                    </h1>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        {t('storiesSubtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
                {/* Filter */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {modes.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setSelectedMode(m.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                selectedMode === m.id
                                    ? 'bg-emerald-600 text-white shadow-sm scale-105'
                                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                            {m.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((story) => (
                        <Link
                            key={story.id}
                            href={route('stories.show', story.slug)}
                            className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col group hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 shadow-sm"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image_url}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                                {story.impact_stat && (
                                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {story.impact_stat}
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                                    <span className="font-semibold uppercase tracking-wider text-sky-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                                        {story.category}
                                    </span>
                                    {story.location && (
                                        <span className="flex items-center gap-1 text-slate-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                                            <MapPin className="w-3 h-3 text-rose-400" />
                                            {story.location}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {story.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                                        {story.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">
                                        {story.story_date && new Date(story.story_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
