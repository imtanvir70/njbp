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
        <section id="team" className="py-20 relative bg-white border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold">
                            <Users className="w-3.5 h-3.5 text-sky-600" />
                            <span>{t('teamBadge')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {t('teamTitle')}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600">
                            {t('teamSubtitle')}
                        </p>
                    </div>

                    <Link
                        href={route('team')}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 group"
                    >
                        <span>{t('viewFullDirectory')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Department Filter Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-10">
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setSelectedDept(dept.id)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                selectedDept === dept.id
                                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                            }`}
                        >
                            {dept.label}
                        </button>
                    ))}
                </div>

                {/* Member Cards Grid - Light Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-slate-50/80 rounded-3xl border border-slate-200 p-5 flex flex-col justify-between group hover:border-sky-300 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="space-y-4">
                                {/* Photo Container */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-200">
                                    <img
                                        src={member.avatar_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {member.is_executive && (
                                        <div className="absolute top-2.5 right-2.5 bg-sky-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm shadow-sm">
                                            Executive
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                                        {member.department}
                                    </span>
                                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-sky-700 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                                        {member.role}
                                    </p>
                                </div>

                                {member.bio && (
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                        {member.bio}
                                    </p>
                                )}
                            </div>

                            {/* Social / Email Links */}
                            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>{t('verifiedFellow')}</span>
                                </span>

                                <div className="flex items-center gap-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-1.5 rounded-lg bg-white hover:bg-sky-600 text-slate-600 hover:text-white border border-slate-200 transition-all shadow-sm"
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
                                            className="p-1.5 rounded-lg bg-white hover:bg-sky-600 text-slate-600 hover:text-white border border-slate-200 transition-all shadow-sm"
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
