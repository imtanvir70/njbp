import React from 'react';
import { Link } from '@inertiajs/react';
import BrandLogo from './BrandLogo';
import { 
    Shield, 
    HeartHandshake, 
    Phone, 
    Mail, 
    MapPin, 
    Globe, 
    ExternalLink, 
    Car, 
    Plane, 
    Train, 
    Anchor,
    ArrowUpRight,
    CheckCircle2
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Upper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
                    {/* Brand & Mission */}
                    <div className="lg:col-span-2 space-y-4">
                        <BrandLogo showTagline={false} />
                        <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                            <strong className="text-slate-200">Nirapod Jatayat</strong> is an international civic and transport safety organization dedicated to systematic monitoring, safety compliance, and nationwide awareness across Road, Aviation, Railway, and Maritime transportation corridors.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-2 text-xs">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 text-sky-400 rounded-full font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                UN Decade of Action Aligned
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 text-sky-400 rounded-full font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                Vision Zero Framework
                            </span>
                        </div>
                    </div>

                    {/* Transit Monitoring Pillars */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                            <span>4 Transit Pillars</span>
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Car className="w-4 h-4 text-sky-400" />
                                    <span>Highway & Road Safety</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Plane className="w-4 h-4 text-indigo-400" />
                                    <span>Aviation & Air Transit</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Train className="w-4 h-4 text-emerald-400" />
                                    <span>Railway & Crossings</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`${route('home')}#quadrants`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                                    <Anchor className="w-4 h-4 text-teal-400" />
                                    <span>Inland & Maritime Water</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Resources */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link href={route('gallery')} className="hover:text-sky-400 transition-colors">
                                    Photo Gallery & Slider
                                </Link>
                            </li>
                            <li>
                                <Link href={route('stories')} className="hover:text-sky-400 transition-colors">
                                    Impact & Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href={route('team')} className="hover:text-sky-400 transition-colors">
                                    Executive Board & Advisory
                                </Link>
                            </li>
                            <li>
                                <Link href={route('awareness')} className="hover:text-sky-400 transition-colors">
                                    Public Awareness Protocols
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Emergency & International Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                            24/7 Global Vigilance
                        </h4>
                        <div className="space-y-3 text-xs text-slate-400">
                            <div className="flex items-start gap-2.5">
                                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-slate-200">Rapid Response Helpline</p>
                                    <p className="text-slate-400">16100 (Domestic) / 999</p>
                                    <p className="text-slate-400">+880 2 8900 1200 (Intl)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-slate-200">Incident Desk Email</p>
                                    <p className="text-slate-400">vigilance@nirapodjatayat.org</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-slate-200">Headquarters</p>
                                    <p className="text-slate-400">Transport Safety House, Gulshan Avenue, Dhaka & Geneva Secretariat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Nirapod Jatayat (Safe Transit International). All rights reserved. Registered Non-Profit NGO.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-slate-400">Privacy Policy</span>
                        <span className="hover:text-slate-400">Public Audit Reports</span>
                        <span className="hover:text-slate-400">Terms of Vigilance</span>
                        <Link href={route('login')} className="text-slate-600 hover:text-sky-400">
                            Officer Portal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
