import React, { useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    BookOpen, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle, 
    Users
} from 'lucide-react';

export default function AwarenessCampaignsSection({ campaigns = [] }) {
    const { t, lang } = useLanguage();
    const [selectedTransit, setSelectedTransit] = useState('road');

    const transitTips = {
        road: lang === 'bn' ? [
            { tip: 'উভয় আরোহীর সার্টিফাইড হেলমেট ব্যবহার', desc: 'মোটরসাইকেল চালক ও পেছনের আরোহী উভয়কেই মানসম্মত বিএসটিআই/ডিওটি অনুমোদিত হেলমেটের বেল্ট শক্তভাবে লাগিয়ে নিতে হবে।' },
            { tip: 'নিরাপদ ব্রেকিং দূরত্ব বজায় রাখা', desc: 'শুকনো রাস্তায় সামনের গাড়ি থেকে অন্তত ৩ সেকেন্ড এবং বৃষ্টির দিনে অন্তত ৬ সেকেন্ড নিরাপদ দূরত্ব রেখে গাড়ি ড্রাইভ করুন।' },
            { tip: 'জেব্রা ক্রসিংয়ে পথচারীদের অগ্রাধিকার', desc: 'জেব্রা ক্রসিং ও স্কুল জোনে গাড়ি থামিয়ে পথচারীদের নিরাপদে পারাপারের সুযোগ দিন। কানে হেডফোন গুঁজে রাস্তা পার হওয়া নিষেধ।' },
            { tip: 'ক্লান্ত শরীরে দীর্ঘসময় ড্রাইভ না করা', desc: 'টানা ৪ ঘণ্টা ড্রাইভ করার পর চালকদের অন্তত ১৫ মিনিটের বিরতি নেওয়া জরুরি। অতিরিক্ত ক্লান্তি মহাসড়ক দুর্ঘটনার প্রধান কারণ।' }
        ] : [
            { tip: 'Mandatory Dual Helmet Usage', desc: 'Rider and pillion must wear certified DOT/ECE standard helmets with chin straps fastened tight.' },
            { tip: 'Safe Following Distance', desc: 'Maintain at least 3-second gap in dry weather, doubling to 6 seconds during heavy rain or monsoon conditions.' },
            { tip: 'Pedestrian Priority at Zebra Lines', desc: 'Motorists must completely yield at marked pedestrian crossings. Pedestrians must avoid wearing headphones.' },
            { tip: 'Anti-Fatigue Driving Limits', desc: 'Long-haul drivers must take a 15-minute rest pause after every 4 continuous hours behind the wheel.' }
        ],
        air: lang === 'bn' ? [
            { tip: 'কেবিনে সিটবেল্ট সার্বক্ষণিক বাঁধা', desc: 'ফ্লাইটে সিটবেল্ট সংকেত বন্ধ থাকলেও অপ্রত্যাশিত এয়ার টার্বুলেন্সের আঘাত থেকে বাঁচতে সবসময় আলতোভাবে সিটবেল্ট বেঁধে রাখুন।' },
            { tip: 'পাওয়ারব্যাংক ও ব্যাটারি নিয়মাবলী', desc: 'স্পেয়ার লিথিয়াম পাওয়ারব্যাংক কখনোই কার্গো ব্যাগে দেওয়া যাবে না; এগুলো সবসময় কেবিন হ্যান্ডব্যাগে সাথে রাখতে হবে।' },
            { tip: 'জরুরি নির্গমন দরজার সাথে পরিচিতি', desc: 'আপনার আসন থেকে নিকটতম দুটি ইমার্জেন্সি এক্সিট ডোরের দূরত্ব দেখে নিন এবং ফ্লাইটের সেফটি ব্রিফিং কার্ডটি মনোযোগ দিয়ে পড়ুন।' },
            { tip: 'যাত্রী অধিকার ও ক্ষতিপূরণ সচেতনতা', desc: 'এয়ারলাইন্সের ত্রুটির কারণে ফ্লাইট বিলম্ব বা বাতিল হলে পানীয়, খাবার, হোটেল ও ক্ষতিপূরণ দাবির আইনি বিধান জেনে নিন।' }
        ] : [
            { tip: 'Cabin Seatbelt Safety', desc: 'Keep seatbelt fastened snugly even when cruise sign is off to prevent injury from unexpected clear-air turbulence.' },
            { tip: 'Lithium Battery Protocol', desc: 'Never check spare powerbanks or e-cigarettes into cargo hold luggage; keep them secured in cabin carry-on.' },
            { tip: 'Emergency Exit Row Familiarity', desc: 'Count rows between your seat and the two closest exits; study the aircraft safety briefing card upon boarding.' },
            { tip: 'Air Passenger Rights Awareness', desc: 'Know your statutory rights for refreshments, hotel accommodation, and compensation in case of airline-fault delays.' }
        ],
        train: lang === 'bn' ? [
            { tip: 'অরক্ষিত রেল ক্রসিংয়ে শতভাগ সতর্কতা', desc: 'যেকোনো রেল ক্রসিং পার হওয়ার আগে গাড়ি থামান, গাড়ির মিউজিক বন্ধ করুন এবং ডানে-বামে ভালো করে দেখে ও শুনে নিশ্চিত হোন।' },
            { tip: 'ট্রেনের ছাদে বা ইঞ্জিনে ভ্রমণ সম্পূর্ণ নিষিদ্ধ', desc: 'ট্রেনের ছাদ বা দরজায় ঝুলে যাতায়াত করবেন না। হাই-ভোল্টেজ বিদ্যুতের তার ও ওভারপাসে ধাক্কা লেগে মারাত্মক প্রাণহানি ঘটে।' },
            { tip: 'রেললাইনের ওপর দিয়ে হাঁটা বর্জন করুন', desc: 'রেললাইন কোনো হাঁটার রাস্তা নয়। দ্রুতগতির ট্রেন দূর থেকে নীরব মনে হলেও মুহূর্তের মধ্যে কাছে চলে আসে।' },
            { tip: 'জরুরি অ্যালার্ম চেইনের সঠিক ব্যবহার', desc: 'শুধুমাত্র চরম জীবনহানির ঝুঁকি বা মারাত্মক কোনো দুর্ঘটনার ক্ষেত্রে ট্রেনের জরুরি সংকেত চেইন টানুন।' }
        ] : [
            { tip: 'Unmanned Level Crossing Vigilance', desc: 'Always come to a full stop, turn off high music, look both directions, and listen before crossing any railway track.' },
            { tip: 'Prohibition of Rooftop & Buffer Riding', desc: 'Never sit on train roofs, steps, or buffer couplings. High-voltage overhead cables and low clearance structures cause fatal electrocution.' },
            { tip: 'Never Walk on Railway Tracks', desc: 'Modern diesel and electric locomotives approach at high velocity with low audible cues until dangerously close.' },
            { tip: 'Emergency Cord Protocol', desc: 'Use emergency alarm chain solely in genuine life-threatening emergencies or severe track derailment hazards.' }
        ],
        water: lang === 'bn' ? [
            { tip: 'অতিরিক্ত বোঝাই নৌযান বর্জন করুন', desc: 'যে লঞ্চ বা ট্রলারের পানির লেভেল সীমা ছাড়িয়ে গেছে বা ভেতরে তিল ধারণের জায়গা নেই, সেই নৌযানে কখনোই উঠবেন না।' },
            { tip: 'ওঠার সাথে সাথেই লাইফজ্যাকেট শনাক্তকরণ', desc: 'লঞ্চে ওঠার পরপরই আপনার ও শিশুদের জন্য বয়া এবং লাইফজ্যাকেটের অবস্থান নিশ্চিত করে জেনে নিন।' },
            { tip: 'আবহাওয়া সতর্কবার্তা মান্য করা', desc: 'নদী পুলিশের ২ নম্বর বা তদূর্ধ্ব সতর্ক সংকেত থাকলে লঞ্চের মাস্টারকে ছাড়তে চাপ দেবেন না। প্রাকৃতিক দুর্যোগে যাত্রা স্থগিত রাখুন।' },
            { tip: 'নৌকায় বিপদকালীন শান্ত থাকা', desc: 'কোনো দুর্ঘটনা বা চরে ধাক্কা লাগলে হুড়োহুড়ি না করে লাইফজ্যাকেট পরে ডেক-এর ওপর অবস্থান নিন এবং শিশুদের সুরক্ষিত রাখুন।' }
        ] : [
            { tip: 'Refusal of Overloaded Vessels', desc: 'Refuse to board any passenger launch whose freeboard deck is submerged or where gangways are completely congested.' },
            { tip: 'Immediate Flotation Device Identification', desc: 'Upon boarding, locate the storage locker containing life jackets and lifebuoys for yourself and children.' },
            { tip: 'Monsoon Meteorological Caution', desc: 'Strictly respect river police caution signals. Never pressure ferry captains to sail in gale or squall warnings.' },
            { tip: 'Emergency Capsizing Posture', desc: 'In case of grounding or distress, remain calm, move away from engine fumes, put on flotation gear, and stay on upper decks.' }
        ]
    };

    const currentTips = transitTips[selectedTransit] || transitTips.road;

    return (
        <section id="awareness" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden font-bengali">
            {/* Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('awarenessBadge')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('awarenessTitle')}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                        {t('awarenessSubtitle')}
                    </p>
                </div>

                {/* Mode Selector Tabs: Frosted Glass */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
                    {[
                        { id: 'road', name: t('sectorRoad'), icon: Car },
                        { id: 'air', name: t('sectorAir'), icon: Plane },
                        { id: 'train', name: t('sectorTrain'), icon: Train },
                        { id: 'water', name: t('sectorWater'), icon: Ship },
                    ].map((mode) => {
                        const Icon = mode.icon;
                        const isSelected = selectedTransit === mode.id;
                        return (
                            <button
                                key={mode.id}
                                onClick={() => setSelectedTransit(mode.id)}
                                className={`relative overflow-hidden flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-lg shadow-sky-600/25 scale-105'
                                        : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                                }`}
                            >
                                {isSelected && (
                                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                )}
                                <Icon className="w-4 h-4" />
                                <span>{mode.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Guidelines Cards Grid: Frosted Glass */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {currentTips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden bg-white/70 hover:bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.05)] group"
                        >
                            {/* Glossy top edge highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                            <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:text-white transition-all shadow-sm shrink-0 group-hover:scale-110">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight">
                                    {tip.tip}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                    {tip.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Movement Banner / Volunteer Pledge */}
                <div id="join-movement" className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-slate-700/60">
                    {/* Glossy top edge highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <Users className="w-3.5 h-3.5" />
                            <span>{lang === 'bn' ? 'গ্লোবাল ভলান্টিয়ার ব্রিগেড: ৩,২০০+ সদস্য' : 'Global Volunteer Brigade: 3,200+ Members'}</span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                            {t('volunteerTitle')}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                            {t('volunteerDesc')}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a
                                href="mailto:volunteer@nirapodjatayat.org?subject=Joining%20Nirapod%20Jatayat%20Brigade"
                                className="relative overflow-hidden px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-black text-xs sm:text-sm shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                            >
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                <span>{t('volunteerBtn')}</span>
                            </a>
                            <a
                                href="#stories"
                                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm border border-white/25 transition-all backdrop-blur-md hover:scale-[1.02]"
                            >
                                {t('volunteerSecondary')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
