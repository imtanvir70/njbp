import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { 
    Shield, 
    PhoneCall, 
    AlertTriangle, 
    Menu, 
    X, 
    Globe, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    Image as ImageIcon, 
    Users, 
    Award, 
    BookOpen,
    Search
} from 'lucide-react';

export default function Navbar({ onOpenIncidentModal }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: route('home') },
        { label: 'Monitoring Quadrants', href: `${route('home')}#quadrants` },
        { label: 'Photo Gallery', href: route('gallery') },
        { label: 'Success Stories', href: route('stories') },
        { label: 'Leadership', href: route('team') },
        { label: 'Safety Hub', href: route('awareness') },
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            {/* Top Bar - International Status & Emergency Contact */}
            <div className="bg-slate-950/95 border-b border-slate-800/80 text-xs py-1.5 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            <span>Global Transit Vigilance: Active 24/7</span>
                        </div>
                        <span className="hidden md:inline text-slate-600">|</span>
                        <div className="hidden md:flex items-center gap-2 text-slate-400">
                            <span className="text-slate-400">Aligned with UN Decade of Action for Road Safety 2021–2030</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Transit Hotline: 16100 / 999</span>
                        </div>

                        {/* Language Selector */}
                        <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                            <Globe className="w-3 h-3 text-sky-400" />
                            <button 
                                onClick={() => setLang('en')}
                                className={`px-1 rounded font-medium ${lang === 'en' ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <span className="text-slate-600">/</span>
                            <button 
                                onClick={() => setLang('bn')}
                                className={`px-1 rounded font-medium ${lang === 'bn' ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-white'}`}
                            >
                                বাং
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
                scrolled 
                    ? 'bg-slate-950/90 backdrop-blur-md border-b border-sky-950/60 shadow-xl shadow-black/40' 
                    : 'bg-slate-950/70 backdrop-blur-sm border-b border-white/5'
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
                                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors py-1 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            onClick={onOpenIncidentModal}
                            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-red-600/90 hover:bg-red-600 text-white shadow-lg shadow-red-900/30 transition-all hover:scale-105 active:scale-95 border border-red-500/40"
                        >
                            <AlertTriangle className="w-4 h-4 animate-bounce" />
                            <span>Report Hazard</span>
                        </button>

                        <a
                            href={`${route('home')}#join-movement`}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-105 active:scale-95"
                        >
                            <Shield className="w-4 h-4" />
                            <span>Join Movement</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={onOpenIncidentModal}
                            className="sm:hidden p-2 text-red-400 bg-red-950/40 rounded-lg border border-red-800"
                            title="Report Incident"
                        >
                            <AlertTriangle className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                            aria-label="Toggle Navigation"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileOpen && (
                    <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 px-2 pb-4 space-y-2 bg-slate-950/95 rounded-xl shadow-2xl">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-900 rounded-lg"
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
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-lg bg-red-600 text-white shadow-md"
                            >
                                <AlertTriangle className="w-4 h-4" />
                                <span>Report Transit Incident / Hazard</span>
                            </button>
                            <a
                                href={`${route('home')}#join-movement`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-md"
                            >
                                <Shield className="w-4 h-4" />
                                <span>Join Nirapod Jatayat Movement</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
