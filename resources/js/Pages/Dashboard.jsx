import React, { useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { 
    AlertTriangle, 
    ShieldAlert, 
    CheckCircle2, 
    Clock, 
    Car, 
    Plane, 
    Train, 
    Ship, 
    Image as ImageIcon, 
    Award, 
    Users, 
    Sliders, 
    Phone, 
    Plus, 
    Trash2, 
    Edit, 
    ExternalLink, 
    LogOut, 
    Search, 
    Filter, 
    X, 
    Save, 
    ChevronRight,
    MapPin,
    Calendar,
    Send,
    Radio,
    Menu,
    Check,
    PhoneCall,
    Sparkles
} from 'lucide-react';

export default function Dashboard({ 
    auth, 
    statusCounts = {}, 
    incidents = [], 
    gallery = [], 
    stories = [], 
    team = [], 
    settings = {},
    filters = {}
}) {
    const [currentTab, setCurrentTab] = useState('incidents'); // 'incidents' | 'gallery' | 'stories' | 'team' | 'settings'
    const [selectedTransitFilter, setSelectedTransitFilter] = useState('all');
    const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Modals state
    const [incidentModalItem, setIncidentModalItem] = useState(null);
    const [galleryModalOpen, setGalleryModalOpen] = useState(false);
    const [editingGallery, setEditingGallery] = useState(null);
    const [storyModalOpen, setStoryModalOpen] = useState(false);
    const [editingStory, setEditingStory] = useState(null);
    const [teamModalOpen, setTeamModalOpen] = useState(false);
    const [editingTeam, setEditingTeam] = useState(null);

    // Form for Updating Incident Status & Notes
    const incidentForm = useForm({
        status: 'reported',
        investigation_notes: '',
    });

    // Form for Gallery
    const galleryForm = useForm({
        title: '',
        caption: '',
        category: 'road',
        location: '',
        event_date: new Date().toISOString().split('T')[0],
        is_featured: false,
        image_url: '',
        image_file: null,
    });

    // Form for Success Story
    const storyForm = useForm({
        title: '',
        category: 'সড়ক সংস্কার',
        transit_mode: 'road',
        impact_stat: '১০০% কার্যকর',
        summary: '',
        body: '',
        location: '',
        story_date: new Date().toISOString().split('T')[0],
        is_published: true,
        image_url: '',
        image_file: null,
    });

    // Form for Team Member
    const teamForm = useForm({
        name: '',
        role: '',
        department: 'Executive Board',
        bio: '',
        email: '',
        linkedin: '',
        is_executive: false,
        avatar_url: '',
        avatar_file: null,
    });

    // Form for Settings / Hero Counters
    const settingsForm = useForm({
        hero_audits: settings.hero_audits || '1420',
        hero_citizens: settings.hero_citizens || '850K+',
        hero_corridors: settings.hero_corridors || '64',
        hero_resolution: settings.hero_resolution || '98.4%',
        hotline_number: settings.hotline_number || '16100',
        volunteer_count: settings.volunteer_count || '3,200+',
    });

    // Handle Incident Update Submit
    const handleIncidentUpdate = (e) => {
        e.preventDefault();
        if (!incidentModalItem) return;
        incidentForm.patch(route('admin.incidents.update', incidentModalItem.id), {
            preserveScroll: true,
            onSuccess: () => {
                setIncidentModalItem(null);
            }
        });
    };

    // Quick Status Update
    const handleQuickStatusChange = (incident, newStatus) => {
        router.patch(route('admin.incidents.update', incident.id), {
            status: newStatus,
            investigation_notes: incident.investigation_notes || '',
        }, { preserveScroll: true });
    };

    // Delete Incident
    const handleDeleteIncident = (id) => {
        if (confirm('আপনি কি নিশ্চিত যে এই রিপোর্টটি মুছে ফেলতে চান?')) {
            router.delete(route('admin.incidents.destroy', id), { preserveScroll: true });
        }
    };

    // Open Gallery Modal for Add or Edit
    const openGalleryModal = (item = null) => {
        if (item) {
            setEditingGallery(item);
            galleryForm.setData({
                title: item.title,
                caption: item.caption || '',
                category: item.category,
                location: item.location || '',
                event_date: item.event_date || '',
                is_featured: !!item.is_featured,
                image_url: item.image_url || '',
                image_file: null,
            });
        } else {
            setEditingGallery(null);
            galleryForm.reset();
        }
        setGalleryModalOpen(true);
    };

    const handleGallerySubmit = (e) => {
        e.preventDefault();
        if (editingGallery) {
            galleryForm.patch(route('admin.gallery.update', editingGallery.id), {
                preserveScroll: true,
                onSuccess: () => setGalleryModalOpen(false),
            });
        } else {
            galleryForm.post(route('admin.gallery.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    galleryForm.reset();
                    setGalleryModalOpen(false);
                },
            });
        }
    };

    const handleDeleteGallery = (id) => {
        if (confirm('এই ছবিটি মুছে ফেলতে চান?')) {
            router.delete(route('admin.gallery.destroy', id), { preserveScroll: true });
        }
    };

    // Open Story Modal for Add or Edit
    const openStoryModal = (item = null) => {
        if (item) {
            setEditingStory(item);
            storyForm.setData({
                title: item.title,
                category: item.category,
                transit_mode: item.transit_mode,
                impact_stat: item.impact_stat || '',
                summary: item.summary,
                body: item.body || item.summary,
                location: item.location || '',
                story_date: item.story_date || '',
                is_published: !!item.is_published,
                image_url: item.image_url || '',
                image_file: null,
            });
        } else {
            setEditingStory(null);
            storyForm.reset();
        }
        setStoryModalOpen(true);
    };

    const handleStorySubmit = (e) => {
        e.preventDefault();
        if (editingStory) {
            storyForm.patch(route('admin.stories.update', editingStory.id), {
                preserveScroll: true,
                onSuccess: () => setStoryModalOpen(false),
            });
        } else {
            storyForm.post(route('admin.stories.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    storyForm.reset();
                    setStoryModalOpen(false);
                },
            });
        }
    };

    const handleDeleteStory = (id) => {
        if (confirm('এই সাফল্যের গল্পটি মুছে ফেলতে চান?')) {
            router.delete(route('admin.stories.destroy', id), { preserveScroll: true });
        }
    };

    // Open Team Modal for Add or Edit
    const openTeamModal = (item = null) => {
        if (item) {
            setEditingTeam(item);
            teamForm.setData({
                name: item.name,
                role: item.role,
                department: item.department,
                bio: item.bio || '',
                email: item.email || '',
                linkedin: item.linkedin || '',
                is_executive: !!item.is_executive,
                avatar_url: item.avatar_url || '',
                avatar_file: null,
            });
        } else {
            setEditingTeam(null);
            teamForm.reset();
        }
        setTeamModalOpen(true);
    };

    const handleTeamSubmit = (e) => {
        e.preventDefault();
        if (editingTeam) {
            teamForm.patch(route('admin.team.update', editingTeam.id), {
                preserveScroll: true,
                onSuccess: () => setTeamModalOpen(false),
            });
        } else {
            teamForm.post(route('admin.team.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    teamForm.reset();
                    setTeamModalOpen(false);
                },
            });
        }
    };

    const handleDeleteTeam = (id) => {
        if (confirm('এই সদস্যকে মুছে ফেলতে চান?')) {
            router.delete(route('admin.team.destroy', id), { preserveScroll: true });
        }
    };

    // Save Settings Submit
    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        settingsForm.post(route('admin.settings.update'), {
            preserveScroll: true,
        });
    };

    // Filter incidents
    const filteredIncidents = incidents.filter(inc => {
        const matchesMode = selectedTransitFilter === 'all' || inc.transit_mode === selectedTransitFilter;
        const matchesStatus = selectedStatusFilter === 'all' || inc.status === selectedStatusFilter;
        return matchesMode && matchesStatus;
    });

    const getModeIcon = (mode) => {
        switch(mode) {
            case 'road': return Car;
            case 'air': return Plane;
            case 'train': return Train;
            case 'water': return Ship;
            default: return AlertTriangle;
        }
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'reported':
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-red-100 text-red-700 border border-red-200">নতুন রিপোর্ট</span>;
            case 'investigating':
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-amber-100 text-amber-800 border border-amber-200">তদন্ত চলছে</span>;
            case 'action_taken':
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-sky-100 text-sky-800 border border-sky-200">পদক্ষেপ গৃহীত</span>;
            case 'resolved':
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">নিষ্পন্ন</span>;
            case 'dismissed':
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-slate-100 text-slate-600 border border-slate-200">বাতিল</span>;
            default:
                return <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-slate-100 text-slate-700">{status}</span>;
        }
    };

    return (
        <div className="min-h-screen bg-slate-100/90 text-slate-800 font-bengali pb-28 md:pb-16 select-none">
            <Head title="অ্যাডমিন কন্ট্রোল সেন্টার - নিরাপদ যাতায়াত" />

            {/* =========================================================
             * TOP EXECUTIVE HEADER: Semi-Transparent + Blur (Mobile First)
             * ========================================================= */}
            <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm px-4 sm:px-8 py-3.5">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Brand Seal & Title */}
                    <div className="flex items-center gap-3 min-w-0">
                        <Link href={route('dashboard')} className="flex items-center gap-3 group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white p-0.5 shadow-md border border-slate-200/80 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                                <img
                                    src="/images/njbp-logo.webp"
                                    alt="Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight truncate">
                                    নিরাপদ যাতায়াত বাস্তবায়ন পরিষদ
                                </span>
                                <span className="text-xs font-bold text-blue-700 flex items-center gap-1.5 truncate">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span>সেন্ট্রাল অ্যাডমিন কন্ট্রোল ডেস্ক</span>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Utilities: View Site, User, Logout */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <Link
                            href={route('home')}
                            target="_blank"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100/80 hover:bg-white rounded-xl border border-slate-200/80 transition-all shadow-sm"
                        >
                            <span>লাইভ সাইট</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>

                        <div className="flex items-center gap-2">
                            <span className="hidden md:inline-block text-xs font-bold text-slate-600 bg-slate-200/60 px-2.5 py-1 rounded-lg">
                                {auth.user.name}
                            </span>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center gap-1.5 shadow-sm"
                                title="লগআউট"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">লগআউট</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* =========================================================
             * DESKTOP & TABLET MODULE NAV TABS
             * ========================================================= */}
            <div className="bg-white/70 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-8 py-2 sticky top-[65px] z-30 hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <nav className="flex items-center gap-2 overflow-x-auto py-1">
                        {[
                            { id: 'incidents', label: 'ঝুঁকি ও দুর্ঘটনা রিপোর্ট', icon: ShieldAlert, badge: statusCounts.reported > 0 ? `${statusCounts.reported} নতুন` : null },
                            { id: 'gallery', label: 'ফটো গ্যালারি নিয়ন্ত্রণ', icon: ImageIcon },
                            { id: 'stories', label: 'সাফল্যের গল্প ও সংস্কার', icon: Award },
                            { id: 'team', label: 'নেতৃত্ব ও পর্ষদ ডিরেক্টরি', icon: Users },
                            { id: 'settings', label: 'লাইভ সংখ্যা ও সাইট সেটিংস', icon: Sliders },
                        ].map((tab) => {
                            const Icon = tab.icon;
                            const isActive = currentTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setCurrentTab(tab.id)}
                                    className={`relative overflow-hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                                        isActive
                                            ? 'bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/25 scale-102'
                                            : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 hover:-translate-y-0.5'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{tab.label}</span>
                                    {tab.badge && (
                                        <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-red-600 text-white animate-pulse">
                                            {tab.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 shrink-0">
                        <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                        <span>সার্ভার স্ট্যাটাস: সার্বক্ষণিক সক্রিয়</span>
                    </div>
                </div>
            </div>

            {/* =========================================================
             * MAIN CONTENT AREA
             * ========================================================= */}
            <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">

                {/* 1. TOP SUMMARY METRICS (Always visible on all screens) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
                    <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-500">মোট রিপোর্ট</span>
                            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                                <ShieldAlert className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                            {statusCounts.total || 0}
                        </div>
                        <span className="text-[11px] text-slate-500 font-semibold">নাগরিকদের পাঠানো</span>
                    </div>

                    <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-rose-700">নতুন অপেক্ষমাণ</span>
                            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                                <AlertTriangle className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-rose-600 tracking-tight">
                            {statusCounts.reported || 0}
                        </div>
                        <span className="text-[11px] text-rose-600 font-bold">তাত্ক্ষণিক পদক্ষেপ চাই</span>
                    </div>

                    <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-sky-700">তদন্তাধীন</span>
                            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
                                <Clock className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-sky-700 tracking-tight">
                            {statusCounts.investigating || 0}
                        </div>
                        <span className="text-[11px] text-sky-600 font-semibold">মাঠপর্যায়ে যাচাই চলছে</span>
                    </div>

                    <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-700">নিষ্পন্ন সমাধান</span>
                            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                            {statusCounts.resolved || 0}
                        </div>
                        <span className="text-[11px] text-emerald-600 font-semibold">পদক্ষেপ বাস্তবায়িত</span>
                    </div>
                </div>

                {/* =========================================================
                 * TAB 1: INCIDENTS MANAGEMENT (Mobile-First Touch Cards)
                 * ========================================================= */}
                {currentTab === 'incidents' && (
                    <div className="space-y-4">
                        {/* Filter Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white/90 shadow-sm">
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                                    <Filter className="w-3.5 h-3.5" />
                                    <span>খাত:</span>
                                </span>
                                {[
                                    { id: 'all', label: 'সকল' },
                                    { id: 'road', label: 'সড়ক' },
                                    { id: 'air', label: 'আকাশ' },
                                    { id: 'train', label: 'রেলপথ' },
                                    { id: 'water', label: 'নৌপথ' },
                                ].map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => setSelectedTransitFilter(filter.id)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                            selectedTransitFilter === filter.id
                                                ? 'bg-blue-700 text-white shadow-sm'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-2">
                                <select
                                    value={selectedStatusFilter}
                                    onChange={(e) => setSelectedStatusFilter(e.target.value)}
                                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
                                >
                                    <option value="all">সকল স্ট্যাটাস</option>
                                    <option value="reported">নতুন রিপোর্ট</option>
                                    <option value="investigating">তদন্ত চলছে</option>
                                    <option value="action_taken">পদক্ষেপ গৃহীত</option>
                                    <option value="resolved">নিষ্পন্ন</option>
                                </select>
                            </div>
                        </div>

                        {/* List of Incidents: 100% Mobile Touch-Friendly Cards */}
                        <div className="space-y-3">
                            {filteredIncidents.length === 0 ? (
                                <div className="bg-white/80 rounded-2xl p-8 text-center text-slate-500 font-medium">
                                    কোনো রিপোর্ট পাওয়া যায়নি।
                                </div>
                            ) : (
                                filteredIncidents.map((inc) => {
                                    const ModeIcon = getModeIcon(inc.transit_mode);
                                    return (
                                        <div
                                            key={inc.id}
                                            className="relative overflow-hidden bg-white/85 hover:bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/90 shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all hover:shadow-md group"
                                        >
                                            {/* Top Bar inside Card */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-900 border border-slate-200">
                                                        {inc.tracking_number}
                                                    </span>
                                                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
                                                        <ModeIcon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-xs font-bold uppercase text-slate-500">
                                                        {inc.transit_mode}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {getStatusBadge(inc.status)}
                                                    {inc.urgency === 'critical' && (
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-red-600 text-white animate-pulse">
                                                            জরুরি
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Body info */}
                                            <div className="py-3 space-y-2">
                                                <h3 className="font-black text-base sm:text-lg text-slate-900 leading-snug">
                                                    {inc.title}
                                                </h3>
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                                                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                                                    <span>{inc.location}</span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                                    {inc.description}
                                                </p>

                                                {/* Official investigation notes if any */}
                                                {inc.investigation_notes && (
                                                    <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-100 text-xs text-sky-900 font-medium">
                                                        <span className="font-bold block text-sky-800 mb-0.5">সরকারি/তদন্ত পদক্ষেপ নোট:</span>
                                                        {inc.investigation_notes}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Reporter Contact & Quick 1-Tap Mobile Actions */}
                                            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold">
                                                    <span>রিপোর্টার: {inc.reporter_name || 'বেনামী'}</span>
                                                    {inc.reporter_phone && (
                                                        <a
                                                            href={`tel:${inc.reporter_phone}`}
                                                            className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md hover:bg-emerald-100 font-bold"
                                                        >
                                                            <PhoneCall className="w-3 h-3" />
                                                            <span>{inc.reporter_phone}</span>
                                                        </a>
                                                    )}
                                                </div>

                                                {/* Mobile 1-Tap Status Switch Buttons */}
                                                <div className="flex flex-wrap items-center gap-1.5">
                                                    <button
                                                        onClick={() => {
                                                            setIncidentModalItem(inc);
                                                            incidentForm.setData({
                                                                status: inc.status,
                                                                investigation_notes: inc.investigation_notes || '',
                                                            });
                                                        }}
                                                        className="px-3 py-1.5 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-all shadow-sm"
                                                    >
                                                        তদন্ত নোট লিখুন
                                                    </button>

                                                    {inc.status !== 'resolved' && (
                                                        <button
                                                            onClick={() => handleQuickStatusChange(inc, 'resolved')}
                                                            className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-sm"
                                                        >
                                                            নিষ্পত্তি করুন
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={() => handleDeleteIncident(inc.id)}
                                                        className="p-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition-colors"
                                                        title="মুছে ফেলুন"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                )}

                {/* =========================================================
                 * TAB 2: GALLERY ITEMS MANAGEMENT
                 * ========================================================= */}
                {currentTab === 'gallery' && (
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                    ফটো গ্যালারি ব্যবস্থাপনা
                                </h2>
                                <p className="text-xs text-slate-500 font-medium">
                                    মোট ছবি: {gallery.length}টি
                                </p>
                            </div>
                            <button
                                onClick={() => openGalleryModal()}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white text-xs sm:text-sm font-black shadow-md shadow-sky-600/20 active:scale-95 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>নতুন ছবি যুক্ত করুন</span>
                            </button>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {gallery.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative overflow-hidden bg-white/85 backdrop-blur-xl rounded-2xl border border-white/90 p-3 sm:p-4 shadow-sm flex flex-col justify-between group"
                                >
                                    <div className="space-y-3">
                                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                                            <img
                                                src={item.image_url}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                                                {item.category}
                                            </span>
                                            {item.is_featured && (
                                                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-black bg-amber-500 text-white shadow-sm">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-base text-slate-900 line-clamp-1">
                                                {item.title}
                                            </h4>
                                            {item.location && (
                                                <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                                                    <MapPin className="w-3 h-3 text-rose-500" />
                                                    <span>{item.location}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[11px] text-slate-400 font-medium">
                                            {item.event_date}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => openGalleryModal(item)}
                                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-colors"
                                                title="সম্পাদনা"
                                            >
                                                <Edit className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteGallery(item.id)}
                                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-colors"
                                                title="মুছে ফেলুন"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* =========================================================
                 * TAB 3: SUCCESS STORIES MANAGEMENT
                 * ========================================================= */}
                {currentTab === 'stories' && (
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                    সাফল্যের গল্প ও সংস্কার ব্যবস্থাপনা
                                </h2>
                                <p className="text-xs text-slate-500 font-medium">
                                    মোট গল্প: {stories.length}টি
                                </p>
                            </div>
                            <button
                                onClick={() => openStoryModal()}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white text-xs sm:text-sm font-black shadow-md shadow-sky-600/20 active:scale-95 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>নতুন গল্প প্রকাশ করুন</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {stories.map((story) => (
                                <div
                                    key={story.id}
                                    className="relative overflow-hidden bg-white/85 backdrop-blur-xl rounded-2xl border border-white/90 p-4 shadow-sm flex flex-col justify-between group"
                                >
                                    <div className="space-y-3">
                                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                                            <img
                                                src={story.image_url}
                                                alt={story.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {story.impact_stat && (
                                                <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                                                    {story.impact_stat}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                                                {story.category}
                                            </span>
                                            <h4 className="font-black text-base text-slate-900 line-clamp-2 mt-1">
                                                {story.title}
                                            </h4>
                                            <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-medium">
                                                {story.summary}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[11px] text-slate-500 font-semibold">
                                            {story.story_date}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => openStoryModal(story)}
                                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-colors"
                                            >
                                                <Edit className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteStory(story.id)}
                                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-colors"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* =========================================================
                 * TAB 4: TEAM & LEADERSHIP MANAGEMENT
                 * ========================================================= */}
                {currentTab === 'team' && (
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                                    নেতৃত্ব ও পর্ষদ ব্যবস্থাপনা
                                </h2>
                                <p className="text-xs text-slate-500 font-medium">
                                    মোট কর্মকর্তা/উপদেষ্টা: {team.length}জন
                                </p>
                            </div>
                            <button
                                onClick={() => openTeamModal()}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white text-xs sm:text-sm font-black shadow-md shadow-sky-600/20 active:scale-95 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>নতুন সদস্য যোগ করুন</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {team.map((member) => (
                                <div
                                    key={member.id}
                                    className="relative overflow-hidden bg-white/85 backdrop-blur-xl rounded-2xl border border-white/90 p-4 shadow-sm flex flex-col justify-between group"
                                >
                                    <div className="space-y-3">
                                        <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                                            <img
                                                src={member.avatar_url}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {member.is_executive && (
                                                <span className="absolute top-2 right-2 bg-blue-700 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow">
                                                    Executive
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase text-blue-700 block">
                                                {member.department}
                                            </span>
                                            <h4 className="font-black text-base text-slate-900 line-clamp-1">
                                                {member.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 font-bold">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[11px] text-slate-500 truncate max-w-[120px]">
                                            {member.email || '—'}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => openTeamModal(member)}
                                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-colors"
                                            >
                                                <Edit className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTeam(member.id)}
                                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white transition-colors"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* =========================================================
                 * TAB 5: SITE SETTINGS & LIVE COUNTERS (Mobile First Forms)
                 * ========================================================= */}
                {currentTab === 'settings' && (
                    <div className="relative overflow-hidden bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm max-w-3xl mx-auto space-y-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                লাইভ সংখ্যা ও সাইট সেটিংস নিয়ন্ত্রণ
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                এখান থেকে যেকোনো সংখ্যা পরিবর্তন করলে সাথে সাথে মূল ওয়েবসাইটের হিরো এরিয়া ও ফুটার স্বয়ংক্রিয়ভাবে আপডেট হয়ে যাবে।
                            </p>
                        </div>

                        <form onSubmit={handleSettingsSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        নিরাপত্তা অডিট সংখ্যা (Hero Stat 1)
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.hero_audits}
                                        onChange={(e) => settingsForm.setData('hero_audits', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        সচেতন নাগরিক সংখ্যা (Hero Stat 2)
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.hero_citizens}
                                        onChange={(e) => settingsForm.setData('hero_citizens', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        নজরদারিকৃত করিডোর (Hero Stat 3)
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.hero_corridors}
                                        onChange={(e) => settingsForm.setData('hero_corridors', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        প্রতিকারের হার (Hero Stat 4)
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.hero_resolution}
                                        onChange={(e) => settingsForm.setData('hero_resolution', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        জরুরি হেল্পলাইন নম্বর
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.hotline_number}
                                        onChange={(e) => settingsForm.setData('hotline_number', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        স্বেচ্ছাসেবী ব্রিগেড সংখ্যা
                                    </label>
                                    <input
                                        type="text"
                                        value={settingsForm.data.volunteer_count}
                                        onChange={(e) => settingsForm.setData('volunteer_count', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={settingsForm.processing}
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 hover:from-blue-600 hover:to-sky-500 text-white font-black text-sm shadow-xl shadow-sky-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                                >
                                    <Save className="w-4 h-4" />
                                    <span>{settingsForm.processing ? 'সংরক্ষণ হচ্ছে...' : 'সেটিংস সেভ করুন'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>

            {/* =========================================================
             * 100% MOBILE THUMB NAVIGATION BOTTOM BAR (Fixed for Phone users)
             * ========================================================= */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-2 py-2">
                <div className="grid grid-cols-5 gap-1 text-center">
                    {[
                        { id: 'incidents', label: 'রিপোর্ট', icon: ShieldAlert, badge: statusCounts.reported > 0 ? statusCounts.reported : null },
                        { id: 'gallery', label: 'গ্যালারি', icon: ImageIcon },
                        { id: 'stories', label: 'সাফল্য', icon: Award },
                        { id: 'team', label: 'টিম', icon: Users },
                        { id: 'settings', label: 'সেটিংস', icon: Sliders },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        const isActive = currentTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setCurrentTab(tab.id)}
                                className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                                    isActive
                                        ? 'text-blue-700 font-black'
                                        : 'text-slate-500 font-bold hover:text-slate-800'
                                }`}
                            >
                                <div className={`p-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-700' : ''}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
                                {tab.badge && (
                                    <span className="absolute top-1 right-2 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-black flex items-center justify-center animate-pulse">
                                        {tab.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* =========================================================
             * MODAL 1: INCIDENT INVESTIGATION NOTES & STATUS MODAL
             * ========================================================= */}
            {incidentModalItem && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-4 animate-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div>
                                <h3 className="font-black text-lg text-slate-900">
                                    রিপোর্ট তদন্ত নোট ও অগ্রগতি
                                </h3>
                                <p className="text-xs text-slate-500 font-mono">
                                    আইডি: {incidentModalItem.tracking_number}
                                </p>
                            </div>
                            <button
                                onClick={() => setIncidentModalItem(null)}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleIncidentUpdate} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    বর্তমান তদন্ত স্ট্যাটাস
                                </label>
                                <select
                                    value={incidentForm.data.status}
                                    onChange={(e) => incidentForm.setData('status', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-900"
                                >
                                    <option value="reported">নতুন রিপোর্ট (Reported)</option>
                                    <option value="investigating">তদন্তাধীন (Investigating)</option>
                                    <option value="action_taken">পদক্ষেপ গৃহীত (Action Taken)</option>
                                    <option value="resolved">নিষ্পন্ন সমাধান (Resolved)</option>
                                    <option value="dismissed">বাতিল (Dismissed)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    সরকারি/প্রাতিষ্ঠানিক পদক্ষেপের নোট (নাগরিকরা ট্র্যাকিংয়ে দেখতে পাবেন)
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="কী ব্যবস্থা গ্রহণ করা হয়েছে বা তদন্তের ফলাফল কী তা লিখুন..."
                                    value={incidentForm.data.investigation_notes}
                                    onChange={(e) => incidentForm.setData('investigation_notes', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-900 focus:bg-white"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIncidentModalItem(null)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    disabled={incidentForm.processing}
                                    className="px-5 py-2 rounded-xl text-xs font-black text-white bg-blue-700 hover:bg-blue-800 shadow-sm"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* =========================================================
             * MODAL 2: ADD / EDIT GALLERY ITEM
             * ========================================================= */}
            {galleryModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <h3 className="font-black text-lg text-slate-900">
                                {editingGallery ? 'ছবি সম্পাদনা' : 'নতুন ছবি আপলোড'}
                            </h3>
                            <button
                                onClick={() => setGalleryModalOpen(false)}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleGallerySubmit} className="space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    ছবির শিরোনাম *
                                </label>
                                <input
                                    type="text"
                                    placeholder="উদা: ঢাকা-মাওয়া হাইওয়ে স্পিড রাডার মনিটরিং"
                                    value={galleryForm.data.title}
                                    onChange={(e) => galleryForm.setData('title', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        ক্যাটাগরি *
                                    </label>
                                    <select
                                        value={galleryForm.data.category}
                                        onChange={(e) => galleryForm.setData('category', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold"
                                    >
                                        <option value="road">সড়ক নিরাপত্তা (Road)</option>
                                        <option value="air">বিমান চলাচল (Air)</option>
                                        <option value="train">রেলপথ (Train)</option>
                                        <option value="water">নৌ ও নদীপথ (Water)</option>
                                        <option value="awareness">জনসচেতনতা (Awareness)</option>
                                        <option value="international">আন্তর্জাতিক (International)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        স্থান / জেলা
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="উদা: পদ্মা সেতু টোল প্লাজা"
                                        value={galleryForm.data.location}
                                        onChange={(e) => galleryForm.setData('location', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    ইমেজ লিংক (Image URL) অথবা ফাইল আপলোড
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://... অথবা নিচের থেকে ফাইল আপলোড করুন"
                                    value={galleryForm.data.image_url}
                                    onChange={(e) => galleryForm.setData('image_url', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono mb-2"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => galleryForm.setData('image_file', e.target.files[0])}
                                    className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    ক্যাপশন / বিবরণ
                                </label>
                                <textarea
                                    rows="2"
                                    placeholder="ছবির সংক্ষিপ্ত বিবরণ..."
                                    value={galleryForm.data.caption}
                                    onChange={(e) => galleryForm.setData('caption', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium"
                                />
                            </div>

                            <div className="flex items-center gap-2 pt-1">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={galleryForm.data.is_featured}
                                    onChange={(e) => galleryForm.setData('is_featured', e.target.checked)}
                                    className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="is_featured" className="text-xs font-bold text-slate-700">
                                    হোমপেজ স্লাইডারে ফিচার্ড হিসেবে দেখান
                                </label>
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setGalleryModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    disabled={galleryForm.processing}
                                    className="px-5 py-2 rounded-xl text-xs font-black text-white bg-blue-700 hover:bg-blue-800 shadow-sm"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* =========================================================
             * MODAL 3: ADD / EDIT SUCCESS STORY
             * ========================================================= */}
            {storyModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <h3 className="font-black text-lg text-slate-900">
                                {editingStory ? 'সাফল্যের গল্প সম্পাদনা' : 'নতুন সাফল্যের গল্প'}
                            </h3>
                            <button
                                onClick={() => setStoryModalOpen(false)}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleStorySubmit} className="space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    শিরোনাম *
                                </label>
                                <input
                                    type="text"
                                    placeholder="উদা: ঢাকা-চট্টগ্রাম মহাসড়কের ১৪টি ব্ল্যাকস্পট প্রতিকার"
                                    value={storyForm.data.title}
                                    onChange={(e) => storyForm.setData('title', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        ট্রানজিট মোড *
                                    </label>
                                    <select
                                        value={storyForm.data.transit_mode}
                                        onChange={(e) => storyForm.setData('transit_mode', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold"
                                    >
                                        <option value="road">সড়ক (Road)</option>
                                        <option value="air">বিমান (Air)</option>
                                        <option value="train">রেলপথ (Train)</option>
                                        <option value="water">নৌপথ (Water)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        ইমপ্যাক্ট পরিসংখ্যান ব্যাজ
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="উদা: ৭২% দুর্ঘটনা হ্রাস"
                                        value={storyForm.data.impact_stat}
                                        onChange={(e) => storyForm.setData('impact_stat', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-emerald-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    সংক্ষিপ্ত সারসংক্ষেপ (Summary) *
                                </label>
                                <textarea
                                    rows="2"
                                    placeholder="কী উদ্যোগ নেওয়া হয়েছিল এবং ফলাফল কী..."
                                    value={storyForm.data.summary}
                                    onChange={(e) => storyForm.setData('summary', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    ফিচার্ড ইমেজ লিংক বা আপলোড
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://images.unsplash.com/..."
                                    value={storyForm.data.image_url}
                                    onChange={(e) => storyForm.setData('image_url', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono mb-2"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => storyForm.setData('image_file', e.target.files[0])}
                                    className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setStoryModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    disabled={storyForm.processing}
                                    className="px-5 py-2 rounded-xl text-xs font-black text-white bg-blue-700 hover:bg-blue-800 shadow-sm"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* =========================================================
             * MODAL 4: ADD / EDIT TEAM MEMBER
             * ========================================================= */}
            {teamModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <h3 className="font-black text-lg text-slate-900">
                                {editingTeam ? 'সদস্য তথ্য সম্পাদনা' : 'নতুন সদস্য যোগ'}
                            </h3>
                            <button
                                onClick={() => setTeamModalOpen(false)}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleTeamSubmit} className="space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    নাম *
                                </label>
                                <input
                                    type="text"
                                    placeholder="উদা: ড. মশিউর রহমান"
                                    value={teamForm.data.name}
                                    onChange={(e) => teamForm.setData('name', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        পদবি *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="উদা: প্রধান উপদেষ্টা / ফেলো"
                                        value={teamForm.data.role}
                                        onChange={(e) => teamForm.setData('role', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        বিভাগ *
                                    </label>
                                    <select
                                        value={teamForm.data.department}
                                        onChange={(e) => teamForm.setData('department', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold"
                                    >
                                        <option value="Executive Board">Executive Board (কার্যনির্বাহী পর্ষদ)</option>
                                        <option value="Road Safety Division">Road Safety Division (সড়ক)</option>
                                        <option value="Aviation Division">Aviation Division (বিমান)</option>
                                        <option value="Railway Division">Railway Division (রেলপথ)</option>
                                        <option value="Maritime Division">Maritime Division (নৌপথ)</option>
                                        <option value="Public Awareness & Legal">Public Awareness & Legal (আইন ও সচেতনতা)</option>
                                        <option value="Global Advisory">Global Advisory (আন্তর্জাতিক উপদেষ্টা)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    প্রোফাইল ছবি (Avatar) লিংক বা আপলোড
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://... অথবা নিচের থেকে ছবি সিলেক্ট করুন"
                                    value={teamForm.data.avatar_url}
                                    onChange={(e) => teamForm.setData('avatar_url', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono mb-2"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => teamForm.setData('avatar_file', e.target.files[0])}
                                    className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-700"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        ইমেইল
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="officer@nirapodjatayat.org"
                                        value={teamForm.data.email}
                                        onChange={(e) => teamForm.setData('email', e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
                                    />
                                </div>
                                <div className="flex items-center gap-2 pt-6">
                                    <input
                                        type="checkbox"
                                        id="is_executive"
                                        checked={teamForm.data.is_executive}
                                        onChange={(e) => teamForm.setData('is_executive', e.target.checked)}
                                        className="rounded text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="is_executive" className="text-xs font-bold text-slate-700">
                                        কার্যনির্বাহী পর্ষদ (Executive)
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setTeamModalOpen(false)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    disabled={teamForm.processing}
                                    className="px-5 py-2 rounded-xl text-xs font-black text-white bg-blue-700 hover:bg-blue-800 shadow-sm"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
