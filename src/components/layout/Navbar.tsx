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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-white/5 py-2 lg:py-3' : 'bg-transparent py-3 lg:py-5'
                }`}
        >
            <nav className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-9 h-9 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                        <span className="text-white font-black text-sm relative z-10">NA</span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-white font-black text-sm uppercase tracking-wider leading-none group-hover:text-gradient-orange transition-all">Noor ul Ain</p>
                        <p className="text-[10px] mt-1 font-bold tracking-[0.1em] uppercase opacity-60" style={{ color: '#FF6A00' }}>AI Automation Strategist</p>
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
                    className="md:hidden p-2 rounded-lg text-white/80 hover:text-white transition-colors relative z-50 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10"
                    aria-label="Toggle navigation"
                >
                    <div className="w-6 relative h-5">
                        <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 left-0 ${isMobileOpen ? 'rotate-45 top-2' : 'top-0'}`} />
                        <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 left-0 top-2 ${isMobileOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                        <span className={`absolute h-0.5 w-full bg-current transition-all duration-300 left-0 ${isMobileOpen ? '-rotate-45 top-2' : 'top-4'}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-in-out ${isMobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 pt-24 pb-12 gap-6">
                    {NAV_ITEMS.map((item, idx) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={`text-3xl font-black transition-all duration-300 tracking-tight ${pathname === item.href
                                ? 'text-gradient-orange opacity-100'
                                : 'text-white/60 hover:text-white'
                                }`}
                            style={{
                                transitionDelay: `${idx * 70}ms`,
                                transform: isMobileOpen ? 'translateY(0)' : 'translateY(40px)',
                                opacity: isMobileOpen ? 1 : 0
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div
                        className="w-full pt-8 border-t border-white/10 flex flex-col gap-4"
                        style={{
                            transitionDelay: `${NAV_ITEMS.length * 50}ms`,
                            transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMobileOpen ? 1 : 0
                        }}
                    >
                        <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg py-5">
                            <span>Book Strategy Call</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
