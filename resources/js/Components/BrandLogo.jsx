import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';

export default function BrandLogo({ className = '', showTagline = true, size = 'default' }) {
    let isBangla = true;
    try {
        const { lang } = useLanguage();
        isBangla = lang === 'bn';
    } catch (e) {}

    return (
        <div className={`flex items-center gap-3.5 sm:gap-4 select-none group ${className}`}>
            {/* Large & Crystal-Clear Circular Logo Seal */}
            <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-sky-600 to-emerald-600 shadow-md shadow-slate-300/80 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
                        <img
                            src="/images/njbp-logo.jpg"
                            alt="নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ (নিযাবাপ / NJBP)"
                            className="w-full h-full object-contain rounded-full"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>

            {/* Organization Full Name & Official Acronym */}
            <div className="flex flex-col justify-center min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg sm:text-xl lg:text-[22px] font-black text-slate-900 tracking-tight leading-none whitespace-nowrap group-hover:text-blue-700 transition-colors">
                        {isBangla ? 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ' : 'Nirapod Jatayat Bastobayon Parishad'}
                    </span>
                    <span className="shrink-0 px-2 py-0.5 text-[11px] font-black uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 rounded-full shadow-sm">
                        {isBangla ? 'নিযাবাপ' : 'NJBP'}
                    </span>
                </div>
                {showTagline && (
                    <div className="text-xs sm:text-[13px] font-semibold text-slate-500 tracking-wide mt-1.5 flex items-center gap-2 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                        <span className="truncate">
                            {isBangla 
                                ? 'নিযাবাপ (NJBP) • মাল্টিমোডাল পরিবহন সুরক্ষা কাউন্সিল' 
                                : 'Safe Transit Implementation Council (NJBP)'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
