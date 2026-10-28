import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useLanguage } from '@/Context/LanguageContext';
import { Users, Mail, Globe, ShieldCheck } from 'lucide-react';

function TeamPageContent({ team = [] }) {
    const { t, lang } = useLanguage();
    const [selectedDept, setSelectedDept] = useState('all');

    const departments = [
        { id: 'all', label: lang === 'bn' ? 'সকল পর্ষদ ও ফেলো' : 'All Board & Fellows' },
        { id: 'Executive Board', label: lang === 'bn' ? 'কার্যনির্বাহী পর্ষদ' : 'Executive Board' },
        { id: 'Road Safety Division', label: lang === 'bn' ? 'সড়ক নিরাপত্তা' : 'Road Safety' },
        { id: 'Aviation Division', label: lang === 'bn' ? 'বিমান চলাচল' : 'Aviation' },
        { id: 'Railway Division', label: lang === 'bn' ? 'রেলপথ' : 'Railway' },
        { id: 'Maritime Division', label: lang === 'bn' ? 'নৌ ও নদীপথ' : 'Maritime' },
        { id: 'Public Awareness & Legal', label: lang === 'bn' ? 'আইনি ও জনসচেতনতা' : 'Awareness & Legal' },
        { id: 'Global Advisory', label: lang === 'bn' ? 'আন্তর্জাতিক উপদেষ্টা' : 'Global Advisory' },
    ];

    const filtered = selectedDept === 'all'
        ? team
        : team.filter(m => m.department === selectedDept);

    return (
        <>
            <Head>
                <title>{lang === 'bn' ? 'কার্যনির্বাহী পর্ষদ ও কারিগরি কাউন্সিল - নিরাপদ যাতায়াত' : 'Executive Board & Technical Council - Nirapod Jatayat'}</title>
            </Head>

            {/* Header - Light Mode */}
            <div className="bg-white py-16 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold">
                        <Users className="w-3.5 h-3.5 text-sky-600" />
                        <span>{t('teamBadge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {t('teamTitle')}
                    </h1>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        {t('teamSubtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
                {/* Department Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setSelectedDept(dept.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                                selectedDept === dept.id
                                    ? 'bg-sky-600 text-white shadow-sm scale-105'
                                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                            {dept.label}
                        </button>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filtered.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
                        >
                            <div className="space-y-4">
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                                    <img
                                        src={member.avatar_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {member.is_executive && (
                                        <div className="absolute top-2.5 right-2.5 bg-sky-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm shadow-sm">
                                            Executive
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                                        {member.department}
                                    </span>
                                    <h3 className="font-extrabold text-base text-slate-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                                        {member.role}
                                    </p>
                                </div>

                                {member.bio && (
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {member.bio}
                                    </p>
                                )}
                            </div>

                            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>{t('verifiedFellow')}</span>
                                </span>

                                <div className="flex items-center gap-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-sky-600 text-slate-600 hover:text-white transition-all shadow-sm"
                                        >
                                            <Mail className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-sky-600 text-slate-600 hover:text-white transition-all shadow-sm"
                                        >
                                            <Globe className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default function TeamPage(props) {
    return (
        <PublicLayout>
            <TeamPageContent {...props} />
        </PublicLayout>
    );
}
