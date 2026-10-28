import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { Plane, Train, Car, Ship } from 'lucide-react';

export default function TransitAnimationBackground() {
    const { lang } = useLanguage();
    const isBangla = lang === 'bn';

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Center Background Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-100/40 rounded-full blur-3xl"></div>

            {/* =========================================================================
             * 1. TOP-RIGHT CORNER: AIR / AVIATION (Phase 1: 0s - 5s)
             * ========================================================================= */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 w-64 sm:w-80 h-36">
                {/* Corner Label Badge */}
                <div className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold text-sky-800 animate-pill-air shadow-sm">
                    <Plane className="w-3.5 h-3.5 text-sky-600" />
                    <span>{isBangla ? 'আকাশপথ' : 'Air Transit'}</span>
                </div>

                {/* Flight Path Arc */}
                <div className="absolute bottom-4 inset-x-0 h-16 border-b border-dashed border-sky-300/30 -rotate-3"></div>

                {/* Flying Commercial Airplane with Contrail */}
                <div className="absolute top-8 left-4 animate-corner-air flex items-center">
                    {/* Contrail */}
                    <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-l from-sky-400/40 to-transparent mr-1.5"></div>

                    {/* Airliner Silhouette facing diagonally up-right */}
                    <svg viewBox="0 0 100 40" className="w-16 h-8 sm:w-20 sm:h-10 text-sky-700/60 fill-current drop-shadow-sm">
                        <path d="M92 20c-5-3-22-6-46-5L28 4h-8l10 12H12l-6-5H0l4 9-4 9h6l6-5h18l-10 12h8l18-11c24 1 41-2 46-5 4-2 6-4 4-6z" />
                        <ellipse cx="44" cy="27" rx="6" ry="2.2" className="text-sky-900/70 fill-current" />
                        <circle cx="68" cy="19" r="1.1" className="text-white/80 fill-current" />
                        <circle cx="73" cy="19" r="1.1" className="text-white/80 fill-current" />
                        <circle cx="78" cy="19" r="1.1" className="text-white/80 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================================
             * 2. TOP-LEFT CORNER: RAILWAY / TRAIN (Phase 2: 5s - 10s)
             * ========================================================================= */}
            <div className="absolute top-6 left-4 sm:top-10 sm:left-12 w-64 sm:w-80 h-36">
                {/* Corner Label Badge */}
                <div className="absolute top-0 left-0 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold text-emerald-800 animate-pill-rail shadow-sm">
                    <Train className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isBangla ? 'রেলপথ' : 'Railway'}</span>
                </div>

                {/* Rail Track with ties */}
                <div className="absolute bottom-5 inset-x-0 h-1.5 border-b-2 border-emerald-600/30">
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-[repeating-linear-gradient(90deg,#059669_0,#059669_2px,transparent_0,transparent_14px)] opacity-30"></div>
                </div>

                {/* Train with CORRECT Forward-Facing Aerodynamic Head (Pointing Right) */}
                <div className="absolute bottom-6 left-0 animate-corner-rail flex items-end">
                    <svg viewBox="0 0 240 44" className="w-56 h-11 sm:w-64 sm:h-12 text-emerald-800/60 fill-current drop-shadow-sm">
                        {/* Rear Passenger Coach (Left) */}
                        <rect x="0" y="16" width="60" height="23" rx="3" />
                        <rect x="6" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="19" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="32" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="45" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        
                        {/* Middle Passenger Coach */}
                        <rect x="64" y="16" width="64" height="23" rx="3" />
                        <rect x="70" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="83" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="96" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />
                        <rect x="109" y="21" width="9" height="7" rx="1.5" className="text-white/70 fill-current" />

                        {/* Coupler link */}
                        <rect x="60" y="32" width="4" height="4" className="text-slate-800/60 fill-current" />
                        <rect x="128" y="32" width="4" height="4" className="text-slate-800/60 fill-current" />

                        {/* Front Aerodynamic Locomotive (PROPER HEAD POINTING FORWARD RIGHT) */}
                        <path d="M132 16h60c18 0 32 8 44 20l4 3H132V16z" />
                        {/* Forward Slanted Driver Cab Windshield (Facing Right) */}
                        <polygon points="208,20 226,30 200,30 196,20" className="text-white/80 fill-current" />
                        {/* Headlight beam at nose tip */}
                        <circle cx="236" cy="36" r="2.5" className="text-amber-300 fill-current" />
                        {/* High-speed Roof Pantograph */}
                        <path d="M148 16l8-8 10 4" stroke="#059669" strokeWidth="1.8" fill="none" />

                        {/* Track Bogies/Wheels */}
                        <circle cx="15" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="35" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="50" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="78" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="98" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="115" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="145" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="170" cy="40" r="3" className="text-slate-800/60 fill-current" />
                        <circle cx="210" cy="40" r="3" className="text-slate-800/60 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================================
             * 3. BOTTOM-LEFT CORNER: ROAD & HIGHWAY (Phase 3: 10s - 15s)
             * ========================================================================= */}
            <div className="absolute bottom-28 left-4 sm:bottom-32 sm:left-12 w-64 sm:w-80 h-32">
                {/* Corner Label Badge */}
                <div className="absolute top-0 left-0 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold text-blue-800 animate-pill-road shadow-sm">
                    <Car className="w-3.5 h-3.5 text-blue-600" />
                    <span>{isBangla ? 'সড়কপথ ও হাইওয়ে' : 'Road & Highway'}</span>
                </div>

                {/* Highway Road Line with Dashes */}
                <div className="absolute bottom-4 inset-x-0 h-1 border-b-2 border-slate-300/40">
                    <div className="absolute -top-3 inset-x-0 border-b border-dashed border-slate-400/30"></div>
                </div>

                {/* Intercity Passenger Bus & Car moving together smoothly */}
                <div className="absolute bottom-5 left-0 animate-corner-road flex items-end gap-3">
                    {/* Modern Passenger Bus */}
                    <svg viewBox="0 0 150 48" className="w-32 h-10 sm:w-36 sm:h-11 text-blue-800/60 fill-current drop-shadow-sm">
                        <path d="M142 40h-6v-3a4 4 0 0 0-8 0v3H40v-3a4 4 0 0 0-8 0v3H8a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6h120l18 16v14a4 4 0 0 1-4 4z" />
                        <polygon points="126,9 138,22 126,22" className="text-white/70 fill-current" />
                        <rect x="16" y="9" width="15" height="11" rx="2" className="text-white/60 fill-current" />
                        <rect x="35" y="9" width="15" height="11" rx="2" className="text-white/60 fill-current" />
                        <rect x="54" y="9" width="15" height="11" rx="2" className="text-white/60 fill-current" />
                        <rect x="73" y="9" width="15" height="11" rx="2" className="text-white/60 fill-current" />
                        <rect x="92" y="9" width="15" height="11" rx="2" className="text-white/60 fill-current" />
                        <rect x="111" y="9" width="11" height="11" rx="2" className="text-white/60 fill-current" />
                        <circle cx="36" cy="40" r="4.5" className="text-slate-800/60 fill-current" />
                        <circle cx="132" cy="40" r="4.5" className="text-slate-800/60 fill-current" />
                    </svg>

                    {/* Following Sedan Car */}
                    <svg viewBox="0 0 80 32" className="w-18 h-7 sm:w-20 sm:h-8 text-sky-700/60 fill-current">
                        <path d="M78 26h-6v-2a3 3 0 0 0-6 0v2H24v-2a3 3 0 0 0-6 0v2H4a4 4 0 0 1-4-4c0-3 2-5 5-5l14-6a8 8 0 0 1 5-2h34a10 10 0 0 1 8 4l9 7c3 1 5 3 5 5 0 2-1 3-2 3z" />
                        <polygon points="28,10 38,10 38,16 25,16" className="text-white/70 fill-current" />
                        <polygon points="42,10 56,10 61,16 42,16" className="text-white/70 fill-current" />
                        <circle cx="21" cy="26" r="3.5" className="text-slate-800/60 fill-current" />
                        <circle cx="69" cy="26" r="3.5" className="text-slate-800/60 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================================
             * 4. BOTTOM-RIGHT CORNER: WATERWAYS & SHIP (Phase 4: 15s - 20s)
             * ========================================================================= */}
            <div className="absolute bottom-28 right-4 sm:bottom-32 sm:right-12 w-64 sm:w-80 h-32">
                {/* Corner Label Badge */}
                <div className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold text-teal-800 animate-pill-water shadow-sm">
                    <Ship className="w-3.5 h-3.5 text-teal-600" />
                    <span>{isBangla ? 'নৌ ও নদীপথ' : 'Waterway Transit'}</span>
                </div>

                {/* River Waves at corner bottom */}
                <div className="absolute bottom-3 inset-x-0 h-6 text-teal-600/25">
                    <svg viewBox="0 0 400 30" preserveAspectRatio="none" className="w-full h-full fill-current">
                        <path d="M0 15c70-8 140 8 200 0s140-8 200 0v15H0z" />
                    </svg>
                </div>

                {/* Passenger Launch / Ship Sailing smoothly */}
                <div className="absolute bottom-5 right-2 animate-corner-water flex items-end">
                    <svg viewBox="0 0 160 50" className="w-36 h-11 sm:w-44 sm:h-13 text-teal-800/65 fill-current drop-shadow-sm">
                        {/* Hull with Plimsoll draft line */}
                        <path d="M0 34l16 12h124l18-16H0z" />
                        <line x1="8" y1="39" x2="148" y2="39" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.5" />
                        {/* Passenger Deck */}
                        <rect x="20" y="21" width="116" height="13" rx="2" />
                        <circle cx="32" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="44" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="56" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="68" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="80" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="92" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="104" cy="27" r="1.8" className="text-white/70 fill-current" />
                        <circle cx="116" cy="27" r="1.8" className="text-white/70 fill-current" />
                        {/* Upper Bridge & Radar */}
                        <rect x="32" y="12" width="78" height="9" rx="1.5" />
                        <polygon points="110,12 118,21 110,21" />
                        <rect x="58" y="5" width="10" height="7" rx="1" />
                        <line x1="92" y1="4" x2="92" y2="12" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
