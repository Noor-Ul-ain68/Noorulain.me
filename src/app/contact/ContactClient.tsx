'use client';

import { useState } from 'react';
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
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.message || 'Connection error. Please try again.');
        }
    };

    const inputClass = `w-full px-4 py-3 rounded-none border-b border-white/10 bg-transparent text-sm outline-none transition-all focus:border-orange-500/50 placeholder-gray-600`;

    return (
        <section className="pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-[#0B0B0D]">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-start">

                    {/* LEFT SIDE (40%) */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                            Get in Touch
                        </h1>
                        <h2 className="text-xl lg:text-2xl font-medium text-orange-500/90 mb-8">
                            I’d love to hear from you.
                        </h2>
                        <p className="text-sm lg:text-base leading-relaxed text-gray-400 max-w-[280px] lg:max-w-xs mb-12">
                            Whether you have a specific project in mind or just want to explore how AI automation can transform your operations, I'm here to help.
                        </p>

                        <div className="mb-12 w-full group">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 font-bold">Email Me Directly</p>
                            <a href={`mailto:noorulainrafiq791@gmail.com`} className="text-lg lg:text-xl font-bold text-white hover:text-orange-500 transition-colors">
                                noorulainrafiq791@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE (60%) */}
                    <div className="lg:col-span-6 w-full lg:max-w-[540px]">
                        <div className="bg-[#111114]/50 border border-white/[0.03] p-6 lg:p-8 rounded-2xl relative">
                            {status === 'success' ? (
                                <div className="py-12 text-center animate-fade-in">
                                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2">Message Sent</h3>
                                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-8 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                className={inputClass}
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                className={inputClass}
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                                        <textarea
                                            required
                                            rows={6}
                                            placeholder="Tell me about your project or goal..."
                                            className={`${inputClass} resize-none`}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    <div className="pt-2 flex flex-col items-center lg:items-end">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="btn-orange w-full sm:w-auto px-10 py-3.5 text-sm tracking-wide disabled:opacity-50 transition-all active:scale-95"
                                        >
                                            <span>
                                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                            </span>
                                        </button>
                                        {status === 'error' && (
                                            <p className="mt-4 text-xs text-red-400">{errorMessage}</p>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
