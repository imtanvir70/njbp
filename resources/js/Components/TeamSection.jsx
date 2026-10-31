import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Users, 
    Mail, 
    Globe, 
    Share2, 
    ShieldCheck, 
    ArrowRight
} from 'lucide-react';

export default function TeamSection({ members = [] }) {
    const { t, lang } = useLanguage();
    const [selectedDept, setSelectedDept] = useState('all');

    const departments = [
        { id: 'all', label: lang === 'bn' ? 'সকল সদস্য ও উপদেষ্টা' : 'All Members & Board' },
        { id: 'Executive Board', label: lang === 'bn' ? 'কার্যনির্বাহী পর্ষদ' : 'Executive Board' },
        { id: 'Road Safety Division', label: lang === 'bn' ? 'সড়ক নিরাপত্তা' : 'Road Safety' },
        { id: 'Aviation Division', label: lang === 'bn' ? 'বিমান চলাচল' : 'Aviation' },
        { id: 'Railway Division', label: lang === 'bn' ? 'রেলপথ' : 'Railway' },
        { id: 'Maritime Division', label: lang === 'bn' ? 'নৌ ও নদীপথ' : 'Maritime' },
        { id: 'Public Awareness & Legal', label: lang === 'bn' ? 'আইনি ও জনসচেতনতা' : 'Awareness & Legal' },
        { id: 'Global Advisory', label: lang === 'bn' ? 'আন্তর্জাতিক উপদেষ্টা' : 'Global Advisory' },
    ];

    const filteredMembers = selectedDept === 'all'
        ? members
        : members.filter(m => m.department === selectedDept);

    return (
        <section id="team" className="py-24 relative bg-white/70 border-t border-slate-200/80 overflow-hidden font-bengali">
            {/* Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <Users className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('teamBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                            {t('teamTitle')}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                            {t('teamSubtitle')}
                        </p>
                    </div>

                    <Link
                        href={route('team')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-extrabold text-sm border border-white/90 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all hover:scale-[1.02] group"
                    >
                        <span>{t('viewFullDirectory')}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Department Filter Chips: Frosted Controls */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10">
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setSelectedDept(dept.id)}
                            className={`relative overflow-hidden px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 ${
                                selectedDept === dept.id
                                    ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/25 scale-105'
                                    : 'bg-white/70 hover:bg-white text-slate-700 border border-white/90 shadow-sm backdrop-blur-md hover:-translate-y-0.5'
                            }`}
                        >
                            {selectedDept === dept.id && (
                                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                            )}
                            {dept.label}
                        </button>
                    ))}
                </div>

                {/* Member Cards Grid: Frosted Glass with Glossy Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="relative overflow-hidden bg-white/70 hover:bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
                        >
                            {/* Glossy top edge highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                            <div className="space-y-4">
                                {/* Photo Container */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner border border-slate-200/60">
                                    <img
                                        src={member.avatar_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {member.is_executive && (
                                        <div className="absolute top-2.5 right-2.5 bg-blue-700/90 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm border border-white/30">
                                            Executive
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 block mb-1">
                                        {member.department}
                                    </span>
                                    <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                                        {member.role}
                                    </p>
                                </div>

                                {member.bio && (
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-medium">
                                        {member.bio}
                                    </p>
                                )}
                            </div>

                            {/* Social / Email Links */}
                            <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-semibold">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>{t('verifiedFellow')}</span>
                                </span>

                                <div className="flex items-center gap-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-2 rounded-xl bg-white hover:bg-blue-600 text-slate-600 hover:text-white border border-slate-200/80 transition-all shadow-sm"
                                            title="Send Email"
                                        >
                                            <Mail className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-xl bg-white hover:bg-blue-600 text-slate-600 hover:text-white border border-slate-200/80 transition-all shadow-sm"
                                            title="Professional Profile"
                                        >
                                            <Globe className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1.5 rounded-lg bg-white hover:bg-sky-600 text-slate-600 hover:text-white border border-slate-200 transition-all shadow-sm"
                                            title="Social Profile"
                                        >
                                            <Share2 className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
