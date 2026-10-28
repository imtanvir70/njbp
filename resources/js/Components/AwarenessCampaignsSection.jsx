import React, { useState } from 'react';
import { 
    BookOpen, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle, 
    AlertTriangle, 
    Download, 
    Share2, 
    HelpCircle,
    ChevronRight,
    Users
} from 'lucide-react';

export default function AwarenessCampaignsSection({ campaigns = [] }) {
    const [selectedTransit, setSelectedTransit] = useState('road');

    const transitIcons = {
        road: Car,
        air: Plane,
        train: Train,
        water: Ship,
        all: BookOpen,
    };

    const transitTips = {
        road: [
            { tip: 'Mandatory Dual Helmet Usage', desc: 'Rider and pillion must wear certified DOT/ECE standard helmets with chin straps fastened tight.' },
            { tip: 'Safe Following Distance', desc: 'Maintain at least 3-second gap in dry weather, doubling to 6 seconds during heavy rain or monsoon conditions.' },
            { tip: 'Pedestrian Priority at Zebra Lines', desc: 'Motorists must completely yield at marked pedestrian crossings. Pedestrians must avoid wearing headphones.' },
            { tip: 'Anti-Fatigue Driving Limits', desc: 'Long-haul drivers must take a 15-minute rest pause after every 4 continuous hours behind the wheel.' }
        ],
        air: [
            { tip: 'Cabin Seatbelt Safety', desc: 'Keep seatbelt fastened snugly even when cruise sign is off to prevent injury from unexpected clear-air turbulence.' },
            { tip: 'Lithium Battery Protocol', desc: 'Never check spare powerbanks or e-cigarettes into cargo hold luggage; keep them secured in cabin carry-on.' },
            { tip: 'Emergency Exit Row Familiarity', desc: 'Count rows between your seat and the two closest exits; study the aircraft safety briefing card upon boarding.' },
            { tip: 'Air Passenger Rights Awareness', desc: 'Know your statutory rights for refreshments, hotel accommodation, and compensation in case of airline-fault delays.' }
        ],
        train: [
            { tip: 'Unmanned Level Crossing Vigilance', desc: 'Always come to a full stop, turn off high music, look both directions, and listen before crossing any railway track.' },
            { tip: 'Prohibition of Rooftop & Buffer Riding', desc: 'Never sit on train roofs, steps, or buffer couplings. High-voltage overhead cables and low clearance structures cause fatal electrocution.' },
            { tip: 'Never Walk on Railway Tracks', desc: 'Modern diesel and electric locomotives approach at high velocity with low audible cues until dangerously close.' },
            { tip: 'Emergency Cord Protocol', desc: 'Use emergency alarm chain solely in genuine life-threatening emergencies or severe track derailment hazards.' }
        ],
        water: [
            { tip: 'Refusal of Overloaded Vessels', desc: 'Refuse to board any passenger launch whose freeboard deck is submerged or where gangways are completely congested.' },
            { tip: 'Immediate Flotation Device Identification', desc: 'Upon boarding, locate the storage locker containing life jackets and lifebuoys for yourself and children.' },
            { tip: 'Monsoon Meteorological Caution', desc: 'Strictly respect river police caution signals. Never pressure ferry captains to sail in gale or squall warnings.' },
            { tip: 'Emergency Capsizing Posture', desc: 'In case of grounding or distress, remain calm, move away from engine fumes, put on flotation gear, and stay on upper decks.' }
        ]
    };

    const currentTips = transitTips[selectedTransit] || transitTips.road;

    return (
        <section id="awareness" className="py-20 bg-slate-950/80 border-t border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Public Education & Awareness Center</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Empowering Citizens with Safety Knowledge
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        Systemic safety begins with an informed and vigilant public. Explore essential safety guidelines, legal rights, and precautionary protocols for every mode of transit.
                    </p>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {[
                        { id: 'road', name: 'Road Safety Protocol', icon: Car },
                        { id: 'air', name: 'Aviation Guidelines', icon: Plane },
                        { id: 'train', name: 'Railway Precautions', icon: Train },
                        { id: 'water', name: 'Waterway & Ferry Rules', icon: Ship },
                    ].map((mode) => {
                        const Icon = mode.icon;
                        const isSelected = selectedTransit === mode.id;
                        return (
                            <button
                                key={mode.id}
                                onClick={() => setSelectedTransit(mode.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                                    isSelected
                                        ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-xl shadow-sky-500/20 scale-105'
                                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
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
                            className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex items-start gap-4 hover:border-sky-500/40 hover:bg-slate-900 transition-all group"
                        >
                            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="font-bold text-base text-white group-hover:text-sky-300 transition-colors">
                                    {tip.tip}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    {tip.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Movement Banner / Volunteer Pledge */}
                <div id="join-movement" className="relative rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-teal-950 border border-sky-800/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-sky-500/10 to-transparent pointer-events-none"></div>

                    <div className="relative max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                            <Users className="w-3.5 h-3.5" />
                            <span>Global Volunteer Brigade: 3,200+ Members</span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Become a Nirapod Jatayat Safety Ambassador
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Join university students, professional drivers, community leaders, and civic activists. Report unsafe transit conditions in your neighborhood, organize safety rallies, and protect fellow travelers.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a
                                href="mailto:volunteer@nirapodjatayat.org?subject=Joining%20Nirapod%20Jatayat%20Brigade"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-900/40 transition-all hover:scale-105"
                            >
                                Register as Volunteer
                            </a>
                            <a
                                href="#stories"
                                className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
                            >
                                Read How Volunteers Made History
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
