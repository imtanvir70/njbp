import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    AlertTriangle, 
    ArrowRight, 
    Activity, 
    Shield, 
    Users, 
    CheckCircle2, 
    TrendingUp
} from 'lucide-react';

export default function HeroSection({ stats = {}, onOpenIncidentModal }) {
    const { lang } = useLanguage();
    const isBangla = lang === 'bn';
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Lazy load the background video to keep initial page load blazing fast
    useEffect(() => {
        const loadVideo = () => {
            if (videoRef.current) {
                videoRef.current.src = '/videos/hero-transit.mp4';
                videoRef.current.load();
                videoRef.current.play().then(() => {
                    setVideoLoaded(true);
                }).catch(() => {
                    // Autoplay prevented fallback
                });
            }
        };

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(loadVideo, { timeout: 1200 });
        } else {
            const timer = setTimeout(loadVideo, 400);
            return () => clearTimeout(timer);
        }
    }, []);

    const statCards = [
        {
            label: isBangla ? 'নিরাপত্তা অডিট' : 'Field Safety Audits',
            val: stats.total_audits ? `${stats.total_audits}+` : '1,420+',
            desc: isBangla ? 'ব্ল্যাকস্পট ও করিডোর' : 'Corridors Surveyed',
            icon: Shield,
            color: 'text-blue-700',
            iconBg: 'bg-blue-500/15 border-blue-400/30',
        },
        {
            label: isBangla ? 'সচেতন নাগরিক' : 'Citizens Reached',
            val: stats.citizens_reached || '850K+',
            desc: isBangla ? 'সরাসরি সচেতনতা' : 'Awareness Blitzes',
            icon: Users,
            color: 'text-emerald-700',
            iconBg: 'bg-emerald-500/15 border-emerald-400/30',
        },
        {
            label: isBangla ? 'নজরদারিকৃত করিডোর' : 'Active Corridors',
            val: stats.corridors_monitored || '64',
            desc: isBangla ? '৪টি ট্রানজিট ডিভিশন' : 'Road, Rail, Air, Water',
            icon: TrendingUp,
            color: 'text-indigo-700',
            iconBg: 'bg-indigo-500/15 border-indigo-400/30',
        },
        {
            label: isBangla ? 'প্রতিকারের হার' : 'Resolution Rate',
            val: stats.resolution_rate || '98.4%',
            desc: isBangla ? 'সরকারি পদক্ষেপ গৃহীত' : 'Official Action Taken',
            icon: CheckCircle2,
            color: 'text-teal-700',
            iconBg: 'bg-teal-500/15 border-teal-400/30',
        },
    ];

    return (
        <section className="relative min-h-[auto] lg:min-h-[780px] flex flex-col justify-between pt-6 pb-8 xs:pt-8 xs:pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-16 overflow-hidden border-b border-slate-200/80 bg-slate-100/50">
            {/* =========================================================
             * Lazy-Loaded User's Video Background
             * ========================================================= */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className={`w-full h-full object-cover object-center filter saturate-[1.2] transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Soft Frosting & Gradient Overlay: Crystal clear video shine through, text stays razor-sharp */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/75 backdrop-blur-[0.5px]"></div>
                
                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-10"></div>
            </div>

            {/* Middle Foreground Area: Completely Clean, Unobstructed & Big Bold Text */}
            <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-6 text-center my-auto space-y-4 xs:space-y-5 sm:space-y-7 overflow-visible">
                {/* Official Accreditation Pill */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 px-3 py-1 xs:px-4 xs:py-1.5 rounded-full bg-white/75 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all max-w-full">
                        <span className="flex h-2 w-2 relative shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[10px] xs:text-[11px] whitespace-nowrap">
                            {isBangla ? 'জাতিসংঘ সড়ক নিরাপত্তা ফ্রেমওয়ার্ক' : 'UN DECADE OF ACTION 2021–2030'}
                        </span>
                        <span className="text-slate-300 hidden xs:inline">•</span>
                        <span className="text-slate-600 font-bold text-[10px] xs:text-[11px] whitespace-nowrap">
                            {isBangla ? 'জাতীয় সুরক্ষা কর্মসূচি' : 'National Safety Program'}
                        </span>
                    </div>
                </div>

                {/* Big Bold Headline: Scaled for Mobile Viewports (No awkward line cuts or clipping) */}
                <div className="space-y-1 sm:space-y-2 md:space-y-3 font-bengali overflow-visible">
                    <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-normal leading-[1.25] sm:leading-[1.35] pt-1 pb-0.5 overflow-visible drop-shadow-sm">
                        {isBangla ? 'নিরাপদ হোক প্রতিটি যাত্রা' : 'Safeguarding Every Journey'}
                    </h1>
                    <div className="inline-block text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-normal leading-[1.3] sm:leading-[1.4] bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent pb-2 sm:pb-3.5 pt-1 sm:pt-2 px-1 overflow-visible">
                        {isBangla ? 'সড়ক, আকাশ, রেল ও নৌপথে' : 'Road, Sky, Rail & Water'}
                    </div>
                </div>

                {/* Clean Mission Subtitle */}
                <p className="text-xs xs:text-sm sm:text-base md:text-xl text-slate-800 leading-relaxed max-w-2xl mx-auto font-semibold px-2 drop-shadow-sm">
                    {isBangla
                        ? 'সড়ক দুর্ঘটনা রোধ, বিমানের গ্রাউন্ড সেফটি, ট্রেনের অরক্ষিত ক্রসিং এবং নদীপথে লঞ্চের অতিরিক্ত বোঝাই বন্ধে সার্বক্ষণিক নজরদারি ও জনসচেতনতা বৃদ্ধিতে নিবেদিত।'
                        : 'Dedicated to continuous surveillance, blackspot elimination, and nationwide public awareness to prevent accidents across highways, aviation, railways, and waterways.'}
                </p>

                {/* High-Impact Action CTAs: Frosted & Glossy Balance */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 px-2 sm:px-0">
                    <button
                        onClick={() => {
                            if (onOpenIncidentModal) onOpenIncidentModal();
                            window.dispatchEvent(new CustomEvent('open-incident-modal'));
                        }}
                        className="group relative overflow-hidden w-full sm:w-auto px-5 py-3 xs:px-6 xs:py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-xs xs:text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-2.5 shadow-lg sm:shadow-xl shadow-red-600/30 hover:shadow-red-600/45 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        {/* Glossy top edge highlight */}
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform shrink-0" />
                        <span>{isBangla ? 'যাতায়াত ঝুঁকি রিপোর্ট করুন (২৪/৭)' : 'Report Transit Hazard (24/7)'}</span>
                    </button>

                    <a
                        href="#quadrants"
                        className="relative overflow-hidden w-full sm:w-auto px-5 py-3 xs:px-6 xs:py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-white/70 hover:bg-white/90 text-slate-800 font-extrabold text-xs xs:text-sm sm:text-base border border-white/80 shadow-md shadow-slate-200/50 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:border-blue-300"
                    >
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"></div>
                        <Activity className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{isBangla ? '৪টি ট্রানজিট মনিটরিং দেখুন' : 'Explore 4 Transit Sectors'}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    </a>
                </div>
            </div>

            {/* Bottom Elevated Stats Bar: Ultra-Glossy Semi-Transparent Glass (Video shines through) */}
            <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-8 w-full mt-6 xs:mt-8 sm:mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
                    {statCards.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="relative overflow-hidden bg-white/30 hover:bg-white/45 backdrop-blur-[6px] rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_12px_36px_0_rgba(31,38,135,0.12)] transition-all duration-300 hover:-translate-y-1 group"
                            >
                                {/* Glossy top and diagonal light reflections */}
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"></div>
                                <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                                        <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${stat.iconBg} ${stat.color} border shadow-sm backdrop-blur-md group-hover:scale-105 transition-transform`}>
                                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-900 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1 shadow-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span>Live</span>
                                        </span>
                                    </div>
                                    <div className="text-xl xs:text-2xl sm:text-3xl font-black text-slate-900 tracking-tight drop-shadow-sm font-bengali">
                                        {stat.val}
                                    </div>
                                    <div className="text-[12px] sm:text-sm font-extrabold text-slate-900 mt-0.5 truncate font-bengali drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                        {stat.label}
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-slate-700 mt-0.5 truncate font-bold font-bengali">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
