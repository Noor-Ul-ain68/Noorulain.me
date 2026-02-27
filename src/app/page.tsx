import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';
import { services } from '@/content/services';
import { caseStudies } from '@/content/caseStudies';

export const metadata: Metadata = {
  title: 'Noor ul Ain | AI Automation Strategist & n8n Expert',
  description:
    'Premium AI Automation Consultant helping SaaS founders and scaling businesses eliminate manual work using n8n, LLM integrations, and intelligent automation systems.',
  alternates: { canonical: SITE_CONFIG.url },
};

const stats = [
  { value: '80%+', label: 'Manual Work Eliminated', desc: 'Average across client projects' },
  { value: '40hrs', label: 'Saved Per Week', desc: 'Per team on average' },
  { value: '50+', label: 'Automations Built', desc: 'Across industries' },
  { value: '3x', label: 'Operational Capacity', desc: 'Average client growth' },
];

const techStack = [
  'n8n', 'Python', 'OpenAI', 'LangChain', 'FastAPI',
  'PostgreSQL', 'Docker', 'AWS', 'Stripe', 'Notion', 'Slack', 'Airtable',
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION — Two Column Layout
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden tech-grid">

        {/* Background ambient glows */}
        <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
        <div
          className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
          }}
        />

        {/* Animated light streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-px w-64 animate-streak" style={{ top: '20%', background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.6), transparent)' }} />
          <div className="absolute h-px w-48 animate-streak" style={{ top: '60%', background: 'linear-gradient(90deg, transparent, rgba(255,106,0,0.35), transparent)', animationDelay: '3s' }} />
          <div className="absolute h-px w-80 animate-streak" style={{ top: '40%', background: 'linear-gradient(90deg, transparent, rgba(255,140,26,0.25), transparent)', animationDelay: '5s' }} />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* ── LEFT: Headline + CTAs ── */}
            <div>
              {/* Status badge */}
              <div
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up"
                style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.25)', color: '#FF8C1A' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#FF6A00' }} />
                Available for New Projects · AI Automation Consulting
              </div>

              {/* H1 */}
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 animate-fade-in-up delay-100">
                Building{' '}
                <span className="text-gradient-orange">Intelligent AI</span>
                <br />
                Automation Systems
                <br />
                <span className="text-white">That Scale Businesses</span>
              </h1>

              <p
                className="text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200"
                style={{ color: '#9CA3AF' }}
              >
                Helping startups and growing companies eliminate manual work using{' '}
                <span style={{ color: '#FF6A00' }}>n8n</span>,{' '}
                <span style={{ color: '#FF6A00' }}>LLM integrations</span>, and scalable SaaS
                architectures. I design systems that work 24/7 — so your team doesn&apos;t have to.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up delay-300">
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange text-base px-8 py-4"
                >
                  <span>Book a Free Strategy Call →</span>
                </a>
                <Link href="/case-studies" className="btn-ghost text-base px-8 py-4">
                  View Case Studies
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center gap-4 animate-fade-in-up delay-400">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" style={{ color: '#FF6A00' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>
                  Trusted by SaaS founders and scaling businesses
                </span>
              </div>
            </div>

            {/* ── RIGHT: Portrait Image ── */}
            <div className="flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="relative" style={{ isolation: 'isolate' }}>

                {/* Deep radial glow behind photo */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: '-60px',
                    background:
                      'radial-gradient(ellipse 70% 75% at 50% 58%, rgba(255,106,0,0.28) 0%, rgba(255,106,0,0.1) 45%, transparent 72%)',
                    zIndex: -1,
                  }}
                />

                {/* Floating photo with orange drop-glow */}
                <div
                  className="animate-float"
                  style={{
                    filter:
                      'drop-shadow(0 0 28px rgba(255,106,0,0.55)) drop-shadow(0 0 80px rgba(255,106,0,0.18))',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/noorulain.webp"
                    alt="Noor ul Ain — AI Automation Strategist"
                    style={{
                      display: 'block',
                      width: '100%',
                      maxWidth: '420px',
                      borderRadius: '28px',
                      border: '1.5px solid rgba(255,106,0,0.3)',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />

                  {/* Subtle rim-light overlay on image */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      borderRadius: '28px',
                      background:
                        'linear-gradient(135deg, rgba(255,140,26,0.08) 0%, transparent 35%, transparent 65%, rgba(255,77,0,0.08) 100%)',
                    }}
                  />
                </div>

                {/* Floating chip — top right */}
                <div
                  className="absolute -top-4 -right-5 px-4 py-2 rounded-xl text-xs font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)',
                    boxShadow: '0 0 20px rgba(255,106,0,0.55)',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                  }}
                >
                  🤖 AI Automation Expert
                </div>

                {/* Floating chip — bottom left */}
                <div
                  className="absolute -bottom-4 -left-5 px-4 py-2 rounded-xl text-xs font-bold text-white glass"
                  style={{
                    border: '1px solid rgba(255,106,0,0.35)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.55)',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                  }}
                >
                  ⚡ n8n &amp; LLM Architect
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section
        className="section-pad-sm border-y"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(26,26,31,0.5)' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black mb-1 text-gradient-orange">{stat.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES PREVIEW
      ═══════════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-label justify-center">What I Build</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              AI Automation Services
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: '#9CA3AF' }}>
              High-ticket automation systems designed to deliver measurable ROI — from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="card p-8 group">
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-orange transition-all">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
                  {service.solution.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="tag">{tool}</span>
                  ))}
                </div>
                <p className="text-sm font-bold" style={{ color: '#FF6A00' }}>{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-ghost px-8 py-4 text-base">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════ */}
      <section className="section-pad-sm" style={{ background: 'rgba(26,26,31,0.3)' }}>
        <div className="container-custom">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-8"
            style={{ color: '#6B7280' }}
          >
            Technology Stack I Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#9CA3AF',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CASE STUDIES PREVIEW
      ═══════════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-label justify-center">Proof of Results</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Real Results for Real Businesses
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: '#9CA3AF' }}>
              Not just promises — measurable outcomes that directly impact revenue and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="card p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="tag">{study.industry}</span>
                  <span className="text-xs" style={{ color: '#6B7280' }}>{study.client}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{study.client} Automation</h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#9CA3AF' }}>
                  {study.problem.slice(0, 100)}...
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.slice(0, 2).map((result, i) => (
                    <div key={i} className="highlight-box text-center">
                      <p className="font-black text-xl" style={{ color: '#FF6A00' }}>{result.value}</p>
                      <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{result.metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/case-studies" className="btn-ghost px-8 py-4 text-base">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-sm opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,106,0,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label justify-center">Ready to Automate?</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Let&apos;s Build Your{' '}
              <span className="text-gradient-orange">AI Automation System</span>
            </h2>
            <p className="text-xl mb-10" style={{ color: '#9CA3AF' }}>
              Book a free 30-minute strategy call. We&apos;ll map your biggest operational
              bottlenecks and design a custom automation roadmap for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-lg px-10 py-5"
              >
                <span>Book Free Strategy Call →</span>
              </a>
              <Link href="/contact" className="btn-ghost text-lg px-10 py-5">
                Send a Message
              </Link>
            </div>
            <p className="text-sm mt-6" style={{ color: '#6B7280' }}>
              No commitment. No sales pitch. Just a strategic conversation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
