import React from 'react';
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
    Eye,
    TrendingUp
} from 'lucide-react';

export default function HeroSection({ stats = {}, onOpenIncidentModal }) {
    const { t, lang } = useLanguage();

    const statCards = [
        {
            label: t('statAudits'),
            val: stats.total_audits ? `${stats.total_audits}+` : '1,420+',
            desc: t('statAuditsDesc'),
            icon: Shield,
            color: 'text-sky-600',
            bg: 'bg-sky-50 border-sky-100',
        },
        {
            label: t('statCitizens'),
            val: stats.citizens_reached || '850K+',
            desc: t('statCitizensDesc'),
            icon: Users,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-100',
        },
        {
            label: t('statCorridors'),
            val: stats.corridors_monitored || '64',
            desc: t('statCorridorsDesc'),
            icon: TrendingUp,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 border-indigo-100',
        },
        {
            label: t('statResolution'),
            val: stats.resolution_rate || '98.4%',
            desc: t('statResolutionDesc'),
            icon: CheckCircle2,
            color: 'text-teal-600',
            bg: 'bg-teal-50 border-teal-100',
        },
    ];

    const sectorPills = [
        { name: t('sectorRoad'), icon: Car, color: 'text-sky-600' },
        { name: t('sectorAir'), icon: Plane, color: 'text-indigo-600' },
        { name: t('sectorTrain'), icon: Train, color: 'text-emerald-600' },
        { name: t('sectorWater'), icon: Ship, color: 'text-teal-600' },
    ];

    return (
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80">
            {/* Background Ambient Glows & Grid */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-b from-sky-100/50 via-teal-50/30 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-200/90 text-sky-700 text-xs font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        <Globe className="w-3.5 h-3.5 text-sky-600" />
                        <span>{t('heroBadge')}</span>
                    </div>
                </div>

                {/* Hero Title & Slogan */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                        {t('heroTitlePrefix')}{' '}
                        <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            {t('heroTitleHighlight')}
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                        {t('heroDescription')}
                    </p>

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                if (onOpenIncidentModal) onOpenIncidentModal();
                                window.dispatchEvent(new CustomEvent('open-incident-modal'));
                            }}
                            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-rose-600/25 hover:scale-105 active:scale-95 transition-all"
                        >
                            <AlertTriangle className="w-5 h-5 animate-pulse" />
                            <span>{t('heroBtnReport')}</span>
                        </button>

                        <a
                            href="#quadrants"
                            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-105 hover:border-slate-400"
                        >
                            <Eye className="w-5 h-5 text-sky-600" />
                            <span>{t('heroBtnExplore')}</span>
                        </a>
                    </div>

                    {/* Sector Pills */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs">
                        {sectorPills.map((sec, idx) => {
                            const Icon = sec.icon;
                            return (
                                <a
                                    key={idx}
                                    href="#quadrants"
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-sky-300 shadow-sm transition-all hover:-translate-y-0.5"
                                >
                                    <Icon className={`w-3.5 h-3.5 ${sec.color}`} />
                                    <span className="font-semibold">{sec.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Impact Stat Counter Cards */}
                <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {statCards.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                                    <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                    {stat.val}
                                </div>
                                <p className="text-[11px] text-slate-500 mt-1">
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
