import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

export default function BrandLogo({ className = 'h-10', showTagline = true }) {
    let orgName = 'Nirapod Jatayat';
    let intlBadge = 'INTL';
    let tagline = 'Multimodal Safety & Vigilance Council';

    try {
        const { t, lang } = useLanguage();
        orgName = t('orgName');
        intlBadge = t('intlBadge');
        tagline = t('tagline');
    } catch (e) {
        // Fallback if rendered outside LanguageProvider
    }

    return (
        <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-teal-500 to-emerald-500 p-[2px] shadow-md shadow-sky-500/15 group">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                    <Shield className="w-6 h-6 text-sky-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.3} />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-xl tracking-tight text-slate-900">
                        {orgName}
                    </span>
                    <span className="inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-sky-100 text-sky-700 border border-sky-200 rounded">
                        {intlBadge}
                    </span>
                </div>
                {showTagline && (
                    <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                        {tagline}
                    </p>
                )}
            </div>
        </div>
    );
}
