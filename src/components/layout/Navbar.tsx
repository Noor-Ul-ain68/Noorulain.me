'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, SITE_CONFIG } from '@/constants';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
            // Prevent layout shift by adding padding if scrollbar is visible
            document.body.style.paddingRight = '0px';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
    }, [isMobileOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-white/5 py-1 lg:py-1.5' : 'bg-transparent py-2 lg:py-3'
                }`}
        >
            <nav className="container-custom flex items-center justify-between">
                {/* Mobile Hamburger - Moved to left */}
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white transition-colors relative z-50 w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10"
                    aria-label="Open navigation"
                >
                    <div className="w-5 relative h-4 flex flex-col justify-between">
                        <span className="h-0.5 w-full bg-current rounded-full" />
                        <span className="h-0.5 w-4/5 bg-current rounded-full ml-auto" />
                        <span className="h-0.5 w-full bg-current rounded-full" />
                    </div>
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="relative w-8 h-8 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                        <span className="text-white font-black text-xs relative z-10">NA</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-white font-black text-xs uppercase tracking-wider leading-none group-hover:text-gradient-orange transition-all">Noor ul Ain</p>
                        <p className="text-[9px] mt-1 font-bold tracking-[0.1em] uppercase opacity-60" style={{ color: '#FF6A00' }}>AI Automation Strategist</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.href
                                    ? 'text-orange-400'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                style={pathname === item.href ? { color: '#FF6A00' } : {}}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-3">
                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-xs py-1.5 px-6 min-h-[38px] transition-all">
                        <span>Book Strategy Call</span>
                    </a>
                </div>
            </nav>

            {/* Backdrop Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileOpen(false)}
            />

            {/* Left Side Sidebar (Off-canvas) */}
            <aside
                className={`lg:hidden fixed top-0 left-0 bottom-0 z-[70] w-[80%] max-w-[380px] bg-[#0D0D10] border-r border-white/5 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-6 sm:p-8 relative">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-xs" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                                NA
                            </div>
                            <span className="text-white font-bold text-sm tracking-tight">Noor ul Ain</span>
                        </div>
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white/60 hover:text-white transition-colors border border-white/10"
                            aria-label="Close navigation"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`block py-3 px-4 rounded-xl text-lg font-bold transition-all duration-200 ${pathname === item.href
                                    ? 'bg-orange-500/10 text-orange-400'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom CTA */}
                    <div className="pt-8 border-t border-white/10 mt-auto">
                        <a
                            href={SITE_CONFIG.calendly}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-orange w-full py-4 text-sm justify-center"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <span>Book Strategy Call →</span>
                        </a>
                        <p className="text-center text-[9px] uppercase tracking-[0.2em] text-gray-600 mt-6 font-bold">
                            AI Automation Expert
                        </p>
                    </div>
                </div>
            </aside>
        </header >
    );
}
