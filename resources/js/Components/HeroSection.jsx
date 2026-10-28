import React from 'react';
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
    Eye,
    TrendingUp
} from 'lucide-react';

export default function HeroSection({ stats = {}, onOpenIncidentModal }) {
    return (
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-950">
            {/* Background Ambient Glows & Grid */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-sky-600/15 via-teal-600/5 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs font-semibold backdrop-blur-md shadow-lg shadow-sky-950/50">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <Globe className="w-3.5 h-3.5 text-sky-400" />
                        <span>International Safe Transit Network • Independent NGO Oversight</span>
                    </div>
                </div>

                {/* Hero Title & Slogan */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Safeguarding Every Journey Across{' '}
                        <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                            Road, Sky, Rail & Water
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                        <strong className="text-white font-semibold">Nirapod Jatayat</strong> monitors transit integrity, investigates hazardous blackspots, mobilizes public consciousness, and holds operators accountable to international safety standards.
                    </p>

                {/* Action CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                if (onOpenIncidentModal) onOpenIncidentModal();
                                window.dispatchEvent(new CustomEvent('open-incident-modal'));
                            }}
                            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-red-950/50 hover:scale-105 active:scale-95 transition-all"
                        >
                            <AlertTriangle className="w-5 h-5 animate-pulse" />
                            <span>Report a Transit Hazard (24/7)</span>
                        </button>

                        <a
                            href="#quadrants"
                            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700/80 flex items-center justify-center gap-2 transition-all hover:scale-105"
                        >
                            <Eye className="w-5 h-5 text-sky-400" />
                            <span>Explore 4 Transit Quadrants</span>
                        </a>
                    </div>

                    {/* Sector Pills */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
                        {[
                            { name: 'Roads & Highways', icon: Car, color: 'text-sky-400' },
                            { name: 'Civil Aviation', icon: Plane, color: 'text-indigo-400' },
                            { name: 'Railway Corridors', icon: Train, color: 'text-emerald-400' },
                            { name: 'Maritime & Riverine', icon: Ship, color: 'text-teal-400' },
                        ].map((sec, idx) => {
                            const Icon = sec.icon;
                            return (
                                <a
                                    key={idx}
                                    href="#quadrants"
                                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                                >
                                    <Icon className={`w-3.5 h-3.5 ${sec.color}`} />
                                    <span>{sec.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Impact Stat Counter Cards */}
                <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        {
                            label: 'Field Safety Audits',
                            val: stats.total_audits || '1,420+',
                            desc: 'Blackspots & Corridors Surveyed',
                            icon: Shield,
                            color: 'text-sky-400',
                            bg: 'bg-sky-500/10 border-sky-500/20',
                        },
                        {
                            label: 'Citizens Reached',
                            val: stats.citizens_reached || '850K+',
                            desc: 'Awareness Drives & Workshops',
                            icon: Users,
                            color: 'text-emerald-400',
                            bg: 'bg-emerald-500/10 border-emerald-500/20',
                        },
                        {
                            label: 'Surveillance Corridors',
                            val: stats.corridors_monitored || '64',
                            desc: 'Road, Rail, Air & Waterways',
                            icon: TrendingUp,
                            color: 'text-indigo-400',
                            bg: 'bg-indigo-500/10 border-indigo-500/20',
                        },
                        {
                            label: 'Resolution Rate',
                            val: stats.resolution_rate || '98.4%',
                            desc: 'Official Escalation Rectified',
                            icon: CheckCircle2,
                            color: 'text-teal-400',
                            bg: 'bg-teal-500/10 border-teal-500/20',
                        },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                                    <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    {stat.val}
                                </div>
                                <p className="text-[11px] text-slate-400 mt-1">
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
