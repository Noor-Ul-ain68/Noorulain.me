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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <nav className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-9 h-9 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                        <span className="text-white font-black text-sm relative z-10">NA</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-white font-bold text-sm leading-none group-hover:text-gradient-orange transition-all">Noor ul Ain</p>
                        <p className="text-xs mt-0.5" style={{ color: '#FF6A00', fontSize: '10px', letterSpacing: '0.5px' }}>AI Automation Strategist</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === item.href
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
                <div className="hidden md:flex items-center gap-3">
                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-sm">
                        <span>Book Strategy Call</span>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle navigation"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden glass border-t border-white/5 mt-2">
                    <div className="container-custom py-4 flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === item.href
                                        ? 'bg-orange-500/10 text-orange-400'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                style={pathname === item.href ? { color: '#FF6A00', background: 'rgba(255,106,0,0.08)' } : {}}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-sm mt-2 justify-center">
                            <span>Book Strategy Call</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
