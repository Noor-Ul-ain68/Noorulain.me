import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';
import { services } from '@/content/services';

export const metadata: Metadata = {
    title: 'AI Automation Services | n8n, LLM Integration & SaaS Development',
    description:
        'Premium AI automation services including n8n workflow systems, custom LLM integrations, SaaS development, and business process automation. Serving SaaS founders and scaling businesses.',
    alternates: { canonical: `${SITE_CONFIG.url}/services` },
};

const process = [
    { step: '01', title: 'Discovery Call', desc: 'We map your current workflows, identify your biggest bottlenecks, and define the highest-ROI automation opportunities.' },
    { step: '02', title: 'Architecture Design', desc: 'I design a custom automation architecture tailored to your tech stack, processes, and scale requirements.' },
    { step: '03', title: 'Build & Test', desc: 'Full system build with comprehensive testing, error handling, monitoring, and edge case coverage.' },
    { step: '04', title: 'Deploy & Handoff', desc: 'Production deployment with full documentation, team training, and 30-day post-launch support.' },
];

export default function ServicesPage() {
    return (
        <>
            {/* HERO */}
            <section className="pt-32 pb-20 relative overflow-hidden tech-grid">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <p className="section-label justify-center">Services</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        High-Ticket AI Automation{' '}
                        <span className="text-gradient-orange">Consulting Services</span>
                    </h1>
                    <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
                        Precision-engineered automation systems designed to eliminate operational drag and give your business a measurable competitive edge.
                    </p>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="section-pad">
                <div className="container-custom">
                    <div className="space-y-8">
                        {services.map((service, i) => (
                            <div key={service.id} id={service.id} className="card p-8 md:p-10 scroll-mt-24">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left */}
                                    <div className="lg:col-span-1">
                                        <div className="text-5xl mb-5">{service.icon}</div>
                                        <h2 className="text-2xl font-black text-white mb-3">{service.title}</h2>
                                        <p className="font-bold text-lg mb-4" style={{ color: '#FF6A00' }}>{service.price}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tools.map((tool) => (
                                                <span key={tool} className="tag">{tool}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right — Problem → Solution → Outcome */}
                                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="highlight-box">
                                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF6A00' }}>🔴 Problem</p>
                                            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{service.problem}</p>
                                        </div>
                                        <div className="highlight-box">
                                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF6A00' }}>⚡ Solution</p>
                                            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{service.solution}</p>
                                        </div>
                                        <div className="highlight-box">
                                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF6A00' }}>✅ Outcome</p>
                                            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{service.outcome}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="divider my-7" />
                                <div className="flex items-center justify-between">
                                    <p className="text-sm" style={{ color: '#6B7280' }}>Average project timeline: 2–6 weeks</p>
                                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-sm">
                                        <span>Discuss This Service →</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section-pad" style={{ background: 'rgba(26,26,31,0.3)' }}>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="section-label justify-center">How It Works</p>
                        <h2 className="text-4xl font-black text-white mb-4">The Engagement Process</h2>
                        <p className="max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
                            A structured, transparent process designed to deliver maximum value with minimum friction.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <div key={i} className="card p-7 relative">
                                <p className="text-6xl font-black mb-4" style={{ color: 'rgba(255,106,0,0.15)', lineHeight: 1 }}>{step.step}</p>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{step.desc}</p>
                                {i < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px" style={{ background: 'rgba(255,106,0,0.4)' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-pad relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,106,0,0.08) 0%, transparent 70%)' }} />
                <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-5">
                        Ready to Discuss Your{' '}
                        <span className="text-gradient-orange">Automation Project?</span>
                    </h2>
                    <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
                        Book a no-obligation 30-minute strategy call. We'll identify your highest-ROI automation opportunity and give you a clear implementation roadmap.
                    </p>
                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg px-10 py-5">
                        <span>Book Free Strategy Call →</span>
                    </a>
                    <p className="mt-4 text-sm" style={{ color: '#6B7280' }}>Limited availability · Premium clients only</p>
                </div>
            </section>
        </>
    );
}
