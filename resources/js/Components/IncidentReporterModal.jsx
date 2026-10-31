import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';
import { 
    X, 
    AlertTriangle, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle, 
    Search, 
    ShieldAlert, 
    Send
} from 'lucide-react';

export default function IncidentReporterModal({ isOpen, onClose, flash = {} }) {
    const { t, lang } = useLanguage();
    const [activeTab, setActiveTab] = useState('report');
    const [trackCode, setTrackCode] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        transit_mode: 'road',
        title: '',
        location: '',
        description: '',
        urgency: 'high',
        reporter_name: '',
        reporter_email: '',
        reporter_phone: '',
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('incident.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleTrackSubmit = (e) => {
        e.preventDefault();
        if (!trackCode) return;
        router.post(route('incident.track'), {
            tracking_number: trackCode,
        }, {
            preserveScroll: true,
        });
    };

    const transitModes = [
        { id: 'road', label: t('sectorRoad'), icon: Car, color: 'text-sky-600', bg: 'bg-sky-50' },
        { id: 'air', label: t('sectorAir'), icon: Plane, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { id: 'train', label: t('sectorTrain'), icon: Train, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { id: 'water', label: t('sectorWater'), icon: Ship, color: 'text-teal-600', bg: 'bg-teal-50' },
    ];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-white/90 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-bengali">
                {/* Glossy top edge highlight */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none z-10"></div>

                {/* Modal Header */}
                <div className="bg-slate-50/80 p-6 border-b border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-red-50 border border-red-200/80 text-red-600 shadow-sm">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <span>{t('modalTitle')}</span>
                                <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                                    24/7 Live
                                </span>
                            </h3>
                            <p className="text-xs text-slate-500 font-medium">
                                {t('modalSubtitle')}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-700 p-2.5 rounded-xl hover:bg-slate-200/60 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-200 bg-slate-50/70 px-6">
                    <button
                        onClick={() => setActiveTab('report')}
                        className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === 'report'
                                ? 'border-sky-600 text-sky-700 bg-white'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span>{t('tabSubmit')}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('track')}
                        className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === 'track'
                                ? 'border-sky-600 text-sky-700 bg-white'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        <Search className="w-4 h-4 text-sky-600" />
                        <span>{t('tabTrack')}</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 max-h-[75vh] overflow-y-auto">
                    {/* Success notification */}
                    {flash?.success && flash?.tracking_number && (
                        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm text-emerald-900">
                                        {lang === 'bn' ? 'রিপোর্ট সফলভাবে গৃহীত হয়েছে' : 'Incident Successfully Registered'}
                                    </h4>
                                    <p className="text-xs text-emerald-700 mt-1">{flash.message}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="text-xs text-slate-600 font-medium">{lang === 'bn' ? 'আপনার রেফারেন্স কোড:' : 'Your Reference Code:'}</span>
                                        <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-mono font-bold text-sm border border-emerald-300">
                                            {flash.tracking_number}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'report' ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Transit Mode Selection */}
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-600 tracking-wider mb-2">
                                    {t('labelSelectSector')}
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {transitModes.map((mode) => {
                                        const Icon = mode.icon;
                                        const isSelected = data.transit_mode === mode.id;
                                        return (
                                            <button
                                                type="button"
                                                key={mode.id}
                                                onClick={() => setData('transit_mode', mode.id)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                                                    isSelected
                                                        ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-sm scale-[1.02]'
                                                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                }`}
                                            >
                                                <Icon className={`w-5 h-5 mb-1 ${mode.color}`} />
                                                <span className="text-xs font-semibold">{mode.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Urgency Level */}
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-600 tracking-wider mb-1.5">
                                    {t('labelUrgency')}
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[
                                        { id: 'low', label: lang === 'bn' ? 'সাধারণ' : 'Low' },
                                        { id: 'medium', label: lang === 'bn' ? 'মাঝারি' : 'Medium' },
                                        { id: 'high', label: lang === 'bn' ? 'জরুরি' : 'High' },
                                        { id: 'critical', label: lang === 'bn' ? 'মারাত্মক' : 'Critical' },
                                    ].map((level) => (
                                        <button
                                            type="button"
                                            key={level.id}
                                            onClick={() => setData('urgency', level.id)}
                                            className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                                                data.urgency === level.id
                                                    ? level.id === 'critical'
                                                        ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                                        : level.id === 'high'
                                                        ? 'bg-amber-500 text-white border-amber-500'
                                                        : 'bg-sky-600 text-white border-sky-600'
                                                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-slate-900'
                                            }`}
                                        >
                                            {level.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Title & Location */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1">
                                        {t('labelTitle')}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={lang === 'bn' ? 'যেমন: ফ্লাইওভারে ভাঙা রেলিং ও তেল নিঃসরণ' : 'e.g. Broken guardrail on overpass'}
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                                        required
                                    />
                                    {errors.title && <span className="text-xs text-rose-500">{errors.title}</span>}
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1">
                                        {t('labelLocation')}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={lang === 'bn' ? 'যেমন: ঢাকা-চট্টগ্রাম হাইওয়ে ৪২ কিমি' : 'e.g. Mile 45, N1 Highway near Comilla'}
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                                        required
                                    />
                                    {errors.location && <span className="text-xs text-rose-500">{errors.location}</span>}
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">
                                    {t('labelDescription')}
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder={lang === 'bn' ? 'ঝুঁকির কারণ, যানবাহনের বিবরণ এবং যাত্রীদের বিপদের সম্ভাবনার বিবরণ লিখুন...' : 'Describe the safety violation, approximate number of people at risk, vehicle or vessel registrations...'}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                                    required
                                />
                                {errors.description && <span className="text-xs text-rose-500">{errors.description}</span>}
                            </div>

                            {/* Citizen Contact (Optional) */}
                            <div className="pt-2 border-t border-slate-200">
                                <p className="text-[11px] text-slate-500 mb-2 font-medium">
                                    {t('labelReporter')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <input
                                        type="text"
                                        placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your Name'}
                                        value={data.reporter_name}
                                        onChange={(e) => setData('reporter_name', e.target.value)}
                                        className="bg-slate-50 border border-slate-200 text-xs rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder={lang === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Email Address'}
                                        value={data.reporter_email}
                                        onChange={(e) => setData('reporter_email', e.target.value)}
                                        className="bg-slate-50 border border-slate-200 text-xs rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400"
                                    />
                                    <input
                                        type="tel"
                                        placeholder={lang === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'}
                                        value={data.reporter_phone}
                                        onChange={(e) => setData('reporter_phone', e.target.value)}
                                        className="bg-slate-50 border border-slate-200 text-xs rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="relative overflow-hidden w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                                >
                                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                                    <Send className="w-4 h-4" />
                                    <span>{processing ? t('btnSubmitting') : t('btnSubmitIncident')}</span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Tracking Tab */
                        <div className="space-y-6">
                            <form onSubmit={handleTrackSubmit} className="space-y-3">
                                <label className="block text-xs font-semibold uppercase text-slate-700">
                                    {t('trackInputLabel')}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="e.g. NJ-2026-8841"
                                        value={trackCode}
                                        onChange={(e) => setTrackCode(e.target.value.toUpperCase())}
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white uppercase"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                                    >
                                        <Search className="w-4 h-4" />
                                        <span>{t('btnCheckStatus')}</span>
                                    </button>
                                </div>
                            </form>

                            {/* Tracking Error */}
                            {flash?.tracking_error && (
                                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-medium">
                                    {flash.tracking_error}
                                </div>
                            )}

                            {/* Tracking Result */}
                            {flash?.tracked_incident && (
                                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                                        <div>
                                            <span className="text-xs text-slate-500 font-medium">
                                                {lang === 'bn' ? 'কেস রেফারেন্স' : 'Case Reference'}
                                            </span>
                                            <h4 className="font-mono font-bold text-base text-sky-700">
                                                {flash.tracked_incident.tracking_number}
                                            </h4>
                                        </div>
                                        <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full border ${
                                            flash.tracked_incident.status === 'resolved'
                                                ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                                                : flash.tracked_incident.status === 'action_taken'
                                                ? 'bg-blue-100 text-blue-800 border-blue-200'
                                                : 'bg-amber-100 text-amber-800 border-amber-200'
                                        }`}>
                                            {flash.tracked_incident.status.replace('_', ' ')}
                                        </span>
                                    </div>

                                    <div>
                                        <h5 className="font-bold text-slate-900 text-sm">{flash.tracked_incident.title}</h5>
                                        <p className="text-xs text-slate-500 mt-0.5">Location: {flash.tracked_incident.location}</p>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                                        <span className="text-slate-600 font-bold block mb-1">
                                            {lang === 'bn' ? 'কর্তৃপক্ষের পদক্ষেপ ও তদন্ত অগ্রগতি:' : 'Official Response & Action Taken:'}
                                        </span>
                                        <p className="text-slate-700">{flash.tracked_incident.investigation_notes || 'Triage in progress.'}</p>
                                    </div>
                                </div>
                            )}

                            {/* Demo tracker suggestions */}
                            <div className="pt-2 text-xs text-slate-500">
                                <p className="mb-2 font-medium text-slate-700">{t('demoCodes')}</p>
                                <div className="flex flex-wrap gap-2">
                                    {['NJ-2026-8841', 'NJ-2026-8819', 'NJ-2026-8790', 'NJ-2026-8755'].map((code) => (
                                        <button
                                            key={code}
                                            onClick={() => setTrackCode(code)}
                                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sky-700 font-mono text-[11px] border border-slate-200"
                                        >
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
