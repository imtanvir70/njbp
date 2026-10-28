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
        <section id="stories" className="py-20 bg-slate-50 relative border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                            <Award className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{t('storiesBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {t('storiesTitle')}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600">
                            {t('storiesSubtitle')}
                        </p>
                    </div>

                    <Link
                        href={route('stories')}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 group"
                    >
                        <span>{t('viewAllStories')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Story Cards Grid - Light Mode */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredStories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col group hover:border-sky-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Image Header with Impact Badge */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image_url}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

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

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
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

                                    <button
                                        onClick={() => setSelectedStory(story)}
                                        className="text-xs font-bold text-sky-700 hover:text-white flex items-center gap-1 bg-sky-50 hover:bg-sky-600 px-3 py-1.5 rounded-lg border border-sky-200 transition-all"
                                    >
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
