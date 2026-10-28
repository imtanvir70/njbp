import React, { useState, useEffect, useRef } from 'react';
import { 
    ChevronLeft, 
    ChevronRight, 
    Maximize2, 
    X, 
    Calendar, 
    MapPin, 
    Tag, 
    Play, 
    Pause,
    Car,
    Plane,
    Train,
    Ship,
    Sparkles
} from 'lucide-react';

export default function GallerySlider({ items = [] }) {
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
        { id: 'all', label: 'All Photos' },
        { id: 'road', label: 'Road Safety' },
        { id: 'air', label: 'Aviation Audit' },
        { id: 'train', label: 'Railway & Crossings' },
        { id: 'water', label: 'Maritime & Riverine' },
        { id: 'awareness', label: 'Civic Campaigns' },
        { id: 'international', label: 'Global Summits' },
    ];

    if (!filteredItems.length) {
        return (
            <div className="py-12 text-center text-slate-400">
                <p>No gallery photos available in this category.</p>
            </div>
        );
    }

    const currentSlide = filteredItems[currentIndex] || filteredItems[0];

    return (
        <div className="w-full">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                            selectedCategory === cat.id
                                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105'
                                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Main Interactive Carousel / Showcase */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                    {/* Background Hero Image */}
                    <img
                        src={currentSlide.image_url}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    {/* Category Badge & Expand Top Left */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-900/90 backdrop-blur-md text-sky-400 border border-sky-500/30">
                            {currentSlide.category}
                        </span>
                        <span className="text-xs text-white/80 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                            {currentIndex + 1} / {filteredItems.length}
                        </span>
                    </div>

                    {/* Top Right Controls (Autoplay & Zoom) */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all"
                            title={isAutoPlay ? 'Pause Auto-slide' : 'Play Auto-slide'}
                        >
                            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => setLightboxItem(currentSlide)}
                            className="p-2 rounded-full bg-sky-600/80 hover:bg-sky-600 text-white backdrop-blur-md transition-all hover:scale-110"
                            title="Open Lightbox"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Arrow Navigation */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-sky-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md transition-all hover:scale-110 opacity-90 group-hover:opacity-100 shadow-xl"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-sky-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md transition-all hover:scale-110 opacity-90 group-hover:opacity-100 shadow-xl"
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
                                <p className="text-sm sm:text-base text-slate-300 line-clamp-2 sm:line-clamp-3 leading-relaxed drop-shadow">
                                    {currentSlide.caption}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="bg-slate-950 p-4 border-t border-slate-800/80 overflow-x-auto">
                    <div className="flex items-center gap-3">
                        {filteredItems.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(idx)}
                                className={`relative shrink-0 rounded-xl overflow-hidden w-24 h-16 transition-all ${
                                    currentIndex === idx
                                        ? 'ring-2 ring-sky-400 scale-105 shadow-md shadow-sky-500/20'
                                        : 'opacity-50 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setLightboxItem(null)}
                            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-slate-800 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                            <img
                                src={lightboxItem.image_url}
                                alt={lightboxItem.title}
                                className="w-full max-h-[70vh] object-contain bg-black"
                            />
                            <div className="p-6 bg-slate-950 text-white space-y-2">
                                <div className="flex items-center gap-3 text-xs text-sky-400">
                                    <span className="uppercase font-bold">{lightboxItem.category}</span>
                                    <span>•</span>
                                    <span>{lightboxItem.location}</span>
                                </div>
                                <h4 className="text-xl font-bold">{lightboxItem.title}</h4>
                                <p className="text-sm text-slate-300">{lightboxItem.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
