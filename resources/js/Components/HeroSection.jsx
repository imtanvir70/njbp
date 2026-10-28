import React, { useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Shield, 
    AlertTriangle, 
    CheckCircle2, 
    ArrowRight, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    Globe, 
    Users, 
    TrendingUp,
    Radio,
    ShieldCheck,
    ChevronRight,
    MapPin,
    Activity
} from 'lucide-react';

export default function HeroSection({ stats = {}, onOpenIncidentModal }) {
    const { t, lang } = useLanguage();
    const [activeTerminalTab, setActiveTerminalTab] = useState('road');

    const statCards = [
        {
            label: t('statAudits'),
            val: stats.total_audits ? `${stats.total_audits}+` : '1,420+',
            desc: t('statAuditsDesc'),
            icon: Shield,
            color: 'text-blue-600',
            bg: 'bg-blue-50 border-blue-100',
            badge: '+18% YoY',
        },
        {
            label: t('statCitizens'),
            val: stats.citizens_reached || '850K+',
            desc: t('statCitizensDesc'),
            icon: Users,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-100',
            badge: lang === 'bn' ? 'সচেতন যাত্রী' : 'Active Vigil',
        },
        {
            label: t('statCorridors'),
            val: stats.corridors_monitored || '64',
            desc: t('statCorridorsDesc'),
            icon: TrendingUp,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 border-indigo-100',
            badge: '4 Sectors',
        },
        {
            label: t('statResolution'),
            val: stats.resolution_rate || '98.4%',
            desc: t('statResolutionDesc'),
            icon: CheckCircle2,
            color: 'text-teal-600',
            bg: 'bg-teal-50 border-teal-100',
            badge: lang === 'bn' ? 'কার্যকর প্রতিকার' : 'Resolved',
        },
    ];

    const terminalFeeds = {
        road: {
            title: lang === 'bn' ? 'হাইওয়ে ও এক্সপ্রেসওয়ে স্পিড রাডার' : 'Highway N1 & Arterial Corridors',
            status: lang === 'bn' ? 'সার্বক্ষণিক সক্রিয়' : 'Active Telemetry',
            statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
            metric: lang === 'bn' ? '৮৬টি ব্ল্যাকস্পট প্রতিকার' : '86 Blackspots Cleared',
            location: 'Dhaka-Chittagong Expressway',
            detail: lang === 'bn' ? 'স্বয়ংক্রিয় স্পিড রাডার ও স্কুল জোনে ২০ কিমি/ঘণ্টা গতিসীমায় রূপান্তর।' : 'LiDAR speed compliance and topological safety retrofits along high-risk curves.',
        },
        air: {
            title: lang === 'bn' ? 'বেসামরিক রানওয়ে ও টারম্যাক অডিট' : 'Civil Aerodrome & Apron Safety',
            status: lang === 'bn' ? 'আইকাও সার্টিফাইড' : 'ICAO Standard',
            statusColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
            metric: lang === 'bn' ? '৯৯.১% সেফটি রেটিং' : '99.1% Compliance',
            location: 'Hazrat Shahjalal International (DAC)',
            detail: lang === 'bn' ? 'টারম্যাক গতিসীমা ও ফ্লাইটে ১০০% জরুরি ডিফিব্রিলেটর (AED) নিশ্চিতকরণ।' : 'Commercial aerodrome ramp inspection and passenger delay rights advocacy.',
        },
        train: {
            title: lang === 'bn' ? 'সোলার রাডার লেভেল ক্রসিং' : 'Solar Radar Level Crossings',
            status: lang === 'bn' ? 'স্বয়ংক্রিয় অ্যালার্ম' : 'Radar Linked',
            statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
            img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
            metric: lang === 'bn' ? '৪২টি স্টেশন আধুনিকায়িত' : '42 Stations Active',
            location: 'Brahmanbaria-Akhaura Sector',
            detail: lang === 'bn' ? 'ট্রেন আসার ৪০ সেকেন্ড পূর্বেই স্বয়ংক্রিয় লাল সংকেত ও দ্বৈত সাইরেন ব্লিঙ্ক।' : 'Autonomous solar proximity radars protecting unmanned rural rail crossings.',
        },
        water: {
            title: lang === 'bn' ? 'লঞ্চ টার্মিনাল ডিজিটাল লোড-লাইন' : 'Riverine Ferry Overload Check',
            status: lang === 'bn' ? 'জিরো ক্যাপসাইজ' : 'Zero Capsizes',
            statusColor: 'bg-sky-50 text-sky-700 border-sky-200',
            img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
            metric: lang === 'bn' ? '১৫,০০০ লাইফজ্যাকেট' : '15,000 Vests Deployed',
            location: 'Sadarghat Riverine Hub',
            detail: lang === 'bn' ? 'টার্মিনালে অপটিক্যাল হেডকাউন্ট ও শিশুদের জন্য ফ্রি লাইফজ্যাকেট বণ্টন।' : 'Pre-departure optical headcount and draft line stability enforcement.',
        },
    };

    const currentFeed = terminalFeeds[activeTerminalTab];

    return (
        <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200/80">
            {/* Subtle Engineering Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/60 via-sky-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
                {/* Upper Split Grid: Hero Statement & Live Interactive Terminal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
                    {/* Left Column: Authoritative Message (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* International Accreditation Pill */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-bold shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[10px]">
                                {lang === 'bn' ? 'জাতিসংঘ রেজুলেশন অনুসৃত' : 'UN DECADE OF ACTION'}
                            </span>
                            <span className="text-slate-300">|</span>
                            <span className="text-slate-600 font-medium">
                                {lang === 'bn' ? 'আন্তর্জাতিক পরিবহন সুরক্ষা নেটওয়ার্ক' : 'Global Safe Transit Council'}
                            </span>
                        </div>

                        {/* Main Editorial Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12]">
                            {lang === 'bn' ? (
                                <>
                                    নিরাপদ হোক প্রতিটি যাত্রা — <br className="hidden sm:inline" />
                                    <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                                        সড়ক, আকাশ, রেল ও নৌপথে
                                    </span>
                                </>
                            ) : (
                                <>
                                    Safeguarding Every Journey Across <br className="hidden sm:inline" />
                                    <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                                        Road, Sky, Rail & Water
                                    </span>
                                </>
                            )}
                        </h1>

                        {/* Mission Paragraph */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                            {lang === 'bn'
                                ? 'নিরাপদ যাতায়াত সড়ক, বিমান, ট্রেন ও নৌপথের সার্বক্ষণিক ঝুঁকি পর্যবেক্ষণ করে, ব্ল্যাকস্পট শনাক্ত করে, গণসচেতনতা তৈরি করে এবং পরিবহন খাতে আন্তর্জাতিক সুরক্ষা মান বাস্তবায়নে কাজ করে।'
                                : 'Nirapod Jatayat is an international civil society safety council conducting scientific field audits, investigating hazardous corridors, and enforcing international safety standards across multimodal transit systems.'}
                        </p>

                        {/* Call to Actions */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                            <button
                                onClick={() => {
                                    if (onOpenIncidentModal) onOpenIncidentModal();
                                    window.dispatchEvent(new CustomEvent('open-incident-modal'));
                                }}
                                className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <AlertTriangle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>{t('heroBtnReport')}</span>
                            </button>

                            <a
                                href="#quadrants"
                                className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm hover:border-slate-400 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                            >
                                <Activity className="w-4 h-4 text-blue-600" />
                                <span>{t('heroBtnExplore')}</span>
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                            </a>
                        </div>

                        {/* Social Proof / Trust Footprint */}
                        <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80">
                            <div className="flex -space-x-2 overflow-hidden">
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Auditor" />
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Auditor" />
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Auditor" />
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Auditor" />
                            </div>
                            <div className="text-xs text-slate-600 font-medium">
                                <strong className="text-slate-900 font-bold">850,000+</strong> {lang === 'bn' ? 'নাগরিক ও ৩,২০০+ নিবেদিত ভলান্টিয়ারের আস্থায়' : 'commuters protected across South Asian transit networks'}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Interactive Surveillance Terminal Card (5 cols) */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-5 sm:p-6 overflow-hidden">
                            {/* Card Header with Live Telemetry Badge */}
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                                        <Radio className="w-4 h-4 animate-pulse text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                                            {lang === 'bn' ? 'লাইভ ট্রানজিট নজরদারি রাডার' : 'Live Transit Vigilance Terminal'}
                                        </h2>
                                        <span className="text-[10px] text-slate-500 font-medium">
                                            {lang === 'bn' ? 'ফিল্ড স্টেশন টেলিম্যাট্রি' : 'Automated 24/7 Field Feed'}
                                        </span>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${currentFeed.statusColor}`}>
                                    {currentFeed.status}
                                </span>
                            </div>

                            {/* 4 Interactive Sector Switcher Tabs */}
                            <div className="grid grid-cols-4 gap-1.5 my-4 p-1 rounded-2xl bg-slate-100 border border-slate-200/70">
                                {[
                                    { id: 'road', name: t('sectorRoad'), icon: Car },
                                    { id: 'air', name: t('sectorAir'), icon: Plane },
                                    { id: 'train', name: t('sectorTrain'), icon: Train },
                                    { id: 'water', name: t('sectorWater'), icon: Ship },
                                ].map((tab) => {
                                    const Icon = tab.icon;
                                    const isSelected = activeTerminalTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTerminalTab(tab.id)}
                                            className={`py-2 px-1 rounded-xl text-[11px] font-bold flex flex-col items-center gap-1 transition-all ${
                                                isSelected
                                                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                                            }`}
                                        >
                                            <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} />
                                            <span className="truncate w-full text-center">{tab.name.split(' ')[0]}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Active Sector Live Visual & Metric */}
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                                <img
                                    src={currentFeed.img}
                                    alt={currentFeed.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                                {/* Floating Live Overlay Data */}
                                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-white text-[10px] font-bold flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3 text-rose-400" />
                                    <span>{currentFeed.location}</span>
                                </div>

                                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-extrabold shadow-sm">
                                    {currentFeed.metric}
                                </div>

                                <div className="absolute bottom-3 inset-x-3 text-white space-y-1">
                                    <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                                        {currentFeed.title}
                                    </h3>
                                    <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                                        {currentFeed.detail}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Hotline Action Strip */}
                            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                    <span className="font-bold text-slate-700">
                                        {lang === 'bn' ? '২৪/৭ কন্ট্রোল রুম সক্রিয়' : '24/7 Operations Desk'}
                                    </span>
                                </div>
                                <a
                                    href="#quadrants"
                                    className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                                >
                                    <span>{lang === 'bn' ? 'পুরো অডিট দেখুন' : 'View Full Audit'}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Impact Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {statCards.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border group-hover:scale-105 transition-transform`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                        {stat.badge}
                                    </span>
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                    {stat.val}
                                </div>
                                <h4 className="text-xs font-bold text-slate-700 mt-1">
                                    {stat.label}
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">
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
