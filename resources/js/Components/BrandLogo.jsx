import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';

export default function BrandLogo({ className = '', showTagline = true, size = 'default', isDark = false }) {
    let isBangla = true;
    try {
        const { lang } = useLanguage();
        isBangla = lang === 'bn';
    } catch (e) {}

    return (
        <div className={`flex items-center gap-2.5 sm:gap-3.5 md:gap-4 select-none group min-w-0 ${className}`}>
            {/* Large & Crystal-Clear Circular Logo Seal */}
            <div className="relative shrink-0">
                <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full bg-white p-0.5 shadow-md shadow-slate-300/60 border border-slate-200/90 ring-2 ring-white group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <img
                        src="/images/njbp-logo.webp"
                        alt="নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ"
                        className="w-full h-full object-contain rounded-full"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Organization Full Name & Subtitle */}
            <div className="flex flex-col justify-center min-w-0">
                <span className={`text-[13px] xs:text-[15px] sm:text-lg md:text-xl lg:text-[22px] font-black tracking-tight leading-tight transition-colors font-bengali truncate ${
                    isDark 
                        ? 'text-white group-hover:text-sky-300' 
                        : 'text-slate-900 group-hover:text-blue-700'
                }`}>
                    {isBangla ? 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ' : 'Nirapod Jatayat Bastobayon Parishad'}
                </span>
                {showTagline && (
                    <div className={`text-[10px] xs:text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-wide mt-0.5 sm:mt-1 flex items-center gap-1.5 sm:gap-2 font-bengali min-w-0 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                        <span className="truncate">
                            {isBangla 
                                ? 'মাল্টিমোডাল পরিবহন সুরক্ষা ও নাগরিক পরিষদ' 
                                : 'Multimodal Transit Safety & Civic Council'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
