import React from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Car, 
    Plane, 
    Train, 
    Anchor,
    CheckCircle2,
    HeartPulse,
    ShieldAlert,
    ExternalLink,
    Code2,
    Shield
} from 'lucide-react';

export default function Footer() {
    const { t, lang } = useLanguage();
    const isBangla = lang === 'bn';

    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-[#070d1e] to-black text-slate-300 pt-20 pb-12 border-t border-slate-800/80 overflow-hidden font-bengali">
            {/* Top Glossy Highlight Line */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent pointer-events-none"></div>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                {/* Upper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
                    {/* Brand & Mission (Spans 2 columns) */}
                    <div className="lg:col-span-2 space-y-5">
                        <BrandLogo showTagline={false} isDark={true} />
                        <p className="text-sm text-slate-400 leading-relaxed max-w-md font-medium">
                            {t('footerAbout')}
                        </p>

                        <div className="flex flex-wrap gap-2.5 text-xs pt-1">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/90 border border-slate-800/90 text-sky-400 rounded-xl font-bold backdrop-blur-md shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                UN Decade of Action Aligned
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/90 border border-slate-800/90 text-sky-400 rounded-xl font-bold backdrop-blur-md shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                Vision Zero Framework
                            </span>
                        </div>
                    </div>

                    {/* Transit Monitoring Pillars */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-sky-400" />
                            <span>{isBangla ? '৪টি ট্রানজিট ডিভিশন' : '4 Transit Pillars'}</span>
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2.5 hover:text-sky-300 transition-colors group">
                                    <div className="p-1.5 rounded-lg bg-sky-950/60 border border-sky-800/40 text-sky-400 group-hover:scale-110 transition-transform">
                                        <Car className="w-3.5 h-3.5" />
                                    </div>
                                    <span>{t('sectorRoad')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2.5 hover:text-indigo-300 transition-colors group">
                                    <div className="p-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 group-hover:scale-110 transition-transform">
                                        <Plane className="w-3.5 h-3.5" />
                                    </div>
                                    <span>{t('sectorAir')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group">
                                    <div className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 group-hover:scale-110 transition-transform">
                                        <Train className="w-3.5 h-3.5" />
                                    </div>
                                    <span>{t('sectorTrain')}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2.5 hover:text-teal-300 transition-colors group">
                                    <div className="p-1.5 rounded-lg bg-teal-950/60 border border-teal-800/40 text-teal-400 group-hover:scale-110 transition-transform">
                                        <Anchor className="w-3.5 h-3.5" />
                                    </div>
                                    <span>{t('sectorWater')}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Resources */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">
                            {isBangla ? 'গুরুত্বপূর্ণ সেবা' : 'Key Portals'}
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
                            <li>
                                <Link href={`${route('home')}#rescue-guide`} className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors font-bold">
                                    <HeartPulse className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                                    <span>{isBangla ? 'জরুরি উদ্ধার নির্দেশিকা' : 'Crash Rescue Guide'}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('gallery')} className="hover:text-sky-300 transition-colors">
                                    {t('navGallery')}
                                </Link>
                            </li>
                            <li>
                                <Link href={route('stories')} className="hover:text-sky-300 transition-colors">
                                    {t('navStories')}
                                </Link>
                            </li>
                            <li>
                                <Link href={route('team')} className="hover:text-sky-300 transition-colors">
                                    {t('navTeam')}
                                </Link>
                            </li>
                            <li>
                                <Link href={route('awareness')} className="hover:text-sky-300 transition-colors">
                                    {t('navAwareness')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Emergency & International Contact */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">
                            {t('footerEmergency')}
                        </h4>
                        <div className="space-y-3.5 text-xs text-slate-400">
                            <div className="flex items-start gap-2.5">
                                <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                                    <Phone className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-200">{t('footerHelpline')}</p>
                                    <p className="text-amber-400 font-extrabold text-sm">১৬১০০ (16100) / ৯৯৯</p>
                                    <p className="text-slate-400">+880 2 8900 1200 (Intl)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0 mt-0.5">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-200">Incident Desk</p>
                                    <p className="text-slate-300 font-medium">vigilance@nirapodjatayat.org</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <div className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-200">Headquarters</p>
                                    <p className="text-slate-400 leading-snug">Gulshan Avenue, Dhaka & Geneva Secretariat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright, Privacy & Solve It Attribution */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p className="text-center md:text-left font-medium">
                        © {new Date().getFullYear()} {isBangla ? 'নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ (নিযাবাপ / NJBP)। সর্বস্বত্ব সংরক্ষিত।' : 'Nirapod Jatayat Bastobayon Parishad (NJBP). All Rights Reserved.'}
                    </p>

                    {/* Developed by Solve it Attribution Badge */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://solveitbd.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md shadow-sm"
                            title="Developed by Solve It - https://solveitbd.com/"
                        >
                            <Code2 className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-400 font-medium">Developed by</span>
                            <span className="font-black text-sky-400 group-hover:text-sky-300 transition-colors">Solve It</span>
                            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sky-400 transition-colors" />
                        </a>
                    </div>

                    <div className="flex items-center gap-5 font-medium">
                        <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-slate-200 transition-colors cursor-pointer">Audit Reports</span>
                        <Link href={route('login')} className="text-slate-400 hover:text-sky-400 transition-colors">
                            Officer Portal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
