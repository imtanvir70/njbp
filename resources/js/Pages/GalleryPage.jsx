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

            {/* Header - Light Mode */}
            <div className="bg-white py-16 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold">
                        <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                        <span>{t('galleryBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {t('galleryTitle')}
                    </h1>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        {t('gallerySubtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
                {/* 1. Featured Slider View */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
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
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                        selectedCat === cat.id
                                            ? 'bg-sky-600 text-white shadow-sm'
                                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
                                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 cursor-pointer hover:border-sky-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                                onClick={() => setLightboxItem(item)}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[10px] font-bold uppercase tracking-wider text-sky-800 shadow-sm">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                </div>

                                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                                    <div className="flex items-center gap-2 text-[11px] text-slate-300">
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
                                        <p className="text-xs text-slate-200 line-clamp-2">
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
