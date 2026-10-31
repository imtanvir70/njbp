import React, { useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle2, 
    ChevronRight, 
    ShieldCheck, 
    Activity
} from 'lucide-react';

export default function TransitQuadrants() {
    const { t, lang } = useLanguage();
    const [activeSector, setActiveSector] = useState('road');

    const sectors = {
        road: {
            title: lang === 'bn' ? 'সড়ক ও মহাসড়ক নিরাপত্তা নজরদারি' : 'Road & Highway Transit Vigilance',
            subtitle: lang === 'bn' ? 'জাতীয় এক্সপ্রেসওয়ে, আন্তঃজেলা করিডোর ও ব্ল্যাকস্পট প্রতিকার' : 'National Expressways, Urban Arterials & Rural Corridors',
            icon: Car,
            color: 'text-sky-600',
            bg: 'bg-sky-50 text-sky-700 border-sky-200',
            border: 'border-sky-300',
            complianceScore: '94.2%',
            activeAudits: 48,
            keyMetrics: [
                { label: lang === 'bn' ? 'সংশোধিত ব্ল্যাকস্পট' : 'Blackspots Remediated', val: lang === 'bn' ? '৮৬টি ঝুঁকিপূর্ণ পয়েন্ট' : '86 Critical Locations' },
                { label: lang === 'bn' ? 'স্পিড ক্যামেরা নজরদারি' : 'Speed Enforcement Zones', val: lang === 'bn' ? '১,২০০+ কিমি আওতাভুক্ত' : '1,200+ km Monitored' },
                { label: lang === 'bn' ? 'হেলমেট ও সিটবেল্ট অনুপালন' : 'Helmet & Seatbelt Compliance', val: '79%' },
            ],
            description: lang === 'bn'
                ? 'ড্রোন প্রযুক্তি ও রাডার সেন্সরের মাধ্যমে মহাসড়কের বাঁক ও ঝুঁকিপূর্ণ স্থান চিহ্নিতকরণ, স্কুল জোনে সর্বোচ্চ ২০ কিমি গতিসীমা প্রয়োগ এবং দূরপাল্লার বাসের ফিটনেস অডিট পরিচালনা।'
                : 'Deploying LiDAR drones, artificial intelligence telemetry, and mobile inspection units to identify topological road flaws, enforce speed-calming in school zones, and conduct unannounced fitness audits on long-haul commercial passenger buses.',
            standards: [
                lang === 'bn' ? 'জাতিসংঘ বিশ্ব সড়ক নিরাপত্তা কর্মপরিকল্পনা ২০২১–২০৩০' : 'UN Global Road Safety Plan 2021–2030',
                lang === 'bn' ? 'স্কুল ও হাসপাতাল জোনে ২০ কিমি/ঘণ্টা বাধ্যবাধকতা' : 'Designated 20 km/h School & Hospital Zones',
                lang === 'bn' ? 'রাত্রিকালীন সাইনপোস্টে রেট্রোরিফ্লেক্টিভ শেভরন স্থাপন' : 'Retroreflective Signage & Chevron Deployment',
                lang === 'bn' ? 'দুর্ঘটনাপরবর্তী জরুরি রেসকিউ টিম প্রটোকল' : 'Rapid Emergency Crash Scene Clearance Protocols',
            ]
        },
        air: {
            title: lang === 'bn' ? 'বেসামরিক ও আঞ্চলিক বিমান চলাচল তদারকি' : 'Civil & Regional Aviation Oversight',
            subtitle: lang === 'bn' ? 'বাণিজ্যিক রানওয়ে, গ্রাউন্ড হ্যান্ডলিং ও যাত্রী অধিকার সংরক্ষণ' : 'Commercial Aerodromes, Commuter Turboprops & Ramp Safety',
            icon: Plane,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            border: 'border-indigo-300',
            complianceScore: '99.1%',
            activeAudits: 14,
            keyMetrics: [
                { label: lang === 'bn' ? 'টারম্যাক নিরাপত্তা পরিদর্শন' : 'Tarmac Safety Inspections', val: lang === 'bn' ? '৩১২টি সফল অভিযান' : '312 Operations' },
                { label: lang === 'bn' ? 'কেবিনে জরুরি ডিফিব্রিলেটর (AED)' : 'Cabin Medical AED Readiness', val: '100%' },
                { label: lang === 'bn' ? 'যাত্রী ক্ষতিপূরণ দাবি নিষ্পত্তি' : 'Passenger Compensation Cases', val: '94%' },
            ],
            description: lang === 'bn'
                ? 'আইকাও (ICAO) আন্তর্জাতিক এভিয়েশন মানদণ্ড অনুসারে রানওয়ের ফ্রিকশন পরীক্ষা, গ্রাউন্ড ট্রলির গতি নিয়ন্ত্রণ এবং ফ্লাইট বিলম্ব বা বাতিলের ক্ষেত্রে যাত্রীদের ন্যায্য ক্ষতিপূরণ চার্টার বাস্তবায়ন।'
                : 'Partnering with certified ICAO aviation inspectors to audit runway friction thresholds, ground handling machinery speeds, pilot fatigue duty regulations, and prompt resolution of passenger rights grievances.',
            standards: [
                lang === 'bn' ? 'আইকাও অ্যানেক্স ১৪ রানওয়ে ও অ্যারোড্রোম স্ট্যান্ডার্ড' : 'ICAO Annex 14 Aerodrome Operations Standard',
                lang === 'bn' ? 'যাত্রী অধিকার ও ফ্লাইট বিলম্ব ক্ষতিপূরণ সনদ' : 'Air Passenger Rights & Delay Compensation Charter',
                lang === 'bn' ? 'এপ্রোন জোনে লাগেজ হ্যান্ডলিং সর্বোচ্চ গতিসীমা' : 'Ramp Ground-Handling Operational Speed Ceilings',
                lang === 'bn' ? 'অভ্যন্তরীণ ফ্লাইটে অটোমেটেড ডিফিব্রিলেটর বাধ্যবাধকতা' : 'Cabin Emergency Medical & Defibrillator Mandate',
            ]
        },
        train: {
            title: lang === 'bn' ? 'রেলপথ ও ক্রসিং নিরাপত্তা সুরক্ষা' : 'Railway & Commuter Corridor Integrity',
            subtitle: lang === 'bn' ? 'লেভেল ক্রসিং, অটোমেটেড সিগন্যালিং ও ট্র্যাক মনিটরিং' : 'Level Crossings, Interlocking Signals & Trackside Safety',
            icon: Train,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            border: 'border-emerald-300',
            complianceScore: '91.8%',
            activeAudits: 36,
            keyMetrics: [
                { label: lang === 'bn' ? 'সোলার রাডার ক্রসিং চালু' : 'Automated Warning Crossings', val: lang === 'bn' ? '৪২টি গ্রামীণ পয়েন্ট' : '42 Rural Stations' },
                { label: lang === 'bn' ? 'রেললাইন স্ট্রাকচারাল অডিট' : 'Track Structural Inspections', val: lang === 'bn' ? '৮৪০ কিমি সম্পন্ন' : '840 km Surveyed' },
                { label: lang === 'bn' ? 'ছাদে ভ্রমণের ঝুঁকি হ্রাস' : 'Rooftop Travel Incidents', val: '96%' },
            ],
            description: lang === 'bn'
                ? 'গেটম্যানবিহীন ঝুঁকিপূর্ণ রেল ক্রসিংয়ে ট্রেন আসার ৪০ সেকেন্ড আগেই শব্দ ও লাল আলোর সতর্কবার্তা পাঠানোর স্বয়ংক্রিয় সোলার রাডার প্রযুক্তি স্থাপন এবং রেললাইনে হাঁটারোধে জনসচেতনতা।'
                : 'Engineering solar-powered automated radar and acoustic strobes at vulnerable unmanned rail intersections. Conducting community-level anti-trespass campaigns and rigorous track inspection telemetry.',
            standards: [
                lang === 'bn' ? 'ইউআইসি (UIC) আন্তর্জাতিক রেলওয়ে সেফটি কোড' : 'International Union of Railways (UIC) Safety Code',
                lang === 'bn' ? 'স্বয়ংক্রিয় সাইরেন ও লাল সংকেতযুক্ত লেভেল ক্রসিং' : 'Proximity-Triggered Dual Siren Level Crossing Beacons',
                lang === 'bn' ? 'ইলেকট্রনিক ফিশপ্লেট ও রেললাইন সংযোগ নজরদারি' : 'Continuous Electronic Fishplate & Ballast Monitoring',
                lang === 'bn' ? 'ট্রেনের ছাদে বা বাফারে ভ্রমণ পুরোপুরি নিষিদ্ধকরণ' : 'Zero-Tolerance Youth Trackside Trespassing Drives',
            ]
        },
        water: {
            title: lang === 'bn' ? 'নদীপথ ও নৌযান সুরক্ষা কার্যক্রম' : 'Inland Riverine & Maritime Safety',
            subtitle: lang === 'bn' ? 'লঞ্চ টার্মিনাল, ড্রাফট লাইন চেক ও দুর্যোগপূর্ণ আবহাওয়া মান্যতা' : 'Passenger Ferry Terminals, Coastal Launches & Vessel Stability',
            icon: Ship,
            color: 'text-teal-600',
            bg: 'bg-teal-50 text-teal-700 border-teal-200',
            border: 'border-teal-300',
            complianceScore: '89.5%',
            activeAudits: 29,
            keyMetrics: [
                { label: lang === 'bn' ? 'টার্মিনালে স্ক্যানকৃত লঞ্চ' : 'Holiday Ferries Screened', val: lang === 'bn' ? '১,৪৫০+ নৌযান' : '1,450+ Vessels' },
                { label: lang === 'bn' ? 'শিশুদের লাইফজ্যাকেট সরবরাহ' : 'Child Lifejackets Deployed', val: lang === 'bn' ? '১৫,০০০টি' : '15,000 Units' },
                { label: lang === 'bn' ? 'ওভারলোড হওয়া আটকানো হয়েছে' : 'Overloaded Launches Prevented', val: lang === 'bn' ? '১৪২টি ট্রিপ' : '142 Dispatches' },
            ],
            description: lang === 'bn'
                ? 'বর্ষা ও কালবৈশাখীর মৌসুমে অতিরিক্ত যাত্রী বোঝাই প্রতিরোধে টার্মিনালে ডিজিটাল হেডকাউন্ট, জাহাজের নিরাপদ লোড লাইন যাচাই এবং শিশুদের জন্য বিনামূল্যে লাইফজ্যাকেট বিতরণ।'
                : 'Preventing catastrophic river vessel capsizing during turbulent monsoon weather. Implementing turnstile optical passenger counters, certified Plimsoll load-line markings, and rapid emergency rescue coordination.',
            standards: [
                lang === 'bn' ? 'আইএমও (IMO) অভ্যন্তরীণ নদীপথ যাত্রী নিরাপত্তা বিধিমালা' : 'IMO Riverine & Coastal Passenger Safety Code',
                lang === 'bn' ? 'ছাড়ার পূর্বে যাত্রীর ডিজিটাল হেডকাউন্ট বাধ্যতামূলক' : 'Pre-Departure Optical Passenger Headcount Mandate',
                lang === 'bn' ? 'যথাযথ বয়া ও ফ্লোটেশন ভেস্টের শতভাগ প্রাপ্যতা' : 'Certified Buoyant Apparatus & Child Flotation Devices',
                lang === 'bn' ? 'নৌপুলিশের ঝড় সতর্কবার্তা লাল সংকেত অনুসরণ' : 'Strict River Police Weather Warning Flag Observance',
            ]
        }
    };

    const current = sectors[activeSector];
    const SectorIcon = current.icon;

    return (
        <section id="quadrants" className="py-24 relative bg-slate-50/70 border-y border-slate-200/80 overflow-hidden font-bengali">
            {/* Subtle Grid Accent matching Hero */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <Activity className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('quadrantsBadge')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('quadrantsTitle')}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                        {t('quadrantsSubtitle')}
                    </p>
                </div>

                {/* 4 Quadrant Selector Cards: Glossy Frosted Glass */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
                    {[
                        { id: 'road', name: t('sectorRoad'), icon: Car, color: 'text-sky-600', bg: 'bg-sky-50' },
                        { id: 'air', name: t('sectorAir'), icon: Plane, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                        { id: 'train', name: t('sectorTrain'), icon: Train, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                        { id: 'water', name: t('sectorWater'), icon: Ship, color: 'text-teal-600', bg: 'bg-teal-50' },
                    ].map((sec) => {
                        const Icon = sec.icon;
                        const isSelected = activeSector === sec.id;
                        return (
                            <button
                                key={sec.id}
                                onClick={() => setActiveSector(sec.id)}
                                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 relative overflow-hidden group ${
                                    isSelected
                                        ? 'bg-white/90 border-blue-500/80 shadow-[0_12px_36px_rgba(14,165,233,0.18)] scale-[1.02] ring-2 ring-blue-500/20'
                                        : 'bg-white/60 hover:bg-white/85 border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.05)] text-slate-700 backdrop-blur-xl hover:-translate-y-0.5'
                                }`}
                            >
                                {/* Glossy top edge highlight */}
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-3.5">
                                    <div className={`p-3 rounded-2xl ${sec.bg} ${sec.color} border border-white/80 shadow-sm backdrop-blur-md group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    {isSelected ? (
                                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 text-[11px] font-extrabold border border-emerald-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span>Active</span>
                                        </span>
                                    ) : (
                                        <span className="text-[11px] font-semibold text-slate-400">Live</span>
                                    )}
                                </div>
                                <h3 className={`font-black text-base sm:text-lg mb-1 tracking-tight ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>
                                    {sec.name}
                                </h3>
                                <p className="text-xs text-slate-500 font-medium">
                                    {sectors[sec.id].activeAudits} {t('liveAudits')}
                                </p>
                            </button>
                        );
                    })}
                </div>

                {/* Detailed Active Quadrant Panel: Elevated Majestic Frosted Card */}
                <div className="relative overflow-hidden rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/90 p-6 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.08)] transition-all duration-500">
                    {/* Glossy top edge reflection */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Details */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-xl border backdrop-blur-md shadow-sm ${current.bg}`}>
                                    {lang === 'bn' ? 'সক্রিয় পরিদর্শন শাখা' : 'Active Surveillance Division'}
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold bg-white/60 px-3 py-1 rounded-xl border border-slate-200/60 backdrop-blur-md">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>{lang === 'bn' ? 'আন্তর্জাতিক সেফটি স্ট্যান্ডার্ড' : 'International Protocol Grade'}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                                    {current.title}
                                </h3>
                                <p className="text-sm sm:text-base text-blue-700 font-bold mt-1.5">
                                    {current.subtitle}
                                </p>
                            </div>

                            <p className="text-base text-slate-600 leading-relaxed font-medium">
                                {current.description}
                            </p>

                            {/* Standards Bullet Points */}
                            <div className="space-y-3 pt-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                                    {t('standardsHeading')}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {current.standards.map((std, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 bg-white/70 backdrop-blur-md p-3 rounded-2xl border border-white/90 shadow-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                            <span className="font-semibold">{std}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Metrics Box: Frosted Glass Pod */}
                        <div className="lg:col-span-5 bg-slate-50/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 shadow-inner space-y-6">
                            <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
                                <div>
                                    <span className="text-xs text-slate-500 block font-bold mb-0.5">{t('complianceRating')}</span>
                                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{current.complianceScore}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-slate-500 block font-bold mb-0.5">{t('liveAudits')}</span>
                                    <span className="text-2xl font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200/80 inline-block">{current.activeAudits} Live</span>
                                </div>
                            </div>

                            {/* Impact Stats List */}
                            <div className="space-y-3">
                                {current.keyMetrics.map((met, idx) => (
                                    <div key={idx} className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-between shadow-sm">
                                        <span className="text-xs text-slate-700 font-semibold">{met.label}</span>
                                        <span className="text-xs font-extrabold text-slate-900 bg-slate-100/80 px-3 py-1 rounded-xl border border-slate-200/60">
                                            {met.val}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-incident-modal'))}
                                    className="group relative overflow-hidden w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 hover:from-blue-500 hover:to-sky-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                    <span>{t('actionAudit')}</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
