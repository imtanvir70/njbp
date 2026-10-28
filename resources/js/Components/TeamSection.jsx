import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { 
    Users, 
    Mail, 
    Globe,
    Share2,
    ShieldCheck, 
    ArrowRight,
    Award
} from 'lucide-react';

export default function TeamSection({ members = [] }) {
    const [selectedDept, setSelectedDept] = useState('all');

    const departments = [
        { id: 'all', label: 'All Members & Board' },
        { id: 'Executive Board', label: 'Executive Board' },
        { id: 'Road Safety Division', label: 'Road Safety' },
        { id: 'Aviation Division', label: 'Aviation' },
        { id: 'Railway Division', label: 'Railway' },
        { id: 'Maritime Division', label: 'Maritime' },
        { id: 'Public Awareness & Legal', label: 'Awareness & Legal' },
        { id: 'Global Advisory', label: 'Global Advisory' },
    ];

    const filteredMembers = selectedDept === 'all'
        ? members
        : members.filter(m => m.department === selectedDept);

    return (
        <section id="team" className="py-20 relative bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide">
                            <Users className="w-3.5 h-3.5" />
                            <span>Leadership & Technical Governance</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Meet Our Officers & Advisory Council
                        </h2>
                        <p className="text-sm sm:text-base text-slate-400">
                            Our team unites certified transport engineers, master mariners, airline captains, accident reconstructionists, and human rights advocates dedicated to safe mobility.
                        </p>
                    </div>

                    <Link
                        href={route('team')}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 group"
                    >
                        <span>Full Board Directory</span>
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
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 scale-105'
                                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                            }`}
                        >
                            {dept.label}
                        </button>
                    ))}
                </div>

                {/* Member Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-slate-900/60 rounded-3xl border border-slate-800 p-5 flex flex-col justify-between group hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
                        >
                            <div className="space-y-4">
                                {/* Photo Container */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800">
                                    <img
                                        src={member.avatar_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {member.is_executive && (
                                        <div className="absolute top-2.5 right-2.5 bg-sky-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-sm shadow-md">
                                            Executive
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                                        {member.department}
                                    </span>
                                    <h3 className="font-extrabold text-base text-white group-hover:text-sky-300 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                                        {member.role}
                                    </p>
                                </div>

                                {member.bio && (
                                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                                        {member.bio}
                                    </p>
                                )}
                            </div>

                            {/* Social / Email Links */}
                            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Verified Fellow</span>
                                </span>

                                <div className="flex items-center gap-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all"
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
                                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all"
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
                                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all"
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
