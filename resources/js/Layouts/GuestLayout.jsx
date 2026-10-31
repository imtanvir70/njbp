import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative p-4 font-bengali overflow-hidden">
            {/* Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md space-y-6">
                {/* Logo & Header */}
                <div className="text-center space-y-3">
                    <Link href="/" className="inline-block group">
                        <div className="w-20 h-20 mx-auto rounded-full bg-white p-1 shadow-lg shadow-slate-300/60 border border-slate-200/90 ring-4 ring-white group-hover:scale-105 transition-transform flex items-center justify-center">
                            <img
                                src="/images/njbp-logo.webp"
                                alt="নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                    </Link>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ
                        </h1>
                        <p className="text-xs font-bold text-blue-700 mt-0.5">
                            অ্যাডমিন ও সেন্ট্রাল মনিটরিং কন্ট্রোল ডেস্ক
                        </p>
                    </div>
                </div>

                {/* Frosted Form Card */}
                <div className="relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/90 p-6 sm:p-8 rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent pointer-events-none"></div>
                    {children}
                </div>

                <div className="text-center">
                    <Link href="/" className="text-xs font-bold text-slate-500 hover:text-blue-700 transition-colors">
                        ← মূল ওয়েবসাইটে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
}
