import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';

export default function BrandLogo({ className = '', showTagline = true }) {
    let isBangla = false;
    try {
        const { lang } = useLanguage();
        isBangla = lang === 'bn';
    } catch (e) {}

    return (
        <div className={`flex items-center gap-3.5 group select-none ${className}`}>
            {/* Official International Emblem */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-teal-500 p-[2.5px] shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-all duration-300">
                <div className="w-full h-full bg-slate-900 rounded-[13px] flex items-center justify-center relative overflow-hidden">
                    {/* Subtle grid in emblem background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:6px_6px] opacity-25"></div>
                    
                    {/* Custom Multimodal Vector Crest (Road + Wings + Rails + Waves) */}
                    <svg viewBox="0 0 32 32" className="w-7 h-7 text-white fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        {/* Protective Shield Outer */}
                        <path d="M16 3L5 7v9c0 7 4.7 11.5 11 13 6.3-1.5 11-6 11-13V7l-11-4z" className="text-sky-400 stroke-current" strokeWidth="2" fill="rgba(14, 165, 233, 0.15)" />
                        {/* Highway Road converging */}
                        <path d="M12 22l3-10h2l3 10" className="text-white" strokeWidth="1.8" />
                        {/* Center dashed road marker */}
                        <line x1="16" y1="14" x2="16" y2="17" className="text-emerald-400" strokeWidth="1.8" />
                        {/* Aviation wing line */}
                        <path d="M9 12h14" className="text-teal-300" strokeWidth="1.5" />
                        {/* Water wave at bottom */}
                        <path d="M11 25c2.5-1 4.5-1 7 0" className="text-sky-300" strokeWidth="1.6" />
                    </svg>

                    {/* Live radar beacon dot */}
                    <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900"></span>
                    </span>
                </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-[22px] font-black tracking-tight text-slate-900 leading-none">
                        NIRAPOD<span className="text-blue-600 ml-1">JATAYAT</span>
                    </span>
                    <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200/80 rounded-md">
                        {isBangla ? 'আন্তর্জাতিক' : 'GLOBAL'}
                    </span>
                </div>
                {showTagline && (
                    <span className="text-[11px] font-semibold text-slate-500 tracking-wide mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {isBangla ? 'নিরাপদ বহুমুখী যাতায়াত ও নাগরিক পরিষদ' : 'Safe Multimodal Transit International'}
                    </span>
                )}
            </div>
        </div>
    );
}
