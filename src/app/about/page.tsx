import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
    title: 'About Noor ul Ain | AI Automation Strategist & Consultant',
    description:
        'Learn about Noor ul Ain — a premium AI Automation Strategist with deep expertise in n8n workflow architecture, LLM integrations, Python development, and SaaS system design.',
    alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

const expertise = [
    { icon: '⚡', title: 'AI Workflow Architecture', desc: 'Designing end-to-end intelligent automation pipelines using n8n, Python, and cloud infrastructure that eliminate bottlenecks and scale with your business.' },
    { icon: '🧠', title: 'LLM Integration & AI Systems', desc: 'Building custom AI-powered features into existing SaaS products — from document processors to AI copilots — using OpenAI, LangChain, and Anthropic.' },
    { icon: '🏗️', title: 'SaaS Backend Development', desc: 'Architecting production-ready SaaS backends with Python and FastAPI, complete with scalable database design, API security, and cloud deployment.' },
    { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Deploying and managing scalable cloud infrastructure on AWS and GCP — including containerization with Docker, orchestration, and CI/CD pipelines.' },
    { icon: '🔄', title: 'n8n Automation Expert', desc: 'Specializing in building, deploying, and maintaining production-grade n8n automation systems complete with error handling, monitoring, and custom nodes.' },
    { icon: '📊', title: 'Business Process Optimization', desc: 'Mapping, redesigning, and automating core business processes to eliminate inefficiency, reduce costs, and create measurable operational leverage.' },
];

const values = [
    { title: 'Results Over Theory', desc: 'Every system I build must deliver measurable ROI. No fluff, no over-engineering — just automation that works and creates real business value.' },
    { title: 'Strategic Thinking', desc: 'I don\'t just automate tasks — I redesign processes. The goal is always to maximize leverage and create compounding operational advantages.' },
    { title: 'Long-term Architecture', desc: 'Systems I build are built to last and scale. Not quick hacks — properly documented, maintainable, and designed for your next 3 years of growth.' },
];

export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <section className="section-pad relative overflow-hidden tech-grid pt-24 lg:pt-36">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left">
                        <p className="section-label">About</p>
                        <h1 className="mb-4 text-[28px] xs:text-[32px] sm:text-5xl lg:text-7xl leading-[1.2] lg:leading-[1.1]">
                            The AI Automation Strategist{' '}
                            <span className="text-gradient-orange">Behind the Systems</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8" style={{ color: '#9CA3AF' }}>
                            I&apos;m Noor ul Ain — an AI Automation Strategist and Systems Architect helping SaaS companies and scaling businesses design intelligent automation that creates real competitive advantage.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange">
                                <span>Book a Strategy Call</span>
                            </a>
                            <Link href="/services" className="btn-ghost">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="section-pad">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        {/* Visual */}
                        <div className="relative order-last lg:order-none">
                            <div className="rounded-2xl p-6 sm:p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1A1F, #111114)', border: '1px solid rgba(255,106,0,0.2)' }}>
                                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)' }} />
                                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 relative z-10">
                                    {[
                                        { label: 'Tools Automated', value: '50+' },
                                        { label: 'SaaS Products Built', value: '12+' },
                                        { label: 'Hours Saved/Week', value: '500+' },
                                        { label: 'Years Experience', value: '5+' },
                                    ].map((item) => (
                                        <div key={item.label} className="highlight-box text-center p-4">
                                            <p className="text-2xl sm:text-3xl font-black text-gradient-orange">{item.value}</p>
                                            <p className="text-[10px] sm:text-xs mt-1 uppercase tracking-wider" style={{ color: '#9CA3AF' }}>{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="divider my-6" />
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                    {['n8n', 'Python', 'OpenAI', 'FastAPI', 'AWS', 'LangChain', 'Docker', 'PostgreSQL'].map((t) => (
                                        <span key={t} className="tag text-[10px] px-2 py-1">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center lg:text-left">
                            <p className="section-label lg:justify-start justify-center">My Story</p>
                            <h2 className="mb-6">
                                From Developer to Authority
                            </h2>
                            <div className="space-y-6 text-base sm:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
                                <p>
                                    My journey began in software development, where I quickly realized that the biggest constraint on business growth wasn&apos;t talent or strategy — it was operational inefficiency. Teams drowning in manual work couldn&apos;t move fast enough to compete.
                                </p>
                                <p>
                                    I spent years mastering Python, cloud infrastructure, and SaaS architecture. Then n8n and the LLM revolution arrived, and everything changed. For the first time, it was possible to automate complex, intelligent business processes end-to-end.
                                </p>
                                <p>
                                    Now, I work exclusively with SaaS founders and scaling businesses who are serious about using AI automation as a competitive weapon. My clients don&apos;t hire me to save a few hours. They hire me to redesign how their operations work entirely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERTISE GRID */}
            <section className="section-pad" style={{ background: 'rgba(26,26,31,0.3)' }}>
                <div className="container-custom">
                    <div className="text-center mb-10 lg:mb-12">
                        <p className="section-label justify-center">Deep Expertise</p>
                        <h2 className="text-4xl font-black text-white mb-3">What I Specialize In</h2>
                        <p className="max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
                            Not a generalist. A focused specialist in AI automation systems and intelligent workflow architecture.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertise.map((item, i) => (
                            <div key={i} className="card p-6 group">
                                <div className="text-4xl mb-4 transition-transform group-hover:translate-x-2 duration-300">{item.icon}</div>
                                <h3 className="mb-2">{item.title}</h3>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUES & MISSION */}
            <section className="section-pad">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="section-label justify-center">Philosophy</p>
                            <h2 className="text-4xl font-black text-white mb-4">How I Work</h2>
                        </div>
                        <div className="space-y-6">
                            {values.map((v, i) => (
                                <div key={i} className="card p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-white text-lg" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="mb-2">{v.title}</h3>
                                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="section-pad relative overflow-hidden">
                <div className="absolute inset-0 tech-grid-sm opacity-40 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,106,0,0.08) 0%, transparent 70%)' }} />
                <div className="container-custom relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="section-label justify-center">Vision</p>
                        <h2 className="text-4xl font-black text-white mb-4">
                            My Mission
                        </h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
                            To help 100 SaaS companies and scaling businesses build AI automation systems that free them from operational slavery — creating businesses that are faster, smarter, and more profitable than their competitors.
                        </p>
                        <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg px-8 py-4">
                            <span>Start the Conversation →</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
