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
            <section className="section-pad relative overflow-hidden tech-grid pt-40 lg:pt-56">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="section-label justify-center">Services</span>
                        <h1 className="mb-6 text-[28px] xs:text-[32px] sm:text-5xl lg:text-7xl leading-[1.2] lg:leading-[1.1]">
                            High-Ticket AI Automation{' '}
                            <span className="text-gradient-orange">Consulting Services</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                            Precision-engineered automation systems designed to eliminate operational drag and give your business a measurable competitive edge.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="section-pad">
                <div className="container-custom">
                    <div className="space-y-8">
                        {services.map((service, i) => (
                            <div key={service.id} id={service.id} className="card p-8 sm:p-10 md:p-12 scroll-mt-24">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                                    {/* Left */}
                                    <div className="lg:col-span-1">
                                        <div className="icon-box">
                                            {service.icon}
                                        </div>
                                        <h2 className="mb-4 text-3xl lg:text-4xl">{service.title}</h2>
                                        <div className="mb-8">
                                            <p className="price-tag mb-0">{service.price}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2.5">
                                            {service.tools.map((tool) => (
                                                <span key={tool} className="tag">{tool}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right — Problem → Solution → Outcome */}
                                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="highlight-box flex flex-col group/box">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-red-500">🔴 Problem</p>
                                            <p className="text-sm sm:text-base leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{service.problem}</p>
                                        </div>
                                        <div className="highlight-box flex flex-col group/box">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-orange-500">⚡ Solution</p>
                                            <p className="text-sm sm:text-base leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{service.solution}</p>
                                        </div>
                                        <div className="highlight-box flex flex-col group/box">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-green-500">✅ Outcome</p>
                                            <p className="text-sm sm:text-base leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{service.outcome}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="divider my-10 opacity-30" />
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                        <p className="text-sm sm:text-base italic font-medium" style={{ color: '#6B7280' }}>Average project timeline: 2–6 weeks</p>
                                    </div>
                                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange w-full sm:w-auto px-10">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <div key={i} className="card p-8 group">
                                <p className="text-6xl font-black mb-4 transition-transform group-hover:scale-110 duration-500" style={{ color: 'rgba(255,106,0,0.15)', lineHeight: 1 }}>{step.step}</p>
                                <h3 className="mb-3">{step.title}</h3>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>{step.desc}</p>
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
