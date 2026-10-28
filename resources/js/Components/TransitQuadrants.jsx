import React, { useState } from 'react';
import { 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle2, 
    AlertCircle, 
    TrendingUp, 
    ChevronRight, 
    ShieldCheck, 
    Activity,
    Compass
} from 'lucide-react';

export default function TransitQuadrants() {
    const [activeSector, setActiveSector] = useState('road');

    const sectors = {
        road: {
            title: 'Road & Highway Transit Vigilance',
            subtitle: 'National Expressways, Urban Arterials & Rural Corridors',
            icon: Car,
            color: 'from-sky-500 to-blue-600',
            border: 'border-sky-500/40',
            glow: 'shadow-sky-500/10',
            badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
            complianceScore: '94.2%',
            activeAudits: 48,
            keyMetrics: [
                { label: 'Blackspots Remediated', val: '86 Critical Locations' },
                { label: 'Speed Enforcement Zones', val: '1,200+ km Monitored' },
                { label: 'Helmet & Seatbelt Compliance', val: '79% Active Rate' },
            ],
            description: 'Deploying LiDAR drones, artificial intelligence telemetry, and mobile inspection units to identify topological road flaws, enforce speed-calming in school zones, and conduct unannounced fitness audits on long-haul commercial passenger buses.',
            standards: [
                'UN Global Road Safety Plan 2021–2030',
                'Designated 20 km/h School & Hospital Zones',
                'Retroreflective Signage & Chevron Deployment',
                'Rapid Emergency Crash Scene Clearance Protocols',
            ]
        },
        air: {
            title: 'Civil & Regional Aviation Oversight',
            subtitle: 'Commercial Aerodromes, Commuter Turboprops & Ramp Safety',
            icon: Plane,
            color: 'from-indigo-500 to-purple-600',
            border: 'border-indigo-500/40',
            glow: 'shadow-indigo-500/10',
            badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
            complianceScore: '99.1%',
            activeAudits: 14,
            keyMetrics: [
                { label: 'Tarmac Safety Inspections', val: '312 Operations' },
                { label: 'Cabin Medical AED Readiness', val: '100% Domestic Fleet' },
                { label: 'Passenger Compensation Cases', val: '94% Settlement' },
            ],
            description: 'Partnering with certified ICAO aviation inspectors to audit runway friction thresholds, ground handling machinery speeds, pilot fatigue duty regulations, and prompt resolution of passenger rights grievances.',
            standards: [
                'ICAO Annex 14 Aerodrome Operations Standard',
                'Air Passenger Rights & Delay Compensation Charter',
                'Ramp Ground-Handling Operational Speed Ceilings',
                'Cabin Emergency Medical & Defibrillator Mandate',
            ]
        },
        train: {
            title: 'Railway & Commuter Corridor Integrity',
            subtitle: 'Level Crossings, Interlocking Signals & Trackside Safety',
            icon: Train,
            color: 'from-emerald-500 to-teal-600',
            border: 'border-emerald-500/40',
            glow: 'shadow-emerald-500/10',
            badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
            complianceScore: '91.8%',
            activeAudits: 36,
            keyMetrics: [
                { label: 'Automated Warning Crossings', val: '42 Rural Stations' },
                { label: 'Track Structural Inspections', val: '840 km Surveyed' },
                { label: 'Rooftop Travel Incidents', val: '96% Drop' },
            ],
            description: 'Engineering solar-powered automated radar and acoustic strobes at vulnerable unmanned rail intersections. Conducting community-level anti-trespass campaigns and rigorous track inspection telemetry.',
            standards: [
                'International Union of Railways (UIC) Safety Code',
                'Proximity-Triggered Dual Siren Level Crossing Beacons',
                'Continuous Electronic Fishplate & Ballast Monitoring',
                'Zero-Tolerance Youth Trackside Trespassing Drives',
            ]
        },
        water: {
            title: 'Inland Riverine & Maritime Safety',
            subtitle: 'Passenger Ferry Terminals, Coastal Launches & Vessel Stability',
            icon: Ship,
            color: 'from-teal-500 to-cyan-600',
            border: 'border-teal-500/40',
            glow: 'shadow-teal-500/10',
            badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
            complianceScore: '89.5%',
            activeAudits: 29,
            keyMetrics: [
                { label: 'Holiday Ferries Screened', val: '1,450+ Vessels' },
                { label: 'Child Lifejackets Deployed', val: '15,000 Units' },
                { label: 'Overloaded Launches Prevented', val: '142 Dispatches' },
            ],
            description: 'Preventing catastrophic river vessel capsizing during turbulent monsoon weather. Implementing turnstile optical passenger counters, certified Plimsoll load-line markings, and rapid emergency rescue coordination.',
            standards: [
                'IMO Riverine & Coastal Passenger Safety Code',
                'Pre-Departure Optical Passenger Headcount Mandate',
                'Certified Buoyant Apparatus & Child Flotation Devices',
                'Strict River Police Weather Warning Flag Observance',
            ]
        }
    };

    const current = sectors[activeSector];
    const SectorIcon = current.icon;

    return (
        <section id="quadrants" className="py-20 relative bg-slate-950/70 border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Continuous Transit Surveillance</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Monitoring 4 Critical Transit Dimensions
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        Nirapod Jatayat maintains real-time monitoring, technical inspection audits, and public vigilance across Road, Air, Rail, and Water transport systems.
                    </p>
                </div>

                {/* 4 Quadrant Selector Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {[
                        { id: 'road', name: 'Road Transit', icon: Car, stat: '86 Blackspots Cleared', color: 'text-sky-400' },
                        { id: 'air', name: 'Aviation Transit', icon: Plane, stat: '99.1% Standard Rating', color: 'text-indigo-400' },
                        { id: 'train', name: 'Railway Transit', icon: Train, stat: '42 Solar Radars Active', color: 'text-emerald-400' },
                        { id: 'water', name: 'Water Transit', icon: Ship, stat: 'Zero Monsoon Capsizes', color: 'text-teal-400' },
                    ].map((sec) => {
                        const Icon = sec.icon;
                        const isSelected = activeSector === sec.id;
                        return (
                            <button
                                key={sec.id}
                                onClick={() => setActiveSector(sec.id)}
                                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                                    isSelected
                                        ? 'bg-slate-900 border-sky-500 shadow-xl shadow-sky-500/10 scale-[1.02]'
                                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 text-slate-400'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2.5 rounded-xl bg-slate-800/80 ${sec.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    {isSelected && (
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
                                    )}
                                </div>
                                <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                    {sec.name}
                                </h3>
                                <p className="text-xs text-slate-400 font-medium">
                                    {sec.stat}
                                </p>
                            </button>
                        );
                    })}
                </div>

                {/* Detailed Active Quadrant Panel */}
                <div className={`rounded-3xl bg-slate-900/90 border ${current.border} p-6 sm:p-10 shadow-2xl transition-all duration-500`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Details */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border ${current.badgeBg}`}>
                                    Active Surveillance Division
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>International Protocol Grade</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    {current.title}
                                </h3>
                                <p className="text-sm text-sky-400 font-medium mt-1">
                                    {current.subtitle}
                                </p>
                            </div>

                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                {current.description}
                            </p>

                            {/* Standards Bullet Points */}
                            <div className="space-y-2.5 pt-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Institutional Enforcements & Norms:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {current.standards.map((std, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{std}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Metrics Box */}
                        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 space-y-6">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <div>
                                    <span className="text-xs text-slate-400 block font-medium">Safety Compliance Rating</span>
                                    <span className="text-3xl font-extrabold text-white">{current.complianceScore}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-slate-400 block font-medium">Active In-field Audits</span>
                                    <span className="text-2xl font-bold text-sky-400">{current.activeAudits} Live</span>
                                </div>
                            </div>

                            {/* Impact Stats List */}
                            <div className="space-y-3">
                                {current.keyMetrics.map((met, idx) => (
                                    <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                                        <span className="text-xs text-slate-400">{met.label}</span>
                                        <span className="text-xs font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md">
                                            {met.val}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <a
                                    href="#hotline"
                                    className="w-full py-3 rounded-xl bg-sky-600/90 hover:bg-sky-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-950 transition-all hover:scale-[1.02]"
                                >
                                    <span>Audit This Sector or Report Issue</span>
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
