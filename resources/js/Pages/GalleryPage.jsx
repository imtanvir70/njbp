import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import GallerySlider from '@/Components/GallerySlider';
import { Image as ImageIcon, MapPin, Calendar, Maximize2, X } from 'lucide-react';

export default function GalleryPage({ gallery = [], activeCategory = 'all' }) {
    const [selectedCat, setSelectedCat] = useState(activeCategory);
    const [lightboxItem, setLightboxItem] = useState(null);

    const categories = [
        { id: 'all', label: 'All Photographs' },
        { id: 'road', label: 'Road Safety' },
        { id: 'air', label: 'Aviation Audit' },
        { id: 'train', label: 'Railway & Crossings' },
        { id: 'water', label: 'Maritime & Riverine' },
        { id: 'awareness', label: 'Public Awareness' },
        { id: 'international', label: 'Global Summits' },
    ];

    const filtered = selectedCat === 'all'
        ? gallery
        : gallery.filter(item => item.category === selectedCat);

    return (
        <PublicLayout>
            <Head>
                <title>Field Photo Gallery - Nirapod Jatayat</title>
            </Head>

            {/* Header */}
            <div className="bg-slate-950 py-16 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Field Visual Archive</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Visualizing Multimodal Transit Vigilance
                    </h1>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        Documentary evidence from real-time monitoring across highway corridors, airfields, level crossings, and river ferry pontoons.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
                {/* 1. Featured Slider View */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Interactive Showcase Slider</h2>
                    <GallerySlider items={gallery} />
                </div>

                {/* 2. Full Grid Gallery View */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-white">All Field Photographs</h2>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCat(cat.id)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                        selectedCat === cat.id
                                            ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1"
                                onClick={() => setLightboxItem(item)}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 text-[10px] font-bold uppercase tracking-wider text-sky-400 border border-sky-500/30">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                </div>

                                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                                        {item.location && (
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-rose-400" />
                                                {item.location}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                                        {item.title}
                                    </h3>
                                    {item.caption && (
                                        <p className="text-xs text-slate-300 line-clamp-2">
                                            {item.caption}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxItem && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700">
                        <button
                            onClick={() => setLightboxItem(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img
                            src={lightboxItem.image_url}
                            alt={lightboxItem.title}
                            className="w-full max-h-[70vh] object-contain bg-black"
                        />
                        <div className="p-6 bg-slate-950 text-white space-y-2">
                            <div className="flex items-center gap-3 text-xs text-sky-400 font-semibold">
                                <span className="uppercase">{lightboxItem.category}</span>
                                <span>•</span>
                                <span>{lightboxItem.location}</span>
                            </div>
                            <h3 className="text-xl font-bold">{lightboxItem.title}</h3>
                            <p className="text-sm text-slate-300">{lightboxItem.caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </PublicLayout>
    );
}
