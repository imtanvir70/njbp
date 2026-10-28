import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    Shield, 
    PhoneCall, 
    AlertTriangle, 
    Menu, 
    X, 
    Globe, 
    Sparkles,
    Check
} from 'lucide-react';

export default function Navbar({ onOpenIncidentModal }) {
    const { lang, setLanguage, toggleLanguage, t, isGeoDetected } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: t('navHome'), href: route('home') },
        { label: t('navMonitoring'), href: `${route('home')}#quadrants` },
        { label: t('navGallery'), href: route('gallery') },
        { label: t('navStories'), href: route('stories') },
        { label: t('navTeam'), href: route('team') },
        { label: t('navAwareness'), href: route('awareness') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            {/* Top Bar - International Framework, Hotline & Geo Language Indicator */}
            <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>{t('topNotice')}</span>
                        </div>
                        <span className="hidden md:inline text-slate-700">|</span>
                        <div className="hidden lg:flex items-center gap-2 text-slate-400 text-[11px]">
                            <span>{t('topFramework')}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Emergency Hotline */}
                        <div className="flex items-center gap-1.5 text-amber-300 font-semibold bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/30 text-[11px]">
                            <PhoneCall className="w-3 h-3 text-amber-400" />
                            <span>{t('hotlineLabel')}</span>
                        </div>

                        {/* Language Toggle Switch (Geo-aware with manual override) */}
                        <div className="flex items-center bg-slate-800/90 rounded-full p-0.5 border border-slate-700 shadow-inner">
                            <button
                                onClick={() => setLanguage('bn')}
                                className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all flex items-center gap-1 ${
                                    lang === 'bn'
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm scale-105'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                                title="বাংলায় দেখুন"
                            >
                                <span>বাংলা</span>
                                {lang === 'bn' && <Check className="w-2.5 h-2.5" />}
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all flex items-center gap-1 ${
                                    lang === 'en'
                                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm scale-105'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                                title="View in English"
                            >
                                <span>English</span>
                                {lang === 'en' && <Check className="w-2.5 h-2.5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar - Crisp Light Mode */}
            <nav className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/50' 
                    : 'bg-white border-b border-slate-200/60'
            }`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href={route('home')}>
                        <BrandLogo />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors py-1 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            onClick={onOpenIncidentModal}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20 transition-all hover:scale-105 active:scale-95"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            <span>{t('btnReportHazard')}</span>
                        </button>

                        <a
                            href={`${route('home')}#join-movement`}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white shadow-md shadow-sky-600/20 transition-all hover:scale-105 active:scale-95"
                        >
                            <Shield className="w-4 h-4" />
                            <span>{t('btnJoinMovement')}</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={onOpenIncidentModal}
                            className="sm:hidden p-2 text-rose-600 bg-rose-50 rounded-lg border border-rose-200"
                            title="Report Incident"
                        >
                            <AlertTriangle className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
                            aria-label="Toggle Navigation"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 px-2 pb-4 space-y-2 bg-white rounded-2xl shadow-xl">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-xl"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    if (onOpenIncidentModal) onOpenIncidentModal();
                                }}
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20"
                            >
                                <AlertTriangle className="w-4 h-4" />
                                <span>{t('btnReportHazard')}</span>
                            </button>
                            <a
                                href={`${route('home')}#join-movement`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/20"
                            >
                                <Shield className="w-4 h-4" />
                                <span>{t('btnJoinMovement')}</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
