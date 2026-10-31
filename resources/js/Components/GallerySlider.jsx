import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    ChevronLeft, 
    ChevronRight, 
    Maximize2, 
    X, 
    Calendar, 
    MapPin, 
    Play, 
    Pause
} from 'lucide-react';

export default function GallerySlider({ items = [] }) {
    const { t, lang } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxItem, setLightboxItem] = useState(null);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const filteredItems = selectedCategory === 'all' 
        ? items 
        : items.filter(item => item.category === selectedCategory);

    // Auto-advance slider
    useEffect(() => {
        if (!isAutoPlay || filteredItems.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isAutoPlay, filteredItems.length]);

    // Reset index on category change
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedCategory]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const categories = [
        { id: 'all', label: t('filterAll') },
        { id: 'road', label: t('filterRoad') },
        { id: 'air', label: t('filterAir') },
        { id: 'train', label: t('filterTrain') },
        { id: 'water', label: t('filterWater') },
        { id: 'awareness', label: t('filterAwareness') },
        { id: 'international', label: t('filterInternational') },
    ];

    if (!filteredItems.length) {
        return (
            <div className="py-12 text-center text-slate-500">
                <p>{lang === 'bn' ? 'এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।' : 'No gallery photos available in this category.'}</p>
            </div>
        );
    }

    const currentSlide = filteredItems[currentIndex] || filteredItems[0];

    return (
        <div className="w-full">
            {/* Category Filter Tabs: Frosted Glass Segmented Control */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`relative overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 ${
                            selectedCategory === cat.id
                                ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/25 scale-105'
                                : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                        }`}
                    >
                        {selectedCategory === cat.id && (
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        )}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Main Interactive Carousel / Showcase */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl group">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                    {/* Background Hero Image */}
                    <img
                        src={currentSlide.image_url}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                    {/* Category Badge & Expand Top Left */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/90 backdrop-blur-md text-sky-800 shadow-sm">
                            {currentSlide.category}
                        </span>
                        <span className="text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                            {currentIndex + 1} / {filteredItems.length}
                        </span>
                    </div>

                    {/* Top Right Controls (Autoplay & Zoom) */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className="p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md transition-all"
                            title={isAutoPlay ? 'Pause Auto-slide' : 'Play Auto-slide'}
                        >
                            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => setLightboxItem(currentSlide)}
                            className="p-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white backdrop-blur-md transition-all hover:scale-110 shadow-lg"
                            title="Open Lightbox"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Arrow Navigation */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-110 opacity-90 group-hover:opacity-100"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-110 opacity-90 group-hover:opacity-100"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slide Caption & Details Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white">
                        <div className="max-w-3xl space-y-2">
                            <div className="flex flex-wrap items-center gap-4 text-xs text-sky-300 font-medium">
                                {currentSlide.location && (
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                        <span>{currentSlide.location}</span>
                                    </div>
                                )}
                                {currentSlide.event_date && (
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>{new Date(currentSlide.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                                {currentSlide.title}
                            </h3>

                            {currentSlide.caption && (
                                <p className="text-sm sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-3 leading-relaxed drop-shadow">
                                    {currentSlide.caption}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Thumbnail Strip - Light Mode */}
                <div className="bg-white p-4 border-t border-slate-200 overflow-x-auto">
                    <div className="flex items-center gap-3">
                        {filteredItems.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(idx)}
                                className={`relative shrink-0 rounded-xl overflow-hidden w-24 h-16 transition-all ${
                                    currentIndex === idx
                                        ? 'ring-2 ring-sky-600 scale-105 shadow-md shadow-sky-600/20'
                                        : 'opacity-60 hover:opacity-100 border border-slate-200'
                                }`}
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <span className="absolute bottom-1 left-1 text-[10px] text-white font-semibold line-clamp-1 px-1">
                                    {item.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Zoom Modal */}
            {lightboxItem && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setLightboxItem(null)}
                            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-slate-800 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white shadow-2xl">
                            <img
                                src={lightboxItem.image_url}
                                alt={lightboxItem.title}
                                className="w-full max-h-[70vh] object-contain bg-slate-950"
                            />
                            <div className="p-6 bg-white text-slate-900 space-y-2 border-t border-slate-200">
                                <div className="flex items-center gap-3 text-xs text-sky-600 font-bold">
                                    <span className="uppercase">{lightboxItem.category}</span>
                                    <span>•</span>
                                    <span>{lightboxItem.location}</span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{lightboxItem.title}</h4>
                                <p className="text-sm text-slate-600">{lightboxItem.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
