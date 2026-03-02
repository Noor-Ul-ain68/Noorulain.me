import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';

const FooterLinks = {
    Services: [
        { label: 'AI Workflow Architecture', href: '/services#ai-workflow-architecture' },
        { label: 'n8n Automation Systems', href: '/services#n8n-automation-systems' },
        { label: 'Custom LLM Integrations', href: '/services#custom-llm-integrations' },
        { label: 'SaaS System Development', href: '/services#saas-system-development' },
        { label: 'Business Process Automation', href: '/services#business-process-automation' },
    ],
    Company: [
        { label: 'About', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0D0D10' }}>
            <div className="container-custom py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Link href="/" className="flex items-center gap-3 mb-3 w-fit">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xs" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>
                                NA
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">Noor ul Ain</p>
                                <p className="text-[10px]" style={{ color: '#FF6A00' }}>AI Automation Strategist</p>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-4 max-w-sm" style={{ color: '#9CA3AF' }}>
                            Building intelligent AI automation systems that eliminate manual work and scale businesses. Expert in n8n, LLM integrations, and SaaS architecture.
                        </p>
                        <div className="flex items-center gap-3 mb-8 lg:mb-0">
                            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.2)', color: '#FF6A00' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.2)', color: '#FF6A00' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href={`mailto:${SITE_CONFIG.email}`} className="w-9 h-9 lg:w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.2)', color: '#FF6A00' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Services</h3>
                        <ul className="space-y-3">
                            {FooterLinks.Services.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm transition-colors hover:text-orange-400" style={{ color: '#9CA3AF' }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Company</h3>
                        <ul className="space-y-3">
                            {FooterLinks.Company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm transition-colors hover:text-orange-400" style={{ color: '#9CA3AF' }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                            <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="block text-center btn-orange text-sm">
                                <span>Book Strategy Call →</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="divider mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#6B7280' }}>
                    <p>© 2024 Noor ul Ain. All rights reserved.</p>
                    <p>AI Automation Strategist · n8n Expert · LLM Architect</p>
                </div>
            </div>
        </footer>
    );
}
