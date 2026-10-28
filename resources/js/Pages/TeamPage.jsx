import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Users, Mail, Globe, ShieldCheck } from 'lucide-react';

export default function TeamPage({ team = [] }) {
    const [selectedDept, setSelectedDept] = useState('all');

    const departments = [
        { id: 'all', label: 'All Board & Fellows' },
        { id: 'Executive Board', label: 'Executive Board' },
        { id: 'Road Safety Division', label: 'Road Safety' },
        { id: 'Aviation Division', label: 'Aviation' },
        { id: 'Railway Division', label: 'Railway' },
        { id: 'Maritime Division', label: 'Maritime' },
        { id: 'Public Awareness & Legal', label: 'Awareness & Legal' },
        { id: 'Global Advisory', label: 'Global Advisory' },
    ];

    const filtered = selectedDept === 'all'
        ? team
        : team.filter(m => m.department === selectedDept);

    return (
        <PublicLayout>
            <Head>
                <title>Executive Board & Technical Council - Nirapod Jatayat</title>
            </Head>

            {/* Header */}
            <div className="bg-slate-950 py-16 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        <span>Institutional Governance</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Executive Board & Technical Specialists
                    </h1>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        An international coalition of certified highway planners, civil aviation inspectors, railway systems engineers, river mariners, and human rights jurists.
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
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
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
                            className="bg-slate-900/60 rounded-3xl border border-slate-800 p-5 flex flex-col justify-between hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div className="space-y-4">
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800">
                                    <img
                                        src={member.avatar_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {member.is_executive && (
                                        <div className="absolute top-2.5 right-2.5 bg-sky-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm">
                                            Executive
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                                        {member.department}
                                    </span>
                                    <h3 className="font-extrabold text-base text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                                        {member.role}
                                    </p>
                                </div>

                                {member.bio && (
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {member.bio}
                                    </p>
                                )}
                            </div>

                            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Verified</span>
                                </span>

                                <div className="flex items-center gap-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all"
                                        >
                                            <Mail className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all"
                                            title="Professional Profile"
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
        </PublicLayout>
    );
}
