import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import { 
    X, 
    AlertTriangle, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    CheckCircle, 
    Clock, 
    Search, 
    ShieldAlert, 
    FileText,
    Send
} from 'lucide-react';

export default function IncidentReporterModal({ isOpen, onClose, flash = {} }) {
    const [activeTab, setActiveTab] = useState('report'); // 'report' or 'track'
    const [trackCode, setTrackCode] = useState('');

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
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

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span>Public Transit Safety Vigilance</span>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                                    24/7 Hotline
                                </span>
                            </h3>
                            <p className="text-xs text-slate-400">
                                Report hazards or track the investigation status of your previous submission.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-800 bg-slate-950/60 px-6">
                    <button
                        onClick={() => setActiveTab('report')}
                        className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === 'report'
                                ? 'border-sky-500 text-sky-400 bg-slate-900/50'
                                : 'border-transparent text-slate-400 hover:text-white'
                        }`}
                    >
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>Submit New Hazard / Incident</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('track')}
                        className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === 'track'
                                ? 'border-sky-500 text-sky-400 bg-slate-900/50'
                                : 'border-transparent text-slate-400 hover:text-white'
                        }`}
                    >
                        <Search className="w-4 h-4 text-sky-400" />
                        <span>Track Existing Case Status</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 max-h-[75vh] overflow-y-auto">
                    {/* Success notification */}
                    {flash?.success && flash?.tracking_number && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-sm text-emerald-300">Incident Successfully Registered</h4>
                                    <p className="text-xs text-emerald-200/80 mt-1">{flash.message}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="text-xs text-slate-300 font-medium">Your Reference Code:</span>
                                        <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-sm border border-emerald-500/40">
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
                                <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider mb-2">
                                    Select Transit Sector *
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {[
                                        { id: 'road', label: 'Road / Highway', icon: Car, color: 'text-sky-400' },
                                        { id: 'air', label: 'Air / Flight', icon: Plane, color: 'text-indigo-400' },
                                        { id: 'train', label: 'Railway / Track', icon: Train, color: 'text-emerald-400' },
                                        { id: 'water', label: 'Water / Ferry', icon: Ship, color: 'text-teal-400' },
                                    ].map((mode) => {
                                        const Icon = mode.icon;
                                        const isSelected = data.transit_mode === mode.id;
                                        return (
                                            <button
                                                type="button"
                                                key={mode.id}
                                                onClick={() => setData('transit_mode', mode.id)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                                                    isSelected
                                                        ? 'bg-sky-500/20 border-sky-500 text-white shadow-lg shadow-sky-900/30'
                                                        : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
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
                                <label className="block text-xs font-semibold uppercase text-slate-300 tracking-wider mb-1.5">
                                    Urgency Severity *
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {['low', 'medium', 'high', 'critical'].map((level) => (
                                        <button
                                            type="button"
                                            key={level}
                                            onClick={() => setData('urgency', level)}
                                            className={`py-1.5 px-2 rounded-lg text-xs font-bold uppercase transition-all border ${
                                                data.urgency === level
                                                    ? level === 'critical'
                                                        ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-900/40'
                                                        : level === 'high'
                                                        ? 'bg-amber-600 text-white border-amber-500'
                                                        : 'bg-sky-600 text-white border-sky-500'
                                                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                                            }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Title & Location */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1">
                                        Hazard / Issue Title *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Broken guardrail on overpass"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                                        required
                                    />
                                    {errors.title && <span className="text-xs text-red-400">{errors.title}</span>}
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1">
                                        Exact Location / Landmark *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Mile 45, N1 Highway near Comilla"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                                        required
                                    />
                                    {errors.location && <span className="text-xs text-red-400">{errors.location}</span>}
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div>
                                <label className="block text-xs font-medium text-slate-300 mb-1">
                                    Detailed Observation & Risks *
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Describe the safety violation, approximate number of people at risk, vehicle or vessel registrations if available..."
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                                    required
                                />
                                {errors.description && <span className="text-xs text-red-400">{errors.description}</span>}
                            </div>

                            {/* Citizen Contact (Optional) */}
                            <div className="pt-2 border-t border-slate-800">
                                <p className="text-[11px] text-slate-400 mb-2">
                                    Reporter Details (Optional — Can submit anonymously for safety):
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={data.reporter_name}
                                        onChange={(e) => setData('reporter_name', e.target.value)}
                                        className="bg-slate-800/60 border border-slate-700 text-xs rounded-lg px-3 py-2 text-white placeholder-slate-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={data.reporter_email}
                                        onChange={(e) => setData('reporter_email', e.target.value)}
                                        className="bg-slate-800/60 border border-slate-700 text-xs rounded-lg px-3 py-2 text-white placeholder-slate-500"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={data.reporter_phone}
                                        onChange={(e) => setData('reporter_phone', e.target.value)}
                                        className="bg-slate-800/60 border border-slate-700 text-xs rounded-lg px-3 py-2 text-white placeholder-slate-500"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-950/40 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{processing ? 'Transmitting to Vigilance Unit...' : 'Dispatch Hazard Alert to Nirapod Jatayat'}</span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Tracking Tab */
                        <div className="space-y-6">
                            <form onSubmit={handleTrackSubmit} className="space-y-3">
                                <label className="block text-xs font-semibold uppercase text-slate-300">
                                    Enter Incident Tracking ID:
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="e.g. NJ-2026-8841"
                                        value={trackCode}
                                        onChange={(e) => setTrackCode(e.target.value.toUpperCase())}
                                        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 uppercase"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5"
                                    >
                                        <Search className="w-4 h-4" />
                                        <span>Check</span>
                                    </button>
                                </div>
                            </form>

                            {/* Tracking Error */}
                            {flash?.tracking_error && (
                                <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 rounded-xl text-xs">
                                    {flash.tracking_error}
                                </div>
                            )}

                            {/* Tracking Result */}
                            {flash?.tracked_incident && (
                                <div className="p-5 rounded-xl bg-slate-950 border border-slate-700 space-y-3">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                        <div>
                                            <span className="text-xs text-slate-400">Case Reference</span>
                                            <h4 className="font-mono font-bold text-base text-sky-400">
                                                {flash.tracked_incident.tracking_number}
                                            </h4>
                                        </div>
                                        <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full border ${
                                            flash.tracked_incident.status === 'resolved'
                                                ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                                                : flash.tracked_incident.status === 'action_taken'
                                                ? 'bg-blue-950 text-blue-400 border-blue-800'
                                                : 'bg-amber-950 text-amber-400 border-amber-800'
                                        }`}>
                                            {flash.tracked_incident.status.replace('_', ' ')}
                                        </span>
                                    </div>

                                    <div>
                                        <h5 className="font-semibold text-white text-sm">{flash.tracked_incident.title}</h5>
                                        <p className="text-xs text-slate-400 mt-0.5">Location: {flash.tracked_incident.location}</p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                                        <span className="text-slate-400 font-semibold block mb-1">Official Response & Action Taken:</span>
                                        <p className="text-slate-300">{flash.tracked_incident.investigation_notes || 'Triage in progress.'}</p>
                                    </div>
                                </div>
                            )}

                            {/* Demo tracker suggestions */}
                            <div className="pt-2 text-xs text-slate-400">
                                <p className="mb-2 font-medium text-slate-300">Quick Test Demo Tracking IDs:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['NJ-2026-8841', 'NJ-2026-8819', 'NJ-2026-8790', 'NJ-2026-8755'].map((code) => (
                                        <button
                                            key={code}
                                            onClick={() => setTrackCode(code)}
                                            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 font-mono text-[11px] border border-slate-700"
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
