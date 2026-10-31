import React, { useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    HeartPulse, 
    ShieldAlert, 
    AlertOctagon, 
    CheckCircle2, 
    XCircle, 
    PhoneCall, 
    Sparkles, 
    Activity, 
    ArrowRight, 
    Flame, 
    LifeBuoy, 
    HelpCircle,
    UserCheck,
    Clock
} from 'lucide-react';

export default function EmergencyRescueGuideSection() {
    const { lang } = useLanguage();
    const isBangla = lang === 'bn';
    const [activeTab, setActiveTab] = useState('steps'); // 'steps' | 'dos_donts' | 'golden_hour'

    // The 6 Vital Rescue Protocol Steps
    const rescueSteps = [
        {
            step: '০১',
            title: isBangla ? 'ঘটনাস্থল নিরাপদ করুন (Scene Safety)' : 'Secure the Crash Scene First',
            tag: isBangla ? 'আগুন ও দ্বিতীয় দুর্ঘটনা প্রতিরোধ' : 'Prevent Fire & Secondary Pile-up',
            desc: isBangla 
                ? 'আহত ব্যক্তির কাছে যাওয়ার আগে নিশ্চিত করুন কোনো জ্বলন্ত তার, গ্যাস বা তেলের লিকেজ নেই। গাড়ির চাবি বন্ধ (Ignition OFF) করুন এবং অন্য গাড়ির ধাক্কা এড়াতে ৫০ মিটার পেছনে সতর্কবার্তা চিহ্ন দিন।'
                : 'Before approaching, ensure no fuel leaks, electrical wires, or oncoming traffic hazards. Turn off the ignition key and place warning markers 50 meters behind the crash to prevent secondary collisions.',
            warning: isBangla 
                ? 'নিজে নিরাপদ না থাকলে উদ্ধার করতে যাবেন না।' 
                : 'Never become a secondary victim yourself.',
            badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-300/60',
            borderColor: 'border-amber-200/80',
        },
        {
            step: '০২',
            title: isBangla ? 'ঘাড় ও মেরুদণ্ড অনড় রাখুন (Cervical Spine Protection)' : 'Immobilize Cervical Spine & Neck',
            tag: isBangla ? 'সবচেয়ে ঝুঁকিপূর্ণ ধাপ — ভুল করলেই মৃত্যু' : 'Critical: Misalignment Causes Fatal Paralysis',
            desc: isBangla 
                ? 'আহত ব্যক্তির ঘাড় বা মাথা কখনো হ্যাঁচকা টান দেবেন না বা মোচড়াবেন না! সড়ক দুর্ঘটনায় ঘাড়ের হাড় অত্যন্ত ভঙ্গুর থাকে; মাথা ঝাঁকালেই স্পাইনাল কর্ড ছিঁড়ে ঘটনাস্থলেই মৃত্যু বা আজীবনের পঙ্গুত্ব ঘটে। দুই হাত দিয়ে মাথা ও ঘাড় সোজা রাখুন।'
                : 'NEVER pull, bend, or jerk the victim’s head or neck! High-impact crashes fracture cervical vertebrae. Any sudden neck movement can sever the spinal cord, causing instant respiratory arrest or quadriplegia.',
            warning: isBangla 
                ? 'মাথা, ঘাড় ও শরীর সবসময় এক সরলরেখায় রাখতে হবে।' 
                : 'Keep head, neck, and torso in a rigid straight line.',
            badgeColor: 'bg-red-500/10 text-red-700 border-red-300/60',
            borderColor: 'border-red-200/80',
        },
        {
            step: '০৩',
            title: isBangla ? 'শ্বাসনালী উন্মুক্ত ও পরীক্ষা করুন (Airway & Breathing)' : 'Clear Airway & Check Breathing',
            tag: isBangla ? 'শ্বাসরোধ থেকে বাঁচান' : 'Prevent Asphyxiation',
            desc: isBangla 
                ? 'রোগী অচেতন হলে মুখের ভেতর জমে থাকা রক্ত, বমি বা ভাঙা দাঁত আলতোভাবে পরিষ্কার করুন যাতে শ্বাস বন্ধ না হয়ে যায়। ঘাড় পেছনের দিকে না বাঁকিয়ে চোয়াল আলতোভাবে ওপরের দিকে তুলুন (Jaw-thrust Maneuver)।'
                : 'If unconscious, gently clear mouth of blood, vomit, or debris to prevent fatal choking. Use the Jaw-thrust maneuver without tilting the neck backwards if cervical trauma is suspected.',
            warning: isBangla 
                ? 'অচেতন ব্যক্তির মুখে ভুলেও কোনো পানি বা ওষুধ ঢালবেন না।' 
                : 'NEVER force liquids into an unconscious person.',
            badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-300/60',
            borderColor: 'border-blue-200/80',
        },
        {
            step: '০৪',
            title: isBangla ? 'তীব্র রক্তপাত দ্রুত বন্ধ করুন (Direct Pressure)' : 'Stop Severe Bleeding Immediately',
            tag: isBangla ? 'শক ও অতিরিক্ত রক্তক্ষরণ রোধ' : 'Prevent Hemorrhagic Shock',
            desc: isBangla 
                ? 'যেকোনো পরিষ্কার কাপড়, গজ বা ব্যান্ডেজ দিয়ে ক্ষতের ওপর দুই হাত দিয়ে টানা ৫ থেকে ১০ মিনিট শক্তভাবে চেপে ধরে রাখুন। ক্ষতস্থানে ঢুকে থাকা কোনো লোহার রড বা কাঁচ ভুলেও টান দিয়ে বের করবেন না, এতে রক্তক্ষরণ বহুগুণ বেড়ে যায়।'
                : 'Apply firm, continuous direct pressure over bleeding wounds with a clean cloth or sterile gauze for 5-10 minutes. NEVER extract impaled objects (iron rods/glass); stabilize them in place.',
            warning: isBangla 
                ? 'ক্ষতে ঢুকে থাকা কোনো বস্তু কখনোই টেনে বের করবেন না।' 
                : 'Do not pull out impaled glass or metal fragments.',
            badgeColor: 'bg-rose-500/10 text-rose-700 border-rose-300/60',
            borderColor: 'border-rose-200/80',
        },
        {
            step: '০৫',
            title: isBangla ? 'সঠিক পদ্ধতিতে বহন করুন (Synchronized Log-Roll Carry)' : 'Safe Lifting via Synchronized Log-Roll',
            tag: isBangla ? '৩/৪ জনের সমন্বিত সমান্তরাল উত্তোলন' : '3-4 Person Flat Board Transfer',
            desc: isBangla 
                ? 'আহত ব্যক্তিকে হাত-পা ধরে ঝুলিয়ে বা বস্তার মতো টেনে তুলবেন না! ৩-৪ জন উদ্ধারকারী সমান্তরালে দাঁড়ান: একজন মাথা-ঘাড় ধরে রাখবেন, একজন বুক ও কোমর, এবং অন্যজন পা। ৩ গুনতে গুনতে গাছের গুঁড়ির মতো এক সাথে সমানভাবে তুলুন এবং শক্ত তক্তা বা স্ট্রেচারে নিন।'
                : 'Never lift a victim like a sack of potatoes with limbs dangling! Use 3-4 synchronized rescuers: one locks the head/neck, two support the torso/pelvis, one supports the legs. Lift simultaneously as a single rigid unit.',
            warning: isBangla 
                ? 'হাত-পা ধরে দোলা দিয়ে কখনোই রোগীকে তোলা যাবে না।' 
                : 'Never swing victim by hands and ankles.',
            badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-300/60',
            borderColor: 'border-emerald-200/80',
        },
        {
            step: '০৬',
            title: isBangla ? 'জরুরি কল ও উষ্ণতা রক্ষা (Golden Hour Response)' : 'Call 999 / 16100 & Keep Warm',
            tag: isBangla ? 'প্রথম ৬০ মিনিট সবচেয়ে মূল্যবান' : 'Hospital Dispatch within 60 Mins',
            desc: isBangla 
                ? 'অবিলম্বে জাতীয় জরুরি সেবা ৯৯৯ অথবা নিরাপদ যাতায়াত হেল্পলাইন ১৬১০০-এ কল দিন। সঠিক স্থান, আহতের সংখ্যা এবং অবস্থা স্পষ্ট করে জানান। অ্যাম্বুলেন্স না আসা পর্যন্ত রোগীকে চাদর বা কাপড় দিয়ে উষ্ণ রাখুন যাতে হাইপোথার্মিয়া না হয়।'
                : 'Dial 999 or 16100 immediately. State the exact highway milestone, number of casualties, and entrapment status. Keep the patient warm with a blanket to prevent shock and hypothermia.',
            warning: isBangla 
                ? 'ভিড় জমিয়ে রোগীর অক্সিজেনের বাতাস বন্ধ করবেন না।' 
                : 'Disperse crowds to allow fresh air circulation.',
            badgeColor: 'bg-teal-500/10 text-teal-700 border-teal-300/60',
            borderColor: 'border-teal-200/80',
        },
    ];

    // Do's and Don'ts Checklist
    const dosList = isBangla ? [
        'আহত ব্যক্তির মাথা ও ঘাড় সবসময় শরীরের সাথে সোজা ও অনড় রাখুন।',
        'রক্তক্ষরণ হলে পরিষ্কার কাপড় দিয়ে শক্তভাবে চেপে ধরে রাখুন।',
        'শ্বাস-প্রশ্বাস স্বাভাবিক রাখতে মুখের ভেতরের রক্ত বা বমি পরিষ্কার করে দিন।',
        '৩-৪ জন মিলে শক্ত তক্তা বা স্ট্রেচারে সোজাভাবে সমান্তরালভাবে রোগীকে ওঠান।',
        'দ্রুততম সময়ে ৯৯৯ অথবা ১৬১০০ এ সঠিক লোকেশন জানিয়ে অ্যাম্বুলেন্স ডাকুন।',
        'রোগীকে চাদর বা কাপড় দিয়ে জড়িয়ে শরীর গরম রাখুন।'
    ] : [
        'Keep head, neck, and torso perfectly aligned in a straight line.',
        'Apply firm direct pressure to bleeding wounds with clean cloth.',
        'Clear mouth of vomit, blood, or dentures to preserve open airway.',
        'Use synchronized 3-4 person log-roll to transfer victim onto a flat rigid board.',
        'Call 999 / 16100 immediately with exact highway landmark.',
        'Keep patient warm with a blanket to prevent circulatory shock.'
    ];

    const dontsList = isBangla ? [
        'অজ্ঞান বা অর্ধচেতন রোগীর মুখে ভুলেও পানি, শরবত বা খাবার দেবেন না — এতে ফুসফুসে পানি ঢুকে দম আটকে মারা যায়!',
        'আহত ব্যক্তিকে হাত ও পা ধরে ঝুলিয়ে বা ঝাঁকিয়ে গাড়িতে তুলতে যাবেন না — এতে স্পাইনাল কর্ড ছিঁড়ে যায়।',
        'ঘাড় বা মাথা কখনোই এদিক-ওদিক দোলাবেন না বা কোলবালিশের মতো উঁচু করবেন না।',
        'শরীরে বা বুকে ঢুকে থাকা কাঁচ, রড বা কোনো বস্তু নিজে নিজে টেনে বের করবেন না।',
        'আহত ব্যক্তির চারপাশে অহেতুক গোল হয়ে ভিড় জমাবেন না; বাতাস চলাচলের জায়গা দিন।',
        'পেশাদার রেসকিউ টিম না আসা পর্যন্ত রোগী নড়াচড়া করতে চাইলে তাকে শক্তভাবে শান্ত থাকতে বলুন।'
    ] : [
        'NEVER pour water or fluids into an unconscious victim\'s mouth (causes fatal airway aspiration)!',
        'Never lift by pulling limbs with the spine curving downward — it severs spinal nerves!',
        'Never twist or bend the neck; do not put high pillows under the head.',
        'Never extract embedded glass, steel rods, or shrapnel from wounds.',
        'Do not crowd around the patient — maintain an open perimeter for oxygen.',
        'Do not allow trauma victims to stand up or walk even if they claim they feel fine.'
    ];

    return (
        <section id="rescue-guide" className="py-24 relative bg-slate-50/70 border-y border-slate-200/80 overflow-hidden font-bengali">
            {/* Subtle Grid Accent matching Hero */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header: Hero-Style Frosted Pill & High-Impact Headline */}
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                        </span>
                        <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                        <span className="text-rose-700 font-extrabold uppercase tracking-wider text-[11px]">
                            {isBangla ? 'জরুরি উদ্ধার ও প্রাথমিক চিকিৎসা নির্দেশিকা' : 'EMERGENCY CRASH RESCUE PROTOCOLS'}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-600 font-bold text-[11px]">
                            {isBangla ? 'জীবন বাঁচানোর গোল্ডেন রুলস' : 'Lifesaving Protocols'}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {isBangla ? (
                            <>
                                দুর্ঘটনায় আহতদের <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent pb-1">সঠিক উদ্ধার পদ্ধতি</span>
                            </>
                        ) : (
                            <>
                                Scientific <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent pb-1">Trauma Rescue Guidelines</span>
                            </>
                        )}
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                        {isBangla
                            ? 'ভুলভাবে টেনে তোলা বা ঘাড় বাঁকানোর কারণে ঘটনাস্থলেই রোগীর মৃত্যু বা আজীবনের পঙ্গুত্ব হতে পারে। প্রতিটি সাধারণ নাগরিকের জন্য অত্যন্ত প্রয়োজনীয় বৈজ্ঞানিক উদ্ধার কৌশল জেনে নিন।'
                            : 'Improper handling of an injured victim can lead to permanent spinal paralysis or death on the spot. Learn the essential Golden Hour trauma rescue steps to save lives.'}
                    </p>
                </div>

                {/* Interactive Mode Tabs: Frosted Segmented Control */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                    <button
                        onClick={() => setActiveTab('steps')}
                        className={`relative overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 ${
                            activeTab === 'steps'
                                ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/25 scale-105'
                                : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                        }`}
                    >
                        {activeTab === 'steps' && (
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        )}
                        <Activity className="w-4 h-4" />
                        <span>{isBangla ? '৬টি মূল উদ্ধার ধাপ' : '6 Core Rescue Steps'}</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('dos_donts')}
                        className={`relative overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 ${
                            activeTab === 'dos_donts'
                                ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-lg shadow-sky-600/25 scale-105'
                                : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                        }`}
                    >
                        {activeTab === 'dos_donts' && (
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        )}
                        <AlertOctagon className="w-4 h-4" />
                        <span>{isBangla ? 'কী করবেন ও কী করবেন না' : 'Do\'s & Critical Don\'ts'}</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('golden_hour')}
                        className={`relative overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 ${
                            activeTab === 'golden_hour'
                                ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white shadow-lg shadow-amber-600/25 scale-105'
                                : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                        }`}
                    >
                        {activeTab === 'golden_hour' && (
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        )}
                        <Clock className="w-4 h-4" />
                        <span>{isBangla ? 'গোল্ডেন আওয়ারের গুরুত্ব' : 'The Golden Hour Rule'}</span>
                    </button>
                </div>

                {/* TAB 1: 6 STEP RESCUE PROTOCOL GRID */}
                {activeTab === 'steps' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {rescueSteps.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden bg-white/70 hover:bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] shadow-[0_8px_30px_rgb(0,0,0,0.05)] group"
                            >
                                {/* Glossy top edge highlight */}
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-red-600/30">
                                            {item.step}
                                        </span>
                                        <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-xl border backdrop-blur-md ${item.badgeColor}`}>
                                            {item.tag}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 group-hover:text-red-700 transition-colors tracking-tight leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-200/80">
                                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-50/80 border border-red-200/60 text-red-800 text-xs font-bold">
                                        <AlertOctagon className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                        <span>{item.warning}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TAB 2: DO'S AND DON'TS COMPARISON PODS */}
                {activeTab === 'dos_donts' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* DO's Pod */}
                        <div className="relative overflow-hidden bg-white/75 backdrop-blur-2xl rounded-3xl border border-emerald-200/80 p-6 sm:p-8 shadow-[0_16px_50px_rgba(16,185,129,0.08)]">
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none"></div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                        {isBangla ? 'কী করবেন (Lifesaving Do\'s)' : 'What You MUST Do'}
                                    </h3>
                                    <p className="text-xs text-emerald-700 font-extrabold uppercase tracking-wider">
                                        {isBangla ? 'সঠিক উদ্ধারের সুবর্ণ নিয়ম' : 'Recommended Protocol'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3.5">
                                {dosList.map((doItem, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 border border-emerald-100 shadow-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">{doItem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DON'Ts Pod */}
                        <div className="relative overflow-hidden bg-white/75 backdrop-blur-2xl rounded-3xl border border-red-200/80 p-6 sm:p-8 shadow-[0_16px_50px_rgba(239,68,68,0.08)]">
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent pointer-events-none"></div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 shadow-sm">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                        {isBangla ? 'ভুলেও যা করবেন না (Fatal Don\'ts)' : 'What You MUST NEVER Do'}
                                    </h3>
                                    <p className="text-xs text-red-700 font-extrabold uppercase tracking-wider">
                                        {isBangla ? 'এসব ভুলের কারণে রোগী ঘটনাস্থলে মারা যায়' : 'Severe Mistakes That Cause Instant Death'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3.5">
                                {dontsList.map((dontItem, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-red-50/60 border border-red-100 shadow-sm">
                                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                        <span className="text-xs sm:text-sm text-slate-900 font-extrabold leading-relaxed">{dontItem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3: THE GOLDEN HOUR TIMELINE EXPLAINER */}
                {activeTab === 'golden_hour' && (
                    <div className="relative overflow-hidden bg-white/75 backdrop-blur-2xl rounded-3xl border border-white/90 p-6 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-extrabold border border-amber-300">
                                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                                    <span>{isBangla ? 'গোল্ডেন আওয়ারের প্রথম ৬০ মিনিট' : 'The First 60 Minutes Window'}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                                    {isBangla
                                        ? 'দুর্ঘটনার প্রথম ৬০ মিনিটই নির্ধারণ করে আহত ব্যক্তি বাঁচবে নাকি মারা যাবে!'
                                        : 'The First 60 Minutes After Trauma Dictate Life vs. Death'}
                                </h3>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    {isBangla
                                        ? 'চিকিৎসাবিজ্ঞানে দুর্ঘটনার পরবর্তী প্রথম ৬০ মিনিটকে "গোল্ডেন আওয়ার" বলা হয়। এই সময়ের মধ্যে অতিরিক্ত রক্তক্ষরণ বন্ধ করা, ঘাড়-মেরুদণ্ড সোজা রেখে দ্রুত অ্যাম্বুলেন্সে ট্রমা সেন্টারে পাঠাতে পারলে সড়ক দুর্ঘটনায় মৃত্যুর হার ৭০% পর্যন্ত কমিয়ে আনা সম্ভব।'
                                        : 'Medical science terms the first 60 minutes after a crash the "Golden Hour". Rapid bleeding control, cervical spine immobilization, and swift dispatch to a trauma facility during this window reduces post-crash mortality by up to 70%.'}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm text-center">
                                        <span className="text-2xl font-black text-red-600 block">০-১০ মিনিট</span>
                                        <span className="text-xs text-slate-700 font-bold mt-1 block">ঘটনাস্থল সুরক্ষা ও ঘাড় অনড়</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm text-center">
                                        <span className="text-2xl font-black text-blue-600 block">১০-২৫ মিনিট</span>
                                        <span className="text-xs text-slate-700 font-bold mt-1 block">রক্তপাত বন্ধ ও ৯৯৯ কল</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm text-center">
                                        <span className="text-2xl font-black text-emerald-600 block">২৫-৬০ মিনিট</span>
                                        <span className="text-xs text-slate-700 font-bold mt-1 block">সমতলে অ্যাম্বুলেন্স পরিবহন</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl border border-slate-800">
                                <h4 className="text-lg font-black text-white flex items-center gap-2">
                                    <PhoneCall className="w-5 h-5 text-amber-400" />
                                    <span>{isBangla ? 'জরুরি উদ্ধার নম্বরসমূহ' : 'Emergency Hotlines'}</span>
                                </h4>
                                <div className="space-y-3">
                                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-slate-300 block font-semibold">জাতীয় জরুরি সেবা (পুলিশ, অ্যাম্বুলেন্স, ফায়ার)</span>
                                            <span className="text-2xl font-black text-white">৯৯৯ (999)</span>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-wider bg-rose-600 text-white px-3 py-1 rounded-full">টোল-ফ্রি</span>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-slate-300 block font-semibold">নিরাপদ যাতায়াত ট্রানজিট ক্রাইসিস ডেস্ক</span>
                                            <span className="text-2xl font-black text-amber-400">১৬১০০ (16100)</span>
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-wider bg-emerald-600 text-white px-3 py-1 rounded-full">২৪/৭ লাইভ</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                    {isBangla 
                                        ? 'কল দেওয়ার সময় শান্ত থাকুন, হাইওয়ের মাইলস্টোন বা পরিচিত মোড়ের নাম ও আহতের সঠিক সংখ্যা জানান।' 
                                        : 'State highway milestones, exact landmark, and number of trapped casualties calmly to the dispatcher.'}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom Emergency Banner: Quick Action Prompt */}
                <div className="mt-14 relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-red-600/25 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>

                    <div className="space-y-1.5 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-0.5 rounded-full border border-white/30 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span>{isBangla ? 'জনস্বার্থে নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ' : 'Public Awareness Protocol'}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                            {isBangla 
                                ? 'আপনি কি রাস্তায় কোনো বড় দুর্ঘটনা বা ট্রানজিট ঝুঁকি প্রত্যক্ষ করছেন?' 
                                : 'Are You Witnessing an Active Transit Hazard or Serious Accident?'}
                        </h3>
                        <p className="text-xs sm:text-sm text-red-100 font-medium">
                            {isBangla 
                                ? 'দেরি না করে সরাসরি আমাদের সার্বক্ষণিক সেন্ট্রাল মনিটরিং টিমের কাছে লাইভ ঝুঁকি রিপোর্ট করুন।' 
                                : 'Report hazards directly to our 24/7 National Transit Surveillance Command.'}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-incident-modal'))}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-red-700 font-black text-xs sm:text-sm shadow-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <ShieldAlert className="w-4 h-4 text-red-600" />
                            <span>{isBangla ? 'লাইভ ঝুঁকি রিপোর্ট করুন' : 'Submit Instant Hazard Report'}</span>
                        </button>
                        <a
                            href="tel:16100"
                            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-red-950/40 hover:bg-red-950/60 text-white font-black text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                        >
                            <PhoneCall className="w-4 h-4 text-amber-300" />
                            <span>{isBangla ? 'হেল্পলাইন: ১৬১০০' : 'Hotline: 16100'}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

