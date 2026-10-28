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
        <section className="py-16 bg-white border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                        {t('affiliationsBadge')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {t('affiliationsTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                        {t('affiliationsSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {affiliations.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:-translate-y-1 shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-sky-600" />
                                <span className="text-xs font-bold uppercase text-slate-500">{item.subtitle}</span>
                            </div>
                            <h4 className="font-extrabold text-slate-900 text-base mb-2">
                                {item.name}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
