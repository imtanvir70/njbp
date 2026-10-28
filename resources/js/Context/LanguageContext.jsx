import React, { createContext, useContext, useState, useEffect } from 'react';

// Comprehensive translations dictionary for Nirapod Jatayat
export const translations = {
    en: {
        // Brand & Header
        orgName: 'Nirapod Jatayat',
        intlBadge: 'INTL',
        tagline: 'Multimodal Safety & Vigilance Council',
        topNotice: 'Global Transit Vigilance: Active 24/7',
        topFramework: 'Aligned with UN Decade of Action for Road Safety 2021–2030',
        hotlineLabel: 'Transit Hotline: 16100 / 999',
        geoDetected: 'Location detected: International (English)',
        
        // Navigation
        navHome: 'Home',
        navMonitoring: '4 Transit Sectors',
        navGallery: 'Photo Gallery',
        navStories: 'Success Stories',
        navTeam: 'Leadership & Board',
        navAwareness: 'Safety Guidelines',
        btnReportHazard: 'Report Hazard',
        btnJoinMovement: 'Join Movement',
        
        // Hero
        heroBadge: 'International Safe Transit Network • Independent NGO Oversight',
        heroTitlePrefix: 'Safeguarding Every Journey Across',
        heroTitleHighlight: 'Road, Sky, Rail & Water',
        heroDescription: 'Nirapod Jatayat monitors transit integrity, investigates hazardous blackspots, mobilizes public consciousness, and holds operators accountable to international safety standards.',
        heroBtnReport: 'Report a Transit Hazard (24/7)',
        heroBtnExplore: 'Explore 4 Transit Sectors',
        
        // Stats
        statAudits: 'Field Safety Audits',
        statAuditsDesc: 'Blackspots & Corridors Surveyed',
        statCitizens: 'Citizens Reached',
        statCitizensDesc: 'Awareness Drives & Workshops',
        statCorridors: 'Surveillance Corridors',
        statCorridorsDesc: 'Road, Rail, Air & Waterways',
        statResolution: 'Resolution Rate',
        statResolutionDesc: 'Official Escalations Rectified',
        
        // Sectors (Quadrants)
        quadrantsBadge: 'Continuous Transit Surveillance',
        quadrantsTitle: 'Monitoring 4 Critical Transit Dimensions',
        quadrantsSubtitle: 'Nirapod Jatayat maintains real-time monitoring, technical inspection audits, and public vigilance across Road, Air, Rail, and Water transport systems.',
        sectorRoad: 'Road Transit',
        sectorAir: 'Aviation Transit',
        sectorTrain: 'Railway Transit',
        sectorWater: 'Water Transit',
        complianceRating: 'Safety Compliance Rating',
        liveAudits: 'Active In-field Audits',
        actionAudit: 'Audit This Sector or Report Issue',
        standardsHeading: 'Institutional Enforcements & Norms:',
        
        // Gallery
        galleryBadge: 'Visual Evidence & Field Operations',
        galleryTitle: 'Transit Vigilance in Action',
        gallerySubtitle: 'Explore high-resolution field photographs documenting our real-time road radars, aerodrome inspections, river launch load-line checks, and nationwide youth safety rallies.',
        filterAll: 'All Photos',
        filterRoad: 'Road Safety',
        filterAir: 'Aviation Audit',
        filterTrain: 'Railway & Crossings',
        filterWater: 'Maritime & Riverine',
        filterAwareness: 'Civic Campaigns',
        filterInternational: 'Global Summits',
        
        // Success Stories
        storiesBadge: 'Tangible Impact Chronicles',
        storiesTitle: 'Documented Success Stories & Reforms',
        storiesSubtitle: 'Real-world interventions where Nirapod Jatayat\'s technical investigations, civic mobilization, and policy advocacy saved lives and transformed transit safety standards.',
        viewAllStories: 'View All Impact Case Studies',
        readStory: 'Read Full Story',
        closeReader: 'Close Reader',
        
        // Team
        teamBadge: 'Leadership & Technical Governance',
        teamTitle: 'Meet Our Officers & Advisory Council',
        teamSubtitle: 'Our team unites certified transport engineers, master mariners, airline captains, accident reconstructionists, and human rights advocates dedicated to safe mobility.',
        viewFullDirectory: 'Full Board Directory',
        verifiedFellow: 'Verified Fellow',
        
        // Awareness
        awarenessBadge: 'Public Education & Awareness Center',
        awarenessTitle: 'Empowering Citizens with Safety Knowledge',
        awarenessSubtitle: 'Systemic safety begins with an informed and vigilant public. Explore essential safety guidelines, legal rights, and precautionary protocols for every mode of transit.',
        volunteerTitle: 'Become a Nirapod Jatayat Safety Ambassador',
        volunteerDesc: 'Join university students, professional drivers, community leaders, and civic activists. Report unsafe transit conditions in your neighborhood, organize safety rallies, and protect fellow travelers.',
        volunteerBtn: 'Register as Volunteer',
        volunteerSecondary: 'Read How Volunteers Made History',
        
        // Incident Modal
        modalTitle: 'Public Transit Safety Vigilance',
        modalSubtitle: 'Report hazards or track the investigation status of your previous submission.',
        tabSubmit: 'Submit New Hazard / Incident',
        tabTrack: 'Track Existing Case Status',
        labelSelectSector: 'Select Transit Sector *',
        labelUrgency: 'Urgency Severity *',
        labelTitle: 'Hazard / Issue Title *',
        labelLocation: 'Exact Location / Landmark *',
        labelDescription: 'Detailed Observation & Risks *',
        labelReporter: 'Reporter Details (Optional — Can submit anonymously for safety):',
        btnSubmitIncident: 'Dispatch Hazard Alert to Nirapod Jatayat',
        btnSubmitting: 'Transmitting to Vigilance Unit...',
        trackInputLabel: 'Enter Incident Tracking ID:',
        btnCheckStatus: 'Check Status',
        demoCodes: 'Quick Test Demo Tracking IDs:',
        
        // Affiliations
        affiliationsBadge: 'International Standing & Benchmarks',
        affiliationsTitle: 'Global Frameworks & International Alignment',
        affiliationsSubtitle: 'Nirapod Jatayat operates under recognized multilateral transport safety standards and research paradigms.',
        
        // Footer
        footerAbout: 'Nirapod Jatayat is an international civic and transport safety organization dedicated to systematic monitoring, safety compliance, and nationwide awareness across Road, Aviation, Railway, and Maritime transportation corridors.',
        footerEmergency: '24/7 Global Vigilance',
        footerHelpline: 'Rapid Response Helpline',
        footerCopyright: 'Nirapod Jatayat (Safe Transit International). All rights reserved. Registered Non-Profit NGO.',
    },
    bn: {
        // Brand & Header
        orgName: 'নিরাপদ যাতায়াত',
        intlBadge: 'আন্তর্জাতিক',
        tagline: 'মাল্টিমোডাল পরিবহন নিরাপত্তা ও নাগরিক সচেতনতা পরিষদ',
        topNotice: 'সার্বক্ষণিক যাতায়াত নজরদারি: ২৪/৭ সক্রিয়',
        topFramework: 'জাতিসংঘ সড়ক নিরাপত্তা দশক ২০২১–২০৩০ নীতিমালা অনুসৃত',
        hotlineLabel: 'জরুরি ট্রানজিট হটলাইন: ১৬১০০ / ৯৯৯',
        geoDetected: 'বাংলাদেশ থেকে সংযুক্ত (স্বয়ংক্রিয় বাংলা মোড)',
        
        // Navigation
        navHome: 'মূল পাতা',
        navMonitoring: '৪টি যাতায়াত খাত',
        navGallery: 'ফটো গ্যালারি',
        navStories: 'সাফল্যের গল্প',
        navTeam: 'নেতৃত্ব ও গভর্নিং বোর্ড',
        navAwareness: 'নিরাপত্তা নীতিমালা',
        btnReportHazard: 'ঝুঁকি রিপোর্ট করুন',
        btnJoinMovement: 'যুক্ত হোন',
        
        // Hero
        heroBadge: 'আন্তর্জাতিক নিরাপদ যাতায়াত নেটওয়ার্ক • স্বাধীন নাগরিক পর্যবেক্ষণ',
        heroTitlePrefix: 'নিরাপদ হোক প্রতিটি যাত্রা —',
        heroTitleHighlight: 'সড়ক, আকাশ, রেল ও নৌপথে',
        heroDescription: 'নিরাপদ যাতায়াত সড়ক, বিমান, ট্রেন ও নৌপথের নিরাপত্তা পর্যবেক্ষণ করে, ঝুঁকিপূর্ণ ব্ল্যাকস্পট শনাক্ত করে, গণসচেতনতা তৈরি করে এবং পরিবহন খাতে আন্তর্জাতিক সুরক্ষা মান বাস্তবায়নে কাজ করে।',
        heroBtnReport: 'যাতায়াত ঝুঁকি রিপোর্ট করুন (২৪/৭)',
        heroBtnExplore: '৪টি ট্রানজিট ডিভিশন দেখুন',
        
        // Stats
        statAudits: 'মাঠপর্যায়ে নিরাপত্তা অডিট',
        statAuditsDesc: 'ব্ল্যাকস্পট ও করিডোর পরিদর্শন',
        statCitizens: 'নাগরিক সচেতনতা',
        statCitizensDesc: 'সচেতনতা ক্যাম্পেইন ও কর্মশালা',
        statCorridors: 'নজরদারিকৃত করিডোর',
        statCorridorsDesc: 'সড়ক, রেল, আকাশ ও নৌপথ',
        statResolution: 'সমাধানের হার',
        statResolutionDesc: 'আইনি ও অবকাঠামোগত প্রতিকার',
        
        // Sectors (Quadrants)
        quadrantsBadge: 'সার্বক্ষণিক ট্রানজিট মনিটরিং',
        quadrantsTitle: '৪টি প্রধান যাতায়াত খাতের সার্বিক নজরদারি',
        quadrantsSubtitle: 'সড়ক, বিমান, ট্রেন এবং নৌপথে যেকোনো অনিয়ম, বিপজ্জনক ত্রুটি ও দুর্ঘটনা প্রতিরোধে আমাদের গবেষক ও অডিটররা নিরবচ্ছিন্ন কাজ করছেন।',
        sectorRoad: 'সড়ক পরিবহন',
        sectorAir: 'বিমান পরিবহন',
        sectorTrain: 'রেলওয়ে পরিবহন',
        sectorWater: 'নৌ পরিবহন',
        complianceRating: 'নিরাপত্তা পরিপালন সূচক',
        liveAudits: 'চলমান ফিল্ড অডিট',
        actionAudit: 'এই খাতের অডিট জানুন বা অভিযোগ দিন',
        standardsHeading: 'প্রাতিষ্ঠানিক নিরাপত্তা মানদণ্ড ও বিধিমালা:',
        
        // Gallery
        galleryBadge: 'মাঠপর্যায়ের প্রমাণ ও কার্যক্রমের আলোকচিত্র',
        galleryTitle: 'যাতায়াত সুরক্ষায় আমাদের পদচিহ্ন',
        gallerySubtitle: 'এক্সপ্রেসওয়েতে স্পিড রাডার নজরদারি, বিমানবন্দর রানওয়ে পরিদর্শন, নদীপথে লঞ্চের ড্রাফট লাইন চেক এবং দেশব্যাপী শিক্ষার্থীদের রোড সেফটি র‍্যালির সরাসরি স্থিরচিত্র।',
        filterAll: 'সব ছবি',
        filterRoad: 'সড়ক নিরাপত্তা',
        filterAir: 'বিমান অডিট',
        filterTrain: 'রেল ও ক্রসিং',
        filterWater: 'নৌপথ ও লঞ্চ',
        filterAwareness: 'গণসচেতনতা',
        filterInternational: 'বৈশ্বিক সম্মেলন',
        
        // Success Stories
        storiesBadge: 'বাস্তব পরিবর্তনের দলিল',
        storiesTitle: 'সাফল্যের গল্প ও যুগান্তকারী সংস্কার',
        storiesSubtitle: 'নিরাপদ যাতায়াতের কারিগরি পর্যবেক্ষণ, আইনি লড়াই এবং জনসম্পৃক্ততার মাধ্যমে কীভাবে বহু মানুষের প্রাণ রক্ষা পেয়েছে এবং জাতীয় নীতিতে পরিবর্তন এসেছে।',
        viewAllStories: 'সবগুলো সাফল্যের গল্প দেখুন',
        readStory: 'বিস্তারিত পড়ুন',
        closeReader: 'বন্ধ করুন',
        
        // Team
        teamBadge: 'নেতৃত্ব ও কারিগরি গভর্ন্যান্স',
        teamTitle: 'আমাদের কার্যনির্বাহী পর্ষদ ও উপদেষ্টা পরিষদ',
        teamSubtitle: 'আন্তর্জাতিক সনদপ্রাপ্ত পরিবহন প্রকৌশলী, এয়ারলাইন পাইলট, রেলওয়ে বিশেষজ্ঞ, নৌ-ক্যাপ্টেন এবং মানবাধিকার আইনজীবীদের সমন্বয়ে গঠিত আমাদের টিম।',
        viewFullDirectory: 'পূর্ণাঙ্গ টিম ডিরেক্টরি',
        verifiedFellow: 'যাচাইকৃত ফেলো',
        
        // Awareness
        awarenessBadge: 'জনশিক্ষা ও নাগরিক সচেতনতা কেন্দ্র',
        awarenessTitle: 'নিরাপত্তা জ্ঞানের মাধ্যমে প্রতিটি নাগরিকের ক্ষমতায়ন',
        awarenessSubtitle: 'সচেতন যাত্রীই দুর্ঘটনা রোধের সবচেয়ে বড় চালিকাশক্তি। সড়ক, আকাশ, ট্রেন ও নৌপথে চলাচলের জন্য জরুরি বিধিনিষেধ ও আইনি অধিকার জেনে নিন।',
        volunteerTitle: 'নিরাপদ যাতায়াত সেফটি অ্যাম্বাসেডর হোন',
        volunteerDesc: 'বিশ্ববিদ্যালয়ের শিক্ষার্থী, চালক, শিক্ষক ও সমাজের সচেতন মানুষদের সাথে হাত মেলান। আপনার এলাকার অনিরাপদ যাতায়াত পরিস্থিতি তুলে ধরুন এবং সহযাত্রীদের নিরাপত্তা নিশ্চিত করুন।',
        volunteerBtn: 'স্বেচ্ছাসেবী হিসেবে নিবন্ধন করুন',
        volunteerSecondary: 'স্বেচ্ছাসেবীদের সাফল্যের ইতিহাস জানুন',
        
        // Incident Modal
        modalTitle: 'গণপরিবহন নিরাপত্তা নজরদারি',
        modalSubtitle: 'যেকোনো বিপদের ঝুঁকি রিপোর্ট করুন অথবা আপনার পূর্বের রিপোর্টের তদন্ত অগ্রগতি যাচাই করুন।',
        tabSubmit: 'নতুন ঝুঁকি / অনিয়ম রিপোর্ট করুন',
        tabTrack: 'রিপোর্টের তদন্ত অবস্থা জানুন',
        labelSelectSector: 'যাতায়াতের মাধ্যম নির্বাচন করুন *',
        labelUrgency: 'ঝুঁকির মাত্রা *',
        labelTitle: 'ঝুঁকি বা ঘটনার শিরোনাম *',
        labelLocation: 'সঠিক স্থান বা ল্যান্ডমার্ক *',
        labelDescription: 'বিস্তারিত পর্যবেক্ষণ ও ঝুঁকির বিবরণ *',
        labelReporter: 'রিপোর্টারের তথ্য (ঐচ্ছিক — চাইলে সম্পূর্ণ বেনামেও পাঠাতে পারেন):',
        btnSubmitIncident: 'নিরাপদ যাতায়াত সেন্টারে রিপোর্ট পাঠান',
        btnSubmitting: 'বার্তা প্রেরণ করা হচ্ছে...',
        trackInputLabel: 'ট্র্যাকিং আইডি লিখুন:',
        btnCheckStatus: 'যাচাই করুন',
        demoCodes: 'ডেমো ট্র্যাকিং নম্বর:',
        
        // Affiliations
        affiliationsBadge: 'আন্তর্জাতিক স্বীকৃতি ও স্ট্যান্ডার্ড',
        affiliationsTitle: 'জাতিসংঘ ও বৈশ্বিক কাঠামোর সাথে সংগতিপূর্ণ',
        affiliationsSubtitle: 'নিরাপদ যাতায়াত আন্তর্জাতিক স্বীকৃত পরিবহন সুরক্ষা নীতি এবং গবেষণা মানদণ্ড কঠোরভাবে মেনে পরিচালিত হয়।',
        
        // Footer
        footerAbout: 'নিরাপদ যাতায়াত একটি আন্তর্জাতিক নাগরিক ও পরিবহন সুরক্ষা সংস্থা, যা সড়ক, বিমান, রেল এবং নৌপথের নিরাপত্তা পর্যবেক্ষণ, সচেতনতা বৃদ্ধি এবং আন্তর্জাতিক সুরক্ষা মান নিশ্চিতে নিবেদিত।',
        footerEmergency: '২৪/৭ সার্বক্ষণিক নিয়ন্ত্রণ কক্ষ',
        footerHelpline: 'জরুরি হেল্পলাইন নম্বর',
        footerCopyright: 'নিরাপদ যাতায়াত (Safe Transit International)। সর্বস্বত্ব সংরক্ষিত। নিবন্ধিত অলাভজনক সংস্থা।',
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Initial check: localStorage -> Geo/Timezone -> 'en'
    const [lang, setLangState] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('nj_lang');
            if (saved === 'bn' || saved === 'en') {
                return saved;
            }
            // Auto Geo-detect via TimeZone or Browser Language
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                const navLang = navigator.language || navigator.userLanguage || '';
                if (tz.includes('Dhaka') || navLang.toLowerCase().includes('bn')) {
                    return 'bn';
                }
            } catch (e) {
                // Ignore fallback
            }
        }
        return 'en';
    });

    const [isGeoDetected, setIsGeoDetected] = useState(false);

    // Dynamic IP-based GEO location detection on initial mount if user hasn't explicitly set language
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const saved = localStorage.getItem('nj_lang');
        if (saved) return; // User already chose manually

        // Try quick Geo check
        let isCancelled = false;
        const detectGeo = async () => {
            try {
                // Check timezone first (instant, free, reliable)
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                if (tz.includes('Dhaka')) {
                    if (!isCancelled) {
                        setLangState('bn');
                        setIsGeoDetected(true);
                    }
                    return;
                }

                // Complement with quick IP Geo API (timeout 2500ms)
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2500);
                
                const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
                clearTimeout(timeoutId);
                if (res.ok) {
                    const data = await res.json();
                    if (!isCancelled && data && data.country_code) {
                        if (data.country_code === 'BD') {
                            setLangState('bn');
                            setIsGeoDetected(true);
                        } else {
                            setLangState('en');
                            setIsGeoDetected(true);
                        }
                    }
                }
            } catch (err) {
                // If network/offline, fallback to browser timezone/en
            }
        };

        detectGeo();

        return () => {
            isCancelled = true;
        };
    }, []);

    // Change language and persist to localStorage
    const setLanguage = (newLang) => {
        if (newLang === 'bn' || newLang === 'en') {
            setLangState(newLang);
            if (typeof window !== 'undefined') {
                localStorage.setItem('nj_lang', newLang);
            }
        }
    };

    const toggleLanguage = () => {
        const nextLang = lang === 'en' ? 'bn' : 'en';
        setLanguage(nextLang);
    };

    // Helper translation accessor
    const t = (key) => {
        const currentDict = translations[lang] || translations.en;
        return currentDict[key] || translations.en[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t, isGeoDetected }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
