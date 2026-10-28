import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Award, ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react';

export default function StoriesPage({ stories = [], activeMode = 'all' }) {
    const [selectedMode, setSelectedMode] = useState(activeMode);

    const modes = [
        { id: 'all', label: 'All Impact Chronicles' },
        { id: 'road', label: 'Road Safety' },
        { id: 'air', label: 'Aviation Reforms' },
        { id: 'train', label: 'Railway Safety' },
        { id: 'water', label: 'Maritime Safety' },
    ];

    const filtered = selectedMode === 'all'
        ? stories
        : stories.filter(s => s.transit_mode === selectedMode);

    return (
        <PublicLayout>
            <Head>
                <title>Success Stories & Impact Studies - Nirapod Jatayat</title>
            </Head>

            {/* Header */}
            <div className="bg-slate-950 py-16 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>Documented Case Studies</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Transforming Transit Safety Into Reality
                    </h1>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        In-depth records of life-saving infrastructure interventions, legal precedents, and public safety campaigns.
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
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
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
                            className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden flex flex-col group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image_url}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                                {story.impact_stat && (
                                    <div className="absolute top-4 left-4 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
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

                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                                        {story.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                                        {story.summary}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">
                                        {story.story_date && new Date(story.story_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        <span>Read Full Report</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
