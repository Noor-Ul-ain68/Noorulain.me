'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/constants';

const contactMethods = [
    { icon: '📧', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, desc: 'Best for project inquiries' },
    { icon: '💼', label: 'LinkedIn', href: SITE_CONFIG.linkedin, desc: 'Professional network' },
    { icon: '🐙', label: 'GitHub', href: SITE_CONFIG.github, desc: 'See my code & projects' },
    { icon: '📅', label: 'Calendly', href: SITE_CONFIG.calendly, desc: '30-min free consultation' },
];

export default function ContactClient() {
    const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass = `w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-1 placeholder-gray-600`;
    const inputStyle = {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'white',
    };

    return (
        <>
            {/* HERO */}
            <section className="section-pad relative overflow-hidden tech-grid pt-24 lg:pt-36">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <p className="section-label justify-center">Contact</p>
                        <h1 className="mb-6 text-[28px] xs:text-[32px] sm:text-5xl lg:text-7xl leading-[1.2] lg:leading-[1.1]">
                            Let&apos;s Build Something{' '}
                            <span className="text-gradient-orange">Intelligent</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
                            Have a project in mind? Book a strategy call or send a message. I respond within 24 hours to qualified inquiries.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3 order-first lg:order-none">
                            <div className="card p-5 sm:p-7 md:p-8">
                                <h2 className="mb-2">Send a Message</h2>
                                <p className="text-sm sm:text-base mb-6" style={{ color: '#6B7280' }}>
                                    Tell me about your project and your biggest operational challenge.
                                </p>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="text-6xl mb-6">🎯</div>
                                        <h3 className="mb-2">Message Sent!</h3>
                                        <p style={{ color: '#9CA3AF' }}>
                                            I&apos;ll review your project and get back to you within 24 hours.
                                        </p>
                                        <a
                                            href={SITE_CONFIG.calendly}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-orange mt-8"
                                        >
                                            <span>Or Book a Call Now →</span>
                                        </a>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    className="block text-[10px] font-bold uppercase tracking-widest mb-3"
                                                    style={{ color: '#9CA3AF' }}
                                                >
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="John Smith"
                                                    className={inputClass}
                                                    style={inputStyle}
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-[10px] font-bold uppercase tracking-widest mb-3"
                                                    style={{ color: '#9CA3AF' }}
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="john@company.com"
                                                    className={inputClass}
                                                    style={inputStyle}
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    className="block text-[10px] font-bold uppercase tracking-widest mb-3"
                                                    style={{ color: '#9CA3AF' }}
                                                >
                                                    Company / Startup
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Acme Inc."
                                                    className={inputClass}
                                                    style={inputStyle}
                                                    value={form.company}
                                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-[10px] font-bold uppercase tracking-widest mb-3"
                                                    style={{ color: '#9CA3AF' }}
                                                >
                                                    Project Budget
                                                </label>
                                                <select
                                                    className={inputClass}
                                                    style={{ ...inputStyle, cursor: 'pointer' }}
                                                    value={form.budget}
                                                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                                                >
                                                    <option value="" style={{ background: '#1A1A1F' }}>
                                                        Select range
                                                    </option>
                                                    <option value="1500-3000" style={{ background: '#1A1A1F' }}>
                                                        $1,500 – $3,000
                                                    </option>
                                                    <option value="3000-5000" style={{ background: '#1A1A1F' }}>
                                                        $3,000 – $5,000
                                                    </option>
                                                    <option value="5000-10000" style={{ background: '#1A1A1F' }}>
                                                        $5,000 – $10,000
                                                    </option>
                                                    <option value="10000+" style={{ background: '#1A1A1F' }}>
                                                        $10,000+
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className="block text-[10px] font-bold uppercase tracking-widest mb-3"
                                                style={{ color: '#9CA3AF' }}
                                            >
                                                Your Biggest Challenge *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Describe the processes you want to automate..."
                                                className={`${inputClass} resize-none`}
                                                style={inputStyle}
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            />
                                        </div>

                                        <button type="submit" className="btn-orange w-full text-base py-4">
                                            <span>Send Message →</span>
                                        </button>
                                        <p className="text-[10px] text-center italic" style={{ color: '#6B7280' }}>
                                            I respond to all qualified inquiries within 24 hours.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Book Call */}
                            <div className="card p-6 relative">
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,106,0,0.08) 0%, transparent 70%)',
                                    }}
                                />
                                <div className="relative z-10">
                                    <div className="text-3xl mb-3">📅</div>
                                    <h3 className="text-xl font-black text-white mb-2">Book a Strategy Call</h3>
                                    <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
                                        Skip the back-and-forth. Book a 30-minute call directly and let&apos;s discuss your
                                        project in real-time.
                                    </p>
                                    <a
                                        href={SITE_CONFIG.calendly}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-orange text-sm w-full justify-center"
                                    >
                                        <span>Schedule Free Call →</span>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Methods */}
                            <div className="card p-6">
                                <h3
                                    className="text-sm font-bold uppercase tracking-widest mb-5"
                                    style={{ color: '#FF6A00' }}
                                >
                                    Other Ways to Connect
                                </h3>
                                <div className="space-y-3">
                                    {contactMethods.map((method) => (
                                        <a
                                            key={method.label}
                                            href={method.href}
                                            target={method.href.startsWith('http') ? '_blank' : undefined}
                                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-4 p-3 rounded-lg transition-all group"
                                            style={{
                                                background: 'rgba(255,255,255,0.02)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            <span className="text-2xl">{method.icon}</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-white">{method.label}</p>
                                                <p className="text-xs" style={{ color: '#6B7280' }}>
                                                    {method.desc}
                                                </p>
                                            </div>
                                            <svg
                                                className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                                                style={{ color: '#FF6A00' }}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="highlight-box">
                                <div className="flex items-center gap-3">
                                    <span
                                        className="w-2 h-2 rounded-full animate-pulse"
                                        style={{ background: '#FF6A00' }}
                                    />
                                    <p className="text-sm font-semibold text-white">Available for new projects</p>
                                </div>
                                <p className="text-xs mt-2" style={{ color: '#6B7280' }}>
                                    Typical response time: within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
