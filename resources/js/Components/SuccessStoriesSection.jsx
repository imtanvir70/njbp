import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Award, 
    ArrowRight, 
    Calendar, 
    MapPin, 
    X, 
    CheckCircle2
} from 'lucide-react';

export default function SuccessStoriesSection({ stories = [] }) {
    const { t, lang } = useLanguage();
    const [selectedStory, setSelectedStory] = useState(null);

    const featuredStories = stories.slice(0, 3);

    return (
        <section id="stories" className="py-24 bg-slate-50/70 relative border-t border-slate-200/80 overflow-hidden font-bengali">
            {/* Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <Award className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('storiesBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                            {t('storiesTitle')}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            {t('storiesSubtitle')}
                        </p>
                    </div>

                    <Link
                        href={route('stories')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-extrabold text-sm border border-white/90 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all hover:scale-[1.02] group"
                    >
                        <span>{t('viewAllStories')}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Story Cards Grid: Frosted Glass with Glossy Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {featuredStories.map((story) => (
                        <div
                            key={story.id}
                            className="relative overflow-hidden bg-white/70 hover:bg-white/90 backdrop-blur-xl rounded-3xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
                        >
                            {/* Glossy top edge highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                            {/* Image Header with Impact Badge */}
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

                            {/* Card Body */}
                            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2.5">
                                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight">
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

                                    <button
                                        onClick={() => setSelectedStory(story)}
                                        className="relative overflow-hidden text-xs font-black text-white bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 hover:from-blue-600 hover:to-sky-500 px-4 py-2 rounded-xl shadow-md shadow-sky-600/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                        <span>{t('readStory')}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Read Story Modal - Light Mode */}
            {selectedStory && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        {/* Modal Header Image */}
                        <div className="relative aspect-[21/9] w-full">
                            <img
                                src={selectedStory.image_url}
                                alt={selectedStory.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-4 left-6">
                                <span className="px-3 py-1 bg-sky-600 text-white font-bold text-xs uppercase rounded-full shadow-sm">
                                    {selectedStory.category}
                                </span>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                                    {selectedStory.location && (
                                        <span className="flex items-center gap-1 text-slate-700">
                                            <MapPin className="w-3.5 h-3.5 text-rose-500" />
                                            {selectedStory.location}
                                        </span>
                                    )}
                                    {selectedStory.impact_stat && (
                                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                            Impact: {selectedStory.impact_stat}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                    {selectedStory.title}
                                </h3>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm italic">
                                "{selectedStory.summary}"
                            </div>

                            <div className="prose prose-slate prose-sm max-w-none text-slate-700 space-y-4 whitespace-pre-line leading-relaxed">
                                {selectedStory.content}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                            >
                                {t('closeReader')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
