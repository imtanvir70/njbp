import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    PhoneCall, 
    AlertTriangle, 
    Menu, 
    X, 
    Shield,
    Check
} from 'lucide-react';

export default function Navbar({ onOpenIncidentModal }) {
    const { lang, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isBangla = lang === 'bn';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: isBangla ? 'মূল পাতা' : 'Home', href: route('home') },
        { label: isBangla ? '৪টি খাত' : 'Sectors', href: `${route('home')}#quadrants` },
        { label: isBangla ? 'গ্যালারি' : 'Gallery', href: route('gallery') },
        { label: isBangla ? 'সাফল্য' : 'Stories', href: route('stories') },
        { label: isBangla ? 'নেতৃত্ব' : 'Team', href: route('team') },
        { label: isBangla ? 'সচেতনতা' : 'Awareness', href: route('awareness') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            {/* Minimal Semi-Transparent + Blur Main Navigation Bar */}
            <nav className={`relative px-4 sm:px-8 py-3 transition-all duration-300 border-b ${
                scrolled 
                    ? 'bg-white/80 backdrop-blur-2xl border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)]' 
                    : 'bg-white/65 backdrop-blur-xl border-white/60 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)]'
            }`}>
                {/* Subtle top glossy specular line */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Brand with Full Name & New Logo */}
                    <Link href={route('home')} className="focus:outline-none">
                        <BrandLogo />
                    </Link>

                    {/* Minimal & Beautiful Menu Items */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-[14px] font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-100/70 transition-all py-1.5 px-3 rounded-xl relative group"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Utility Group: Language Toggle + Hotline + Hazard Report CTA */}
                    <div className="hidden sm:flex items-center gap-2.5">
                        {/* 24/7 Hotline Minimal Pill */}
                        <a
                            href="tel:16100"
                            className="flex items-center gap-1.5 text-slate-800 font-extrabold bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl border border-amber-300/50 text-xs transition-all shadow-sm backdrop-blur-md group"
                            title="24/7 Transit Helpline: 16100"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <PhoneCall className="w-3.5 h-3.5 text-amber-600 group-hover:scale-110 transition-transform" />
                            <span>16100</span>
                        </a>

                        {/* Minimal Language Toggle Pill */}
                        <div className="flex items-center bg-slate-200/50 backdrop-blur-md rounded-xl p-0.5 border border-slate-300/50 shadow-inner text-xs font-bold">
                            <button
                                onClick={() => setLanguage('bn')}
                                className={`px-2.5 py-1 rounded-lg transition-all ${
                                    isBangla
                                        ? 'bg-white text-blue-700 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                                title="বাংলায় দেখুন"
                            >
                                বাং
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2.5 py-1 rounded-lg transition-all ${
                                    !isBangla
                                        ? 'bg-white text-blue-700 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                                title="View in English"
                            >
                                EN
                            </button>
                        </div>

                        {/* Minimal Report Hazard CTA */}
                        <button
                            onClick={onOpenIncidentModal}
                            className="group relative overflow-hidden flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-md shadow-red-500/25 hover:shadow-red-500/35 transition-all hover:scale-[1.02] active:scale-95"
                        >
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                            <AlertTriangle className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                            <span>{isBangla ? 'ঝুঁকি রিপোর্ট' : 'Report'}</span>
                        </button>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        {/* Mobile Language switch */}
                        <button
                            onClick={() => setLanguage(isBangla ? 'en' : 'bn')}
                            className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                        >
                            {isBangla ? 'EN' : 'বাং'}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
                            aria-label="Toggle Navigation"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-4 border-t border-slate-200 px-3 pb-5 space-y-2 bg-white rounded-2xl shadow-xl animate-in slide-in-from-top-2 duration-200">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2.5 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 flex flex-col gap-2.5">
                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    if (onOpenIncidentModal) onOpenIncidentModal();
                                }}
                                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold rounded-xl bg-red-600 text-white shadow-md"
                            >
                                <AlertTriangle className="w-4 h-4" />
                                <span>{isBangla ? 'যাতায়াত ঝুঁকি রিপোর্ট করুন (২৪/৭)' : 'Report Transit Hazard (24/7)'}</span>
                            </button>
                            <a
                                href="tel:16100"
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl bg-amber-50 text-amber-800 border border-amber-200"
                            >
                                <PhoneCall className="w-4 h-4 text-amber-600" />
                                <span>হটলাইন: ১৬১০০ / ৯৯৯</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
