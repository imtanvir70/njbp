import React from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export default function GlobalAffiliationsSection() {
    const { t, lang } = useLanguage();

    const affiliations = [
        {
            name: lang === 'bn' ? 'জাতিসংঘ সড়ক নিরাপত্তা দশক' : 'UN Decade of Action',
            subtitle: lang === 'bn' ? 'রোড সেফটি ২০২১–২০৩০' : 'Road Safety 2021–2030',
            desc: lang === 'bn'
                ? '২০৩০ সালের মধ্যে বৈশ্বিক সড়ক দুর্ঘটনা ও প্রাণহানি ৫০% কমিয়ে আনার জাতিসংঘ সাধারণ পরিষদের রেজুলেশনের সাথে সরাসরি সংগতিপূর্ণ।'
                : 'Aligned with the United Nations General Assembly global target to reduce road fatalities by 50% by 2030.',
        },
        {
            name: lang === 'bn' ? 'আইকাও বিমান সুরক্ষা মানদণ্ড' : 'ICAO Standards',
            subtitle: lang === 'bn' ? 'বেসামরিক বিমান পরিবহন অ্যানেক্স' : 'Civil Aviation Annexes',
            desc: lang === 'bn'
                ? 'আন্তর্জাতিক বেসামরিক বিমান চলাচল সংস্থার রানওয়ে রক্ষণাবেক্ষণ, টারম্যাক নিরাপত্তা ও পাইলটদের ডিউটি টাইম অনুপালন তদারকি।'
                : 'Observing International Civil Aviation Organization baseline protocols for ramp operations and cabin safety.',
        },
        {
            name: lang === 'bn' ? 'আইএমও নদী ও নৌপথ সুরক্ষা' : 'IMO Riverine Safety',
            subtitle: lang === 'bn' ? 'মহাসাগর ও নদী নিরাপত্তা' : 'Maritime Guidelines',
            desc: lang === 'bn'
                ? 'অভ্যন্তরীণ নদীপথের যাত্রীবাহী লঞ্চ ও ফেরিতে নিরাপদ লোড লাইন এবং জীবনরক্ষাকারী সরঞ্জামের আন্তর্জাতিক মান নিশ্চিতকরণ।'
                : 'Applying International Maritime Organization safety concepts to inland riverine and passenger launch networks.',
        },
        {
            name: lang === 'bn' ? 'ইউআইসি আন্তর্জাতিক রেল ফ্রেমওয়ার্ক' : 'UIC Safety Platform',
            subtitle: lang === 'bn' ? 'রেল করিডোর ও সিগন্যালিং' : 'Railway Corridors',
            desc: lang === 'bn'
                ? 'আন্তর্জাতিক রেলওয়ে ইউনিয়নের নির্দেশিকা অনুযায়ী আনম্যানড ক্রসিংয়ে স্বয়ংক্রিয় প্রক্সিমিটি রাডার ও শব্দ সংকেত প্রযুক্তি সম্প্রসারণ।'
                : 'Adopting International Union of Railways guidelines on level-crossing automated warning technologies.',
        },
    ];

    return (
        <section className="py-24 bg-white/70 border-t border-slate-200/80 relative overflow-hidden font-bengali">
            {/* Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] text-slate-700 text-xs font-bold transition-all">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">{t('affiliationsBadge')}</span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
                        {t('affiliationsTitle')}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                        {t('affiliationsSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {affiliations.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden bg-white/70 hover:bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 hover:border-blue-300 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 group"
                        >
                            {/* Glossy top edge highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                            <div className="flex items-center gap-2 mb-3.5">
                                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-wider text-slate-500">{item.subtitle}</span>
                            </div>
                            <h4 className="font-black text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors tracking-tight">
                                {item.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
