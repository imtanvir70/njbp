import React from 'react';
import { Globe, Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export default function GlobalAffiliationsSection() {
    const affiliations = [
        {
            name: 'UN Decade of Action',
            subtitle: 'Road Safety 2021–2030',
            desc: 'Aligned with the United Nations General Assembly global target to reduce road fatalities by 50% by 2030.',
        },
        {
            name: 'ICAO Standards',
            subtitle: 'Civil Aviation Annexes',
            desc: 'Observing International Civil Aviation Organization baseline protocols for ramp operations and cabin safety.',
        },
        {
            name: 'IMO Riverine Safety',
            subtitle: 'Maritime Guidelines',
            desc: 'Applying International Maritime Organization safety concepts to inland riverine and passenger launch networks.',
        },
        {
            name: 'UIC Safety Platform',
            subtitle: 'Railway Corridors',
            desc: 'Adopting International Union of Railways guidelines on level-crossing automated warning technologies.',
        },
    ];

    return (
        <section className="py-16 bg-slate-950 border-t border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                        International Standing & Benchmarks
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Global Frameworks & International Alignment
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Nirapod Jatayat operates under recognized multilateral transport safety standards and research paradigms.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {affiliations.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-sky-400" />
                                <span className="text-xs font-bold uppercase text-slate-400">{item.subtitle}</span>
                            </div>
                            <h4 className="font-extrabold text-white text-base mb-2">
                                {item.name}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
