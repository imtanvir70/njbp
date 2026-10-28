import React from 'react';

export default function TransitAnimationBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Soft Ambient Radial Lighting */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/25 rounded-full blur-3xl"></div>
            
            {/* =========================================================
             * 1. SKY / AIR TRANSIT LANE (Top 12% - 24%)
             * ========================================================= */}
            <div className="absolute top-[12%] inset-x-0 h-16 border-b border-dashed border-sky-300/25">
                {/* Airplane with contrail */}
                <div className="absolute top-2 left-0 animate-plane-glide flex items-center">
                    {/* Contrail / Vapor Trail */}
                    <div className="w-48 sm:w-72 h-[2px] bg-gradient-to-l from-sky-400/30 to-transparent mr-2"></div>
                    
                    {/* Modern Commercial Airliner Silhouette */}
                    <svg viewBox="0 0 100 40" className="w-16 h-8 sm:w-20 sm:h-10 text-sky-600/30 fill-current">
                        {/* Fuselage */}
                        <path d="M92 20c-5-3-22-6-46-5L28 4h-8l10 12H12l-6-5H0l4 9-4 9h6l6-5h18l-10 12h8l18-11c24 1 41-2 46-5 4-2 6-4 4-6z" />
                        {/* Jet Engine Pod */}
                        <ellipse cx="44" cy="27" rx="6" ry="2.2" className="text-sky-700/40 fill-current" />
                        {/* Window dots */}
                        <circle cx="68" cy="19" r="0.9" className="text-white/60 fill-current" />
                        <circle cx="72" cy="19" r="0.9" className="text-white/60 fill-current" />
                        <circle cx="76" cy="19" r="0.9" className="text-white/60 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================
             * 2. RAILWAY TRANSIT LANE (Mid-upper 34% - 46%)
             * ========================================================= */}
            <div className="absolute top-[38%] inset-x-0 h-14 border-b-2 border-slate-300/30">
                {/* Subtle railway ties pattern */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[repeating-linear-gradient(90deg,#94a3b8_0,#94a3b8_2px,transparent_0,transparent_16px)] opacity-20"></div>

                {/* Streamlined Train Locomotive & Coaches */}
                <div className="absolute -bottom-0.5 left-0 animate-train-glide flex items-end">
                    <svg viewBox="0 0 280 44" className="w-64 h-11 sm:w-80 sm:h-14 text-emerald-700/25 fill-current">
                        {/* Locomotive Aero Nose */}
                        <path d="M280 40H220V16s-15-1-20 4l-12 12H180V40h100z" />
                        {/* Driver Cab Windows */}
                        <polygon points="215,20 200,20 190,32 215,32" className="text-white/60 fill-current" />
                        
                        {/* Passenger Coach 1 */}
                        <rect x="110" y="16" width="66" height="24" rx="3" />
                        <rect x="116" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="130" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="144" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="158" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        
                        {/* Passenger Coach 2 */}
                        <rect x="40" y="16" width="66" height="24" rx="3" />
                        <rect x="46" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="60" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="74" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />
                        <rect x="88" y="21" width="10" height="7" rx="1.5" className="text-white/50 fill-current" />

                        {/* Wheels & Track Buffer */}
                        <circle cx="50" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="65" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="85" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="100" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="120" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="135" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="155" cy="41" r="3" className="text-slate-800/40 fill-current" />
                        <circle cx="170" cy="41" r="3" className="text-slate-800/40 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================
             * 3. HIGHWAY / ROAD TRANSIT LANE (Mid-lower 60% - 74%)
             * ========================================================= */}
            <div className="absolute top-[62%] inset-x-0 h-16 border-b border-slate-300/35">
                {/* Highway dashed center lane line */}
                <div className="absolute top-1/2 inset-x-0 h-[1.5px] border-b border-dashed border-slate-400/25"></div>

                {/* Intercity Passenger Bus Moving */}
                <div className="absolute bottom-1 left-0 animate-bus-glide flex items-end">
                    <svg viewBox="0 0 160 52" className="w-32 h-11 sm:w-40 sm:h-14 text-blue-700/25 fill-current">
                        {/* Bus Body */}
                        <path d="M152 44h-6v-3a4 4 0 0 0-8 0v3H44v-3a4 4 0 0 0-8 0v3H10a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8h128l14 18v16a4 4 0 0 1-4 4z" />
                        {/* Windshield */}
                        <polygon points="135,10 148,24 135,24" className="text-white/60 fill-current" />
                        {/* Side Windows */}
                        <rect x="18" y="10" width="16" height="12" rx="2" className="text-white/50 fill-current" />
                        <rect x="38" y="10" width="16" height="12" rx="2" className="text-white/50 fill-current" />
                        <rect x="58" y="10" width="16" height="12" rx="2" className="text-white/50 fill-current" />
                        <rect x="78" y="10" width="16" height="12" rx="2" className="text-white/50 fill-current" />
                        <rect x="98" y="10" width="16" height="12" rx="2" className="text-white/50 fill-current" />
                        <rect x="118" y="10" width="12" height="12" rx="2" className="text-white/50 fill-current" />
                        {/* Wheels */}
                        <circle cx="40" cy="44" r="5" className="text-slate-800/40 fill-current" />
                        <circle cx="142" cy="44" r="5" className="text-slate-800/40 fill-current" />
                    </svg>
                </div>

                {/* Private Car Moving in Upper Lane (Opposite / Faster) */}
                <div className="absolute top-0 right-0 animate-car-left flex items-start">
                    <svg viewBox="0 0 100 36" className="w-20 h-7 sm:w-24 sm:h-9 text-sky-700/25 fill-current">
                        {/* Sedan Body */}
                        <path d="M96 28h-8v-2a3 3 0 0 0-6 0v2H28v-2a3 3 0 0 0-6 0v2H6a5 5 0 0 1-5-5c0-3 2-6 6-6l18-7a10 10 0 0 1 6-2h42a12 12 0 0 1 10 5l11 8c4 1 6 3 6 6 0 2-2 3-4 3z" />
                        {/* Windows */}
                        <polygon points="34,10 46,10 46,17 30,17" className="text-white/60 fill-current" />
                        <polygon points="50,10 68,10 74,17 50,17" className="text-white/60 fill-current" />
                        {/* Wheels */}
                        <circle cx="25" cy="28" r="4" className="text-slate-800/40 fill-current" />
                        <circle cx="85" cy="28" r="4" className="text-slate-800/40 fill-current" />
                    </svg>
                </div>
            </div>

            {/* =========================================================
             * 4. WATERWAYS & MARITIME TRANSIT LANE (Bottom 82% - 98%)
             * ========================================================= */}
            <div className="absolute bottom-0 inset-x-0 h-20 overflow-hidden">
                {/* Waving water ribbons */}
                <div className="absolute bottom-0 inset-x-0 h-8 text-teal-600/15 animate-waves">
                    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-[120%] h-full fill-current">
                        <path d="M0 25c150-15 350 15 500 0s350-15 500 0 350 15 500 0v15H0z" />
                    </svg>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-5 text-sky-600/20">
                    <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full fill-current">
                        <path d="M0 15c200-10 400 10 600 0s400-10 600 0v15H0z" />
                    </svg>
                </div>

                {/* Passenger Ferry / River Launch Moving */}
                <div className="absolute bottom-3 right-0 animate-ship-float flex items-end">
                    <svg viewBox="0 0 180 55" className="w-36 h-12 sm:w-48 sm:h-15 text-teal-800/25 fill-current">
                        {/* Hull with safe Plimsoll draft line */}
                        <path d="M0 38l18 14h140l22-18H0z" />
                        {/* Waterline Stripe */}
                        <line x1="8" y1="44" x2="168" y2="44" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.4" />
                        {/* Lower Passenger Deck */}
                        <rect x="22" y="24" width="132" height="14" rx="2" />
                        <circle cx="36" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="50" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="64" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="78" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="92" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="106" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="120" cy="31" r="2" className="text-white/60 fill-current" />
                        <circle cx="134" cy="31" r="2" className="text-white/60 fill-current" />
                        {/* Upper Deck & Bridge */}
                        <rect x="35" y="14" width="90" height="10" rx="1.5" />
                        <polygon points="125,14 135,24 125,24" />
                        {/* Radar Mast & Funnel */}
                        <rect x="65" y="7" width="12" height="7" rx="1" />
                        <line x1="105" y1="5" x2="105" y2="14" stroke="currentColor" strokeWidth="2" />
                        {/* Lifebuoy rings */}
                        <circle cx="45" cy="19" r="1.8" className="text-amber-500/50 fill-current" />
                        <circle cx="85" cy="19" r="1.8" className="text-amber-500/50 fill-current" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
