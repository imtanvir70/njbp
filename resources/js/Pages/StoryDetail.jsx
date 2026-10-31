import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useLanguage } from '@/Context/LanguageContext';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

function StoryDetailContent({ story, relatedStories = [] }) {
    const { lang } = useLanguage();

    return (
        <>
            <Head>
                <title>{`${story.title} - Nirapod Jatayat`}</title>
            </Head>

            {/* Back Nav: Frosted Glass */}
            <div className="bg-white/70 backdrop-blur-xl border-b border-slate-200/80 py-4 font-bengali sticky top-16 z-30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <Link
                        href={route('stories')}
                        className="inline-flex items-center gap-2 text-xs font-black text-slate-700 hover:text-blue-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>{lang === 'bn' ? 'সকল সাফল্যের গল্পে ফিরে যান' : 'Back to All Success Stories'}</span>
                    </Link>
                </div>
            </div>

            {/* Article Container: Frosted Light Aesthetic */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-10 font-bengali">
                {/* Meta Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                            {story.category}
                        </span>
                        {story.impact_stat && (
                            <span className="px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold">
                                Key Result: {story.impact_stat}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {story.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-6">
                        {story.location && (
                            <span className="flex items-center gap-1.5 text-slate-700">
                                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                                <span>{story.location}</span>
                            </span>
                        )}
                        {story.story_date && (
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                                <span>Published {new Date(story.story_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </span>
                        )}
                        <span className="text-slate-300">•</span>
                        <span className="text-emerald-700 font-semibold">{lang === 'bn' ? 'যাচাইকৃত মাঠপর্যায়ের কেস স্টাডি' : 'Verified Field Case Study'}</span>
                    </div>
                </div>

                {/* Hero Photo */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200 shadow-xl">
                    <img
                        src={story.image_url}
                        alt={story.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Executive Summary Quote Callout */}
                <div className="p-6 rounded-2xl bg-sky-50/70 border-l-4 border-emerald-500 text-slate-800 text-base leading-relaxed font-medium">
                    "{story.summary}"
                </div>

                {/* Article Body */}
                <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6 whitespace-pre-line border-b border-slate-200 pb-12">
                    {story.content}
                </div>

                {/* Related Stories */}
                {relatedStories.length > 0 && (
                    <div className="pt-8 space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">
                            {lang === 'bn' ? 'অন্যান্য যাতায়াত সুরক্ষা সংস্কার' : 'Other Transit Safety Breakthroughs'}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {relatedStories.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={route('stories.show', rel.slug)}
                                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-2 group shadow-sm"
                                >
                                    <span className="text-[10px] font-bold uppercase text-sky-700 block">{rel.category}</span>
                                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 line-clamp-2">{rel.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </>
    );
}

export default function StoryDetail(props) {
    return (
        <PublicLayout>
            <StoryDetailContent {...props} />
        </PublicLayout>
    );
}
