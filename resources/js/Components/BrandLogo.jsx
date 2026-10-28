import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';

export default function BrandLogo({ className = '', showTagline = true, size = 'default' }) {
    let isBangla = true;
    try {
        const { lang } = useLanguage();
        isBangla = lang === 'bn';
    } catch (e) {}

    const isSmall = size === 'small';

    return (
        <div className={`flex items-center gap-3 sm:gap-3.5 group select-none ${className}`}>
            {/* Official Uploaded Circular Logo Seal */}
            <div className="relative shrink-0">
                <div className={`${isSmall ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14'} rounded-full p-[1.5px] bg-gradient-to-tr from-amber-600 via-sky-600 to-emerald-600 shadow-md shadow-slate-300/60 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                    <img
                        src="/images/njbp-logo.jpg"
                        alt="নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ (নিযাবাপ / NJBP)"
                        className="w-full h-full object-cover rounded-full bg-white"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Full Name & Acronym Identity */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className={`${isSmall ? 'text-sm sm:text-base' : 'text-base sm:text-lg lg:text-xl'} font-black text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors`}>
                        {isBangla ? 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ' : 'Nirapod Jatayat Bastobayon Parishad'}
                    </span>
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200/90 rounded-full shadow-sm">
                        {isBangla ? 'নিযাবাপ' : 'NJBP'}
                    </span>
                </div>
                {showTagline && (
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {isBangla ? 'নিযাবাপ (NJBP) • মাল্টিমোডাল পরিবহন সুরক্ষা কাউন্সিল' : 'Safe Transit Implementation Council (NJBP)'}
                    </span>
                )}
            </div>
        </div>
    );
}
