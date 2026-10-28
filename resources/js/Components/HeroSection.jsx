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
        // Delay video loading until after the main thread is idle / initial render is complete
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
            color: 'text-blue-600',
            bg: 'bg-blue-50 border-blue-100',
        },
        {
            label: isBangla ? 'সচেতন নাগরিক' : 'Citizens Reached',
            val: stats.citizens_reached || '850K+',
            desc: isBangla ? 'সরাসরি সচেতনতা' : 'Awareness Blitzes',
            icon: Users,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-100',
        },
        {
            label: isBangla ? 'নজরদারিকৃত করিডোর' : 'Active Corridors',
            val: stats.corridors_monitored || '64',
            desc: isBangla ? '৪টি ট্রানজিট ডিভিশন' : 'Road, Rail, Air, Water',
            icon: TrendingUp,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 border-indigo-100',
        },
        {
            label: isBangla ? 'প্রতিকারের হার' : 'Resolution Rate',
            val: stats.resolution_rate || '98.4%',
            desc: isBangla ? 'সরকারি পদক্ষেপ গৃহীত' : 'Official Action Taken',
            icon: CheckCircle2,
            color: 'text-teal-600',
            bg: 'bg-teal-50 border-teal-100',
        },
    ];

    return (
        <section className="relative min-h-[720px] lg:min-h-[780px] flex flex-col justify-between pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden border-b border-slate-200/80 bg-slate-50">
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
                    className={`w-full h-full object-cover object-center filter saturate-[1.15] transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Soft Frosting & Gradient Overlay: Ensures crystal-clear foreground text while video remains vivid */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/90 backdrop-blur-[1.5px]"></div>
                
                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-10"></div>
            </div>

            {/* Middle Foreground Area: Completely Clean, Unobstructed & Big Bold Text */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center my-auto space-y-6">
                {/* Official Accreditation Pill */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm text-slate-700 text-xs font-bold">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[10px]">
                            {isBangla ? 'নিযাবাপ (NJBP) • জাতিসংঘ ফ্রেমওয়ার্ক' : 'NJBP • UN DECADE OF ACTION'}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600 font-medium text-[11px]">
                            {isBangla ? 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ' : 'Safe Transit Implementation Council'}
                        </span>
                    </div>
                </div>

                {/* Big Bold Headline Requested by User */}
                <div className="space-y-2">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] drop-shadow-sm">
                        {isBangla ? 'নিরাপদ হোক প্রতিটি যাত্রা —' : 'Safeguarding Every Journey —'}
                    </h1>
                    <div className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                        {isBangla ? 'সড়ক, আকাশ, রেল ও নৌপথে' : 'Road, Sky, Rail & Water'}
                    </div>
                </div>

                {/* Clean Mission Subtitle */}
                <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
                    {isBangla
                        ? 'সড়ক দুর্ঘটনা রোধ, বিমানের গ্রাউন্ড সেফটি, ট্রেনের অরক্ষিত ক্রসিং এবং নদীপথে লঞ্চের অতিরিক্ত বোঝাই বন্ধে সার্বক্ষণিক নজরদারি ও জনসচেতনতা বৃদ্ধিতে নিবেদিত।'
                        : 'Dedicated to continuous surveillance, blackspot elimination, and nationwide public awareness to prevent accidents across highways, aviation, railways, and waterways.'}
                </p>

                {/* High-Impact Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => {
                            if (onOpenIncidentModal) onOpenIncidentModal();
                            window.dispatchEvent(new CustomEvent('open-incident-modal'));
                        }}
                        className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/25 hover:shadow-red-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <AlertTriangle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>{isBangla ? 'যাতায়াত ঝুঁকি রিপোর্ট করুন (২৪/৭)' : 'Report Transit Hazard (24/7)'}</span>
                    </button>

                    <a
                        href="#quadrants"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm hover:border-slate-400 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                        <Activity className="w-4 h-4 text-blue-600" />
                        <span>{isBangla ? '৪টি ট্রানজিট মনিটরিং দেখুন' : 'Explore 4 Transit Sectors'}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                    </a>
                </div>
            </div>

            {/* Bottom Elevated Stats Bar: Glossy + Semi-Transparent + Blur */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
                    {statCards.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="relative overflow-hidden bg-white/50 hover:bg-white/65 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 group"
                            >
                                {/* Glossy top edge reflection */}
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-2.5">
                                        <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} border border-white/80 shadow-sm backdrop-blur-md group-hover:scale-105 transition-transform`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span>Live</span>
                                        </span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                                        {stat.val}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                                        {stat.label}
                                    </div>
                                    <p className="text-[11px] text-slate-600 mt-0.5 truncate font-medium">
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
