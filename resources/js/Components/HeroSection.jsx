import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import TransitAnimationBackground from './TransitAnimationBackground';
import { 
    AlertTriangle, 
    ArrowRight, 
    Activity, 
    Shield, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    Users, 
    CheckCircle2, 
    TrendingUp,
    Radio
} from 'lucide-react';

export default function HeroSection({ stats = {}, onOpenIncidentModal }) {
    const { lang, t } = useLanguage();
    const isBangla = lang === 'bn';

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
            desc: isBangla ? 'সরাসরি জনসচেতনতা' : 'Awareness Blitzes',
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
        <section className="relative min-h-[680px] lg:min-h-[740px] flex flex-col justify-between pt-10 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden border-b border-slate-200/80">
            {/* Animated Moving Transit Background (Bus, Car, Train, Ship, Airplane) */}
            <TransitAnimationBackground />

            {/* Foreground Content - Ultra Clean, Bold & Focused */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center my-auto space-y-7">
                {/* Top Badge: Organization Identity & UN Framework */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-slate-700 text-xs font-bold">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[10px]">
                            {isBangla ? 'জাতিসংঘ সড়ক নিরাপত্তা দশক ২০২১–২০৩০' : 'UN DECADE OF ACTION 2021–2030'}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600 font-medium">
                            {isBangla ? 'আন্তর্জাতিক বহুমুখী যাতায়াত নিরাপত্তা কাউন্সিল' : 'Multimodal Transit Safety & Vigilance'}
                        </span>
                    </div>
                </div>

                {/* Big Bold Headline Requested by User */}
                <div className="space-y-2 sm:space-y-3">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.15]">
                        {isBangla ? 'নিরাপদ হোক প্রতিটি যাত্রা —' : 'Safeguarding Every Journey —'}
                    </h1>
                    <div className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                        {isBangla ? 'সড়ক, আকাশ, রেল ও নৌপথে' : 'Road, Sky, Rail & Water'}
                    </div>
                </div>

                {/* Clean, Compelling Mission Subtext */}
                <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                    {isBangla
                        ? 'সড়ক দুর্ঘটনা রোধ, বিমানের গ্রাউন্ড সেফটি, ট্রেনের অরক্ষিত ক্রসিং এবং নদীপথে লঞ্চের অতিরিক্ত বোঝাই বন্ধে সার্বক্ষণিক নজরদারি ও জনসচেতনতা বৃদ্ধিতে নিবেদিত।'
                        : 'Dedicated to continuous surveillance, blackspot elimination, and nationwide public awareness to prevent accidents across highways, aviation, railways, and waterways.'}
                </p>

                {/* Action CTA Buttons */}
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

                {/* 4 Transit Domain Pills (Visual anchors corresponding to background movement) */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
                    {[
                        { name: isBangla ? 'সড়ক ও বাস' : 'Road & Expressways', icon: Car, color: 'text-blue-600', dot: 'bg-blue-500' },
                        { name: isBangla ? 'আকাশ ও বিমান' : 'Civil Aviation', icon: Plane, color: 'text-sky-600', dot: 'bg-sky-500' },
                        { name: isBangla ? 'রেল ও ক্রসিং' : 'Rail Corridors', icon: Train, color: 'text-emerald-600', dot: 'bg-emerald-500' },
                        { name: isBangla ? 'নৌ ও নদীপথ' : 'Maritime & Riverine', icon: Ship, color: 'text-teal-600', dot: 'bg-teal-500' },
                    ].map((pill, idx) => {
                        const Icon = pill.icon;
                        return (
                            <a
                                key={idx}
                                href="#quadrants"
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 shadow-sm transition-all"
                            >
                                <span className={`w-1.5 h-1.5 rounded-full ${pill.dot}`}></span>
                                <Icon className={`w-3.5 h-3.5 ${pill.color}`} />
                                <span className="font-semibold">{pill.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Elevated Stats Bar */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-12 sm:mt-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
                    {statCards.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} border`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                        Live
                                    </span>
                                </div>
                                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                    {stat.val}
                                </div>
                                <div className="text-xs font-bold text-slate-700 mt-0.5 truncate">
                                    {stat.label}
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                                    {stat.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
