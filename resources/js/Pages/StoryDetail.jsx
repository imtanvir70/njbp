import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Award, ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle2, Share2 } from 'lucide-react';

export default function StoryDetail({ story, relatedStories = [] }) {
    return (
        <PublicLayout>
            <Head>
                <title>{`${story.title} - Nirapod Jatayat`}</title>
            </Head>

            {/* Back Nav */}
            <div className="bg-slate-950 border-b border-slate-800 py-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <Link
                        href={route('stories')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Success Stories</span>
                    </Link>
                </div>
            </div>

            {/* Article Container */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
                {/* Meta Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            {story.category}
                        </span>
                        {story.impact_stat && (
                            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold">
                                Key Result: {story.impact_stat}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {story.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-b border-slate-800 pb-6">
                        {story.location && (
                            <span className="flex items-center gap-1.5 text-slate-300">
                                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                <span>{story.location}</span>
                            </span>
                        )}
                        {story.story_date && (
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                                <span>Published {new Date(story.story_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </span>
                        )}
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-400 font-semibold">Verified Field Case Study</span>
                    </div>
                </div>

                {/* Hero Photo */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-800 shadow-2xl">
                    <img
                        src={story.image_url}
                        alt={story.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Executive Summary Quote Callout */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border-l-4 border-emerald-500 text-slate-200 text-base leading-relaxed font-medium">
                    "{story.summary}"
                </div>

                {/* Article Body */}
                <div className="prose prose-invert prose-slate max-w-none text-slate-300 text-base leading-relaxed space-y-6 whitespace-pre-line border-b border-slate-800 pb-12">
                    {story.content}
                </div>

                {/* Related Stories */}
                {relatedStories.length > 0 && (
                    <div className="pt-8 space-y-6">
                        <h3 className="text-xl font-bold text-white">Other Transit Safety Breakthroughs</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {relatedStories.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={route('stories.show', rel.slug)}
                                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all space-y-2 group"
                                >
                                    <span className="text-[10px] font-bold uppercase text-sky-400 block">{rel.category}</span>
                                    <h4 className="text-xs font-bold text-white group-hover:text-sky-300 line-clamp-2">{rel.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </PublicLayout>
    );
}
