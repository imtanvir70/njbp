import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import GallerySlider from '@/Components/GallerySlider';
import { useLanguage } from '@/Context/LanguageContext';
import { Image as ImageIcon, MapPin, Maximize2, X } from 'lucide-react';

function GalleryPageContent({ gallery = [], activeCategory = 'all' }) {
    const { t, lang } = useLanguage();
    const [selectedCat, setSelectedCat] = useState(activeCategory);
    const [lightboxItem, setLightboxItem] = useState(null);

    const categories = [
        { id: 'all', label: t('filterAll') },
        { id: 'road', label: t('filterRoad') },
        { id: 'air', label: t('filterAir') },
        { id: 'train', label: t('filterTrain') },
        { id: 'water', label: t('filterWater') },
        { id: 'awareness', label: t('filterAwareness') },
        { id: 'international', label: t('filterInternational') },
    ];

    const filtered = selectedCat === 'all'
        ? gallery
        : gallery.filter(item => item.category === selectedCat);

    return (
        <>
            <Head>
                <title>{lang === 'bn' ? 'মাঠপর্যায়ের ফটো গ্যালারি - নিরাপদ যাতায়াত' : 'Field Photo Gallery - Nirapod Jatayat'}</title>
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
                        <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('galleryBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('galleryTitle')}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('gallerySubtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 space-y-20 font-bengali">
                {/* 1. Featured Slider View */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 tracking-tight">
                        {lang === 'bn' ? 'ইন্টারেক্টিভ ফটো স্লাইডার' : 'Interactive Showcase Slider'}
                    </h2>
                    <GallerySlider items={gallery} />
                </div>

                {/* 2. Full Grid Gallery View */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {lang === 'bn' ? 'সকল স্থিরচিত্র অ্যালবাম' : 'All Field Photographs'}
                        </h2>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCat(cat.id)}
                                    className={`relative overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 ${
                                        selectedCat === cat.id
                                            ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/25 scale-105'
                                            : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                                    }`}
                                >
                                    {selectedCat === cat.id && (
                                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                    )}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-3xl overflow-hidden bg-white/70 border border-white/90 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.12)] backdrop-blur-xl"
                                onClick={() => setLightboxItem(item)}
                            >
                                {/* Glossy top edge highlight */}
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none z-10"></div>

                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 rounded-full bg-white/85 text-[11px] font-black uppercase tracking-wider text-blue-800 shadow-md backdrop-blur-md border border-white/60">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                                    <Maximize2 className="w-4 h-4" />
                                </div>

                                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs text-sky-200">
                                        {item.location && (
                                            <span className="flex items-center gap-1 font-semibold">
                                                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                                <span>{item.location}</span>
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-black text-base text-white group-hover:text-sky-300 transition-colors line-clamp-1 tracking-tight">
                                        {item.title}
                                    </h3>
                                    {item.caption && (
                                        <p className="text-xs text-slate-200 line-clamp-2 font-medium">
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
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white border border-slate-300 shadow-2xl">
                        <button
                            onClick={() => setLightboxItem(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img
                            src={lightboxItem.image_url}
                            alt={lightboxItem.title}
                            className="w-full max-h-[70vh] object-contain bg-slate-950"
                        />
                        <div className="p-6 bg-white text-slate-900 space-y-2 border-t border-slate-200">
                            <div className="flex items-center gap-3 text-xs text-sky-700 font-bold">
                                <span className="uppercase">{lightboxItem.category}</span>
                                <span>•</span>
                                <span>{lightboxItem.location}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{lightboxItem.title}</h3>
                            <p className="text-sm text-slate-600">{lightboxItem.caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default function GalleryPage(props) {
    return (
        <PublicLayout>
            <GalleryPageContent {...props} />
        </PublicLayout>
    );
}
