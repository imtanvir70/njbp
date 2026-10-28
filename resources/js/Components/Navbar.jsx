import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    PhoneCall, 
    AlertTriangle, 
    Menu, 
    X, 
    Globe, 
    Shield,
    Check,
    Radio
} from 'lucide-react';

export default function Navbar({ onOpenIncidentModal }) {
    const { lang, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
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
            {/* Top Credibility & Hotline Bar */}
            <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800/80">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    {/* Left: Global Framework & Status */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 text-[11px]">
                            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                            <span>{t('topNotice')}</span>
                        </div>
                        <span className="hidden md:inline text-slate-700">|</span>
                        <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px]">
                            <span>{t('topFramework')}</span>
                        </div>
                    </div>

                    {/* Right: Emergency Hotline + Geo-Language Switcher */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Rapid Emergency Helpline */}
                        <a
                            href="tel:16100"
                            className="flex items-center gap-1.5 text-amber-300 font-bold bg-amber-500/15 hover:bg-amber-500/25 px-3 py-1 rounded-full border border-amber-500/30 text-[11px] transition-all"
                        >
                            <PhoneCall className="w-3 h-3 text-amber-400 animate-bounce" />
                            <span>{t('hotlineLabel')}</span>
                        </a>

                        {/* Language Switcher Segmented Control */}
                        <div className="flex items-center bg-slate-900 rounded-full p-1 border border-slate-800 shadow-inner">
                            <button
                                onClick={() => setLanguage('bn')}
                                className={`px-3 py-0.5 text-[11px] font-bold rounded-full transition-all flex items-center gap-1 ${
                                    lang === 'bn'
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                                title="বাংলায় দেখুন"
                            >
                                <span>বাংলা</span>
                                {lang === 'bn' && <Check className="w-2.5 h-2.5" />}
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-0.5 text-[11px] font-bold rounded-full transition-all flex items-center gap-1 ${
                                    lang === 'en'
                                        ? 'bg-blue-600 text-white shadow-sm'
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

            {/* Main Navigation Bar */}
            <nav className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]' 
                    : 'bg-white border-b border-slate-200/70 shadow-sm'
            }`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href={route('home')} className="focus:outline-none">
                        <BrandLogo />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors py-1 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* Report Hazard Button */}
                        <button
                            onClick={onOpenIncidentModal}
                            className="group flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-500/20 hover:shadow-red-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <AlertTriangle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            <span>{t('btnReportHazard')}</span>
                        </button>

                        {/* Join Movement Button */}
                        <a
                            href={`${route('home')}#join-movement`}
                            className="flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-slate-900 hover:bg-blue-600 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Shield className="w-4 h-4 text-sky-400" />
                            <span>{t('btnJoinMovement')}</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={onOpenIncidentModal}
                            className="sm:hidden p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                            title="Report Incident"
                        >
                            <AlertTriangle className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
                            aria-label="Toggle Navigation"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-4 border-t border-slate-200 px-3 pb-5 space-y-2 bg-white rounded-2xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
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
                                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-extrabold rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-500/20"
                            >
                                <AlertTriangle className="w-4 h-4" />
                                <span>{t('btnReportHazard')}</span>
                            </button>
                            <a
                                href={`${route('home')}#join-movement`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-extrabold rounded-xl bg-slate-900 text-white shadow-sm"
                            >
                                <Shield className="w-4 h-4 text-sky-400" />
                                <span>{t('btnJoinMovement')}</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
