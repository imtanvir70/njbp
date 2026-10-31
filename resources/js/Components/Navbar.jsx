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
    Check,
    Radio
} from 'lucide-react';

export default function Navbar({ onOpenIncidentModal }) {
    const { lang, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const isBangla = lang === 'bn';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: isBangla ? 'মূল পাতা' : 'Home', href: route('home') },
        { label: isBangla ? '৪টি ট্রানজিট ডিভিশন' : '4 Transit Sectors', href: `${route('home')}#quadrants` },
        { label: isBangla ? 'জরুরি উদ্ধার গাইড' : 'Rescue Protocols', href: `${route('home')}#rescue-guide` },
        { label: isBangla ? 'ফটো গ্যালারি' : 'Photo Gallery', href: route('gallery') },
        { label: isBangla ? 'সাফল্যের গল্প' : 'Success Stories', href: route('stories') },
        { label: isBangla ? 'নেতৃত্ব ও পর্ষদ' : 'Leadership & Board', href: route('team') },
        { label: isBangla ? 'সচেতনতা গাইড' : 'Safety Guidelines', href: route('awareness') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            {/* Top Brand & Utility Header: Semi-Transparent + Blur */}
            <div className={`relative px-3 sm:px-6 md:px-8 transition-all duration-300 border-b ${
                scrolled
                    ? 'py-2 bg-white/90 backdrop-blur-2xl border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]'
                    : 'py-2.5 sm:py-3.5 bg-white/80 backdrop-blur-xl border-slate-200/70 shadow-sm'
            }`}>
                {/* Glossy top edge highlight */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
                    {/* Brand Identity with Large, Crystal-Clear Logo & Full Name */}
                    <Link href={route('home')} className="focus:outline-none min-w-0 flex-1 md:flex-initial">
                        <BrandLogo />
                    </Link>

                    {/* Right Utility Bar: Emergency Hotline + Language Switch + Report Hazard */}
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                        {/* 24/7 Hotline Pill */}
                        <a
                            href="tel:16100"
                            className="flex items-center gap-2 text-slate-800 font-extrabold bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-2 rounded-xl border border-amber-300/60 text-xs transition-all shadow-sm backdrop-blur-md group whitespace-nowrap"
                            title="24/7 Transit Helpline: 16100"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <PhoneCall className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                            <span>{isBangla ? 'হটলাইন: ১৬১০০' : 'Hotline: 16100'}</span>
                        </a>

                        {/* Language Switcher Segmented Control */}
                        <div className="flex items-center bg-slate-200/60 backdrop-blur-md rounded-xl p-0.5 border border-slate-300/60 shadow-inner text-xs font-bold whitespace-nowrap">
                            <button
                                onClick={() => setLanguage('bn')}
                                className={`px-3 py-1.5 rounded-lg transition-all ${
                                    isBangla
                                        ? 'bg-white text-blue-700 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                                title="বাংলায় দেখুন"
                            >
                                বাংলা
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1.5 rounded-lg transition-all ${
                                    !isBangla
                                        ? 'bg-white text-blue-700 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                                title="View in English"
                            >
                                English
                            </button>
                        </div>

                        {/* Report Hazard Action Button */}
                        <button
                            onClick={onOpenIncidentModal}
                            className="group relative overflow-hidden flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-md shadow-red-500/25 hover:shadow-red-500/35 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                        >
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                            <AlertTriangle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            <span>{isBangla ? 'ঝুঁকি রিপোর্ট' : 'Report Hazard'}</span>
                        </button>
                    </div>

                    {/* Mobile Controls: Language & Hamburger */}
                    <div className="md:hidden flex items-center gap-1.5 shrink-0">
                        <button
                            onClick={() => setLanguage(isBangla ? 'en' : 'bn')}
                            className="px-2 py-1.5 text-xs font-bold rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800"
                        >
                            {isBangla ? 'EN' : 'বাং'}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-xl bg-slate-100/90 text-slate-800 hover:text-slate-900 border border-slate-200 transition-colors"
                            aria-label="Toggle Navigation"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Sub-Navigation Menu Strip: Clean Horizontal Bar with Zero Wrapping */}
            <div className="hidden md:block bg-white/70 backdrop-blur-xl border-b border-slate-200/70 shadow-sm px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Navigation Links (Spacious with whitespace-nowrap) */}
                    <nav className="flex items-center gap-1 lg:gap-2 py-1.5 overflow-x-auto">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-[13px] lg:text-[14px] font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 transition-all py-1.5 px-3.5 rounded-xl whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Live Surveillance Status indicator on the right */}
                    <div className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200/80">
                        <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                        <span>{isBangla ? 'সার্বক্ষণিক মনিটরিং: সক্রিয়' : 'Global Surveillance: Active'}</span>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {mobileOpen && (
                <div className="md:hidden mt-1 border-t border-slate-200 px-4 py-5 space-y-2 bg-white/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-colors whitespace-nowrap"
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
                            className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold rounded-xl bg-red-600 text-white shadow-md shadow-red-500/20"
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
        </header>
    );
}
