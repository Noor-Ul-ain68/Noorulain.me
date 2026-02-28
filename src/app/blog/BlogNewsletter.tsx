'use client';
import { useState } from 'react';

export default function BlogNewsletter() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    return (
        <div
            className="relative rounded-2xl p-10 text-center"
            style={{ background: 'rgba(26,26,31,0.8)', border: '1px solid rgba(255,106,0,0.15)' }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,106,0,0.07) 0%, transparent 70%)',
                }}
            />
            <div className="relative z-10">
                <h2 className="text-3xl font-black text-white mb-3">Get AI Automation Insights</h2>
                <p className="mb-8 max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
                    Practical strategies on n8n, LLMs, and SaaS automation delivered directly to your inbox.
                </p>
                {done ? (
                    <p className="text-lg font-bold" style={{ color: '#FF6A00' }}>
                        ✓ You&apos;re subscribed! Check your inbox.
                    </p>
                ) : (
                    <form
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setDone(true);
                        }}
                    >
                        <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-5 py-3.5 rounded-lg text-sm outline-none placeholder-gray-600"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                            }}
                        />
                        <button type="submit" className="btn-orange text-sm whitespace-nowrap">
                            <span>Subscribe →</span>
                        </button>
                    </form>
                )}
                <p className="mt-4 text-xs" style={{ color: '#6B7280' }}>
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
}
