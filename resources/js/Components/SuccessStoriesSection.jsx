import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { 
    Award, 
    ArrowRight, 
    Calendar, 
    MapPin, 
    TrendingUp, 
    X, 
    CheckCircle2, 
    Share2,
    BookOpen
} from 'lucide-react';

export default function SuccessStoriesSection({ stories = [] }) {
    const [selectedStory, setSelectedStory] = useState(null);

    const featuredStories = stories.slice(0, 3);

    return (
        <section id="stories" className="py-20 bg-slate-900/60 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                            <Award className="w-3.5 h-3.5" />
                            <span>Tangible Impact Chronicles</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Documented Success Stories & Reforms
                        </h2>
                        <p className="text-sm sm:text-base text-slate-400">
                            Real-world interventions where Nirapod Jatayat's technical investigations, civic mobilization, and policy advocacy saved lives and transformed transit safety standards.
                        </p>
                    </div>

                    <Link
                        href={route('stories')}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 group"
                    >
                        <span>View All Impact Case Studies</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Story Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredStories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-slate-950 rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col group hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1.5"
                        >
                            {/* Image Header with Impact Badge */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image_url}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                                {story.impact_stat && (
                                    <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        {story.impact_stat}
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                                    <span className="font-semibold uppercase tracking-wider text-sky-400 bg-slate-900/80 px-2 py-0.5 rounded">
                                        {story.category}
                                    </span>
                                    {story.location && (
                                        <span className="flex items-center gap-1 text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                                            <MapPin className="w-3 h-3 text-rose-400" />
                                            {story.location}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                                        {story.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">
                                        {story.story_date && new Date(story.story_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>

                                    <button
                                        onClick={() => setSelectedStory(story)}
                                        className="text-xs font-bold text-sky-400 hover:text-white flex items-center gap-1 bg-sky-500/10 hover:bg-sky-500 px-3 py-1.5 rounded-lg border border-sky-500/30 transition-all"
                                    >
                                        <span>Read Story</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Read Story Modal */}
            {selectedStory && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        {/* Modal Header Image */}
                        <div className="relative aspect-[21/9] w-full">
                            <img
                                src={selectedStory.image_url}
                                alt={selectedStory.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-900 text-white rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-4 left-6">
                                <span className="px-3 py-1 bg-sky-500 text-white font-bold text-xs uppercase rounded-full">
                                    {selectedStory.category}
                                </span>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                                    {selectedStory.location && (
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                            {selectedStory.location}
                                        </span>
                                    )}
                                    {selectedStory.impact_stat && (
                                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                            Impact: {selectedStory.impact_stat}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                                    {selectedStory.title}
                                </h3>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-sm italic">
                                "{selectedStory.summary}"
                            </div>

                            <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-4 whitespace-pre-line leading-relaxed">
                                {selectedStory.content}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
                            >
                                Close Reader
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
