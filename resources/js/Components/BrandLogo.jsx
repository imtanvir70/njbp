import React from 'react';
import { Shield, Compass, Navigation } from 'lucide-react';

export default function BrandLogo({ className = 'h-10', showTagline = true, light = true }) {
    return (
        <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-teal-500 to-emerald-400 p-[2px] shadow-lg shadow-sky-500/20 group">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                    {/* Background glow lines */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-emerald-500/10"></div>
                    <Shield className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.2} />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-sky-100 to-slate-200 bg-clip-text text-transparent">
                        Nirapod<span className="text-sky-400 ml-1">Jatayat</span>
                    </span>
                    <span className="inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
                        INTL
                    </span>
                </div>
                {showTagline && (
                    <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                        Multimodal Safety & Vigilance Council
                    </p>
                )}
            </div>
        </div>
    );
}
