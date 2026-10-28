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
        <section id="awareness" className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t('awarenessBadge')}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {t('awarenessTitle')}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {t('awarenessSubtitle')}
                    </p>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
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
                                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/20 scale-105'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{mode.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Guidelines Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {currentTips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl border border-slate-200 p-6 flex items-start gap-4 hover:border-sky-300 transition-all shadow-sm hover:shadow-md group"
                        >
                            <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                                    {tip.tip}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {tip.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Movement Banner / Volunteer Pledge */}
                <div id="join-movement" className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-teal-950 text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
                    <div className="relative max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                            <Users className="w-3.5 h-3.5" />
                            <span>{lang === 'bn' ? 'গ্লোবাল ভলান্টিয়ার ব্রিগেড: ৩,২০০+ সদস্য' : 'Global Volunteer Brigade: 3,200+ Members'}</span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {t('volunteerTitle')}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            {t('volunteerDesc')}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a
                                href="mailto:volunteer@nirapodjatayat.org?subject=Joining%20Nirapod%20Jatayat%20Brigade"
                                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-900/40 transition-all hover:scale-105"
                            >
                                {t('volunteerBtn')}
                            </a>
                            <a
                                href="#stories"
                                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-sm"
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
