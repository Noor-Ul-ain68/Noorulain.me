import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';
import { caseStudies } from '@/content/caseStudies';

export const metadata: Metadata = {
    title: 'AI Automation Case Studies | Real Results & ROI',
    description:
        'Real-world AI automation case studies showing measurable results. See how n8n workflows, LLM integrations, and custom automation saved clients 40+ hours per week and drove significant ROI.',
    alternates: { canonical: `${SITE_CONFIG.url}/case-studies` },
};

export default function CaseStudiesPage() {
    return (
        <>
            {/* HERO */}
            <section className="section-pad relative overflow-hidden tech-grid pt-32 lg:pt-48">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <p className="section-label justify-center">Case Studies</p>
                        <h1 className="mb-6">
                            Real Businesses.{' '}
                            <span className="text-gradient-orange">Real Results.</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
                            Every automation project is backed by measurable outcomes. Here's what happens when intelligent systems replace manual work.
                        </p>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="section-pad">
                <div className="container-custom space-y-16">
                    {caseStudies.map((study, i) => (
                        <article key={study.id} id={study.id} className="card p-8 md:p-12 scroll-mt-24">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                <div>
                                    <span className="tag mb-3 inline-block">{study.industry}</span>
                                    <h2 className="text-3xl font-black text-white">{study.client}</h2>
                                </div>
                                <div className="shrink-0">
                                    <div className="px-5 py-2.5 rounded-xl text-sm font-bold" style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.2)', color: '#FF8C1A' }}>
                                        Case Study #{String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            <div className="divider mb-8" />

                            {/* Problem → Solution */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#FF6A00' }}>🔴 The Problem</h3>
                                    <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>{study.problem}</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#FF6A00' }}>⚡ The Solution</h3>
                                    <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>{study.solution}</p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#FF6A00' }}>🛠️ Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.stack.map((tech) => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: '#FF6A00' }}>✅ Measurable Results</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {study.results.map((result, j) => (
                                        <div key={j} className="highlight-box flex flex-col items-center justify-center text-center py-6 px-4">
                                            <p className="text-3xl font-black text-gradient-orange mb-2">{result.value}</p>
                                            <p className="text-[10px] sm:text-xs font-bold text-white mb-1 uppercase tracking-wider">{result.metric}</p>
                                            <p className="text-[10px] sm:text-xs italic" style={{ color: '#6B7280' }}>({result.description})</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-pad relative overflow-hidden">
                <div className="absolute inset-0 tech-grid-sm opacity-40 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,106,0,0.08) 0%, transparent 70%)' }} />
                <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-5">
                        Ready to Become the{' '}
                        <span className="text-gradient-orange">Next Case Study?</span>
                    </h2>
                    <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
                        Book a strategy call and let's identify the automation opportunities that will deliver the biggest ROI for your business.
                    </p>
                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg px-10 py-5">
                        <span>Book Free Strategy Call →</span>
                    </a>
                </div>
            </section>
        </>
    );
}
