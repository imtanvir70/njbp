import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import IncidentReporterModal from '@/Components/IncidentReporterModal';
import { LanguageProvider } from '@/Context/LanguageContext';

function PublicLayoutContent({ children }) {
    const { flash = {} } = usePage().props;
    const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);

    useEffect(() => {
        if (flash?.tracked_incident || flash?.tracking_error) {
            setIsIncidentModalOpen(true);
        }

        const handleOpenModal = () => setIsIncidentModalOpen(true);
        window.addEventListener('open-incident-modal', handleOpenModal);
        return () => window.removeEventListener('open-incident-modal', handleOpenModal);
    }, [flash]);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
            <Navbar onOpenIncidentModal={() => setIsIncidentModalOpen(true)} />

            <main className="flex-1">
                {children}
            </main>

            <Footer />

            <IncidentReporterModal
                isOpen={isIncidentModalOpen}
                onClose={() => setIsIncidentModalOpen(false)}
                flash={flash}
            />
        </div>
    );
}

export default function PublicLayout({ children }) {
    return (
        <LanguageProvider>
            <PublicLayoutContent>
                {children}
            </PublicLayoutContent>
        </LanguageProvider>
    );
}
