'use client';

import { useState } from 'react';
import Script from 'next/script';
import { SITE_CONFIG } from '@/constants';

export default function ContactClient() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Error sending email. Please try again.');
            }
        } catch (err: unknown) {
            const error = err as Error;
            setStatus('error');
            setErrorMessage(error.message || 'Connection error. Please try again.');
        }
    };

    const inputClass = `w-full px-4 py-3 rounded-none border-b border-white/10 bg-transparent text-sm outline-none transition-all focus:border-orange-500/50 placeholder-gray-600`;

    // Format Calendly URL with theme parameters for the widget
    const calendlyWidgetUrl = `${SITE_CONFIG.calendly}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0b0d&text_color=ffffff&primary_color=ff6a00`;

    return (
        <>
            {/* Load Official Calendly Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />

            <section className="pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0B0B0D]">
                <div className="container-custom">
                    {/* Header section - subtle and premium */}
                    <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                            Let&apos;s Build Your <span className="text-gradient-orange">Next System</span>
                        </h1>
                        <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                            Choose the conversion path that suits you best. Whether you want to talk strategy or send a quick proposal inquiry, I&apos;m ready to transform your operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* RIGHT SIDE: CALENDLY WIDGET (Appears FIRST on mobile) */}
                        <div className="order-1 lg:order-2 flex flex-col h-full">
                            <div className="mb-8">
                                <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">Book a Free Strategy Call</h2>
                                <p className="text-sm lg:text-base text-gray-500 leading-relaxed font-medium">
                                    Prefer to talk directly? Schedule a call and let&apos;s discuss your automation goals.
                                </p>
                            </div>

                            <div className="w-full bg-[#111114]/50 border border-white/[0.05] rounded-3xl overflow-hidden relative shadow-2xl">
                                {/* Visual highlight on top left */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 blur-[60px] pointer-events-none" />

                                <div className="relative z-10 w-full min-h-[500px] lg:min-h-[700px]">
                                    {/* Official Calendly Inline Widget */}
                                    <div
                                        className="calendly-inline-widget"
                                        data-url={calendlyWidgetUrl}
                                        style={{ minWidth: '320px', height: '700px' }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* LEFT SIDE: EMAIL FORM (Appears SECOND on mobile) */}
                        <div className="order-2 lg:order-1 flex flex-col justify-center">
                            <div className="mb-8 hidden lg:block">
                                <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">Send a Message</h2>
                                <p className="text-sm lg:text-base text-gray-500 leading-relaxed font-medium">
                                    Have a specific project or proposal in mind? Fill out this form and I&apos;ll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="bg-[#111114]/30 border border-white/[0.03] p-8 lg:p-10 rounded-3xl relative backdrop-blur-sm">
                                {status === 'success' ? (
                                    <div className="py-20 text-center animate-fade-in">
                                        <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-3">Message Sent</h3>
                                        <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-10 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors underline underline-offset-8 decoration-orange-500/30"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        <div className="space-y-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your full name"
                                                    className={inputClass}
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    className={inputClass}
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Message</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    placeholder="Tell me about your project, goals, or current bottlenecks..."
                                                    className={`${inputClass} resize-none leading-relaxed`}
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="btn-orange w-full py-4 text-sm font-bold tracking-widest uppercase disabled:opacity-50 transition-all active:scale-[0.98] shadow-lg shadow-orange-500/10"
                                            >
                                                <span>
                                                    {status === 'submitting' ? 'Sending Request...' : 'Send Message →'}
                                                </span>
                                            </button>
                                            {status === 'error' && (
                                                <p className="mt-6 text-center text-xs text-red-500 font-medium">{errorMessage}</p>
                                            )}
                                        </div>

                                        <div className="pt-8 border-t border-white/[0.03] flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
                                            <span>EST. Response: &lt; 24h</span>
                                            <a href={`mailto:${SITE_CONFIG.email}`} className="text-orange-500 hover:text-orange-400 transition-colors">
                                                Direct Email
                                            </a>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
