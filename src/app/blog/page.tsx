import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';
import { blogPosts } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import BlogNewsletter from './BlogNewsletter';

export const metadata: Metadata = {
    title: 'AI Automation Blog | n8n, LLM & SaaS Insights',
    description:
        'Expert insights on AI automation, n8n workflow design, LLM integrations, and SaaS scalability from AI Automation Strategist Noor ul Ain.',
    alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

const categories = [
    'All',
    'n8n Automation',
    'LLM Integration',
    'AI Agents',
    'Business Strategy',
    'SaaS Development',
];

export default function BlogPage() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <>
            {/* HERO */}
            <section className="pt-32 pb-20 relative overflow-hidden tech-grid">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <p className="section-label justify-center">Blog</p>
                    <h1 className="text-[28px] xs:text-[32px] sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.2] lg:leading-[1.1]">
                        AI Automation{' '}
                        <span className="text-gradient-orange">Insights &amp; Strategies</span>
                    </h1>
                    <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
                        Deep-dive guides, technical breakdowns, and strategic frameworks on AI automation, n8n,
                        LLM integrations, and SaaS scalability.
                    </p>
                </div>
            </section>

            <section className="section-pad">
                <div className="container-custom">
                    {/* Categories — static display only */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((cat, i) => (
                            <span
                                key={cat}
                                className="px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all hover:scale-105"
                                style={
                                    i === 0
                                        ? { background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)', color: 'white' }
                                        : {
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: '#9CA3AF',
                                        }
                                }
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Featured Post */}
                    <div className="card p-8 md:p-10 mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="tag">{featured.category}</span>
                            <span
                                className="text-xs font-bold uppercase tracking-widest"
                                style={{ color: '#FF6A00' }}
                            >
                                Featured
                            </span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="text-base leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
                                    {featured.excerpt}
                                </p>
                                <div
                                    className="flex items-center gap-5 text-sm mb-6"
                                    style={{ color: '#6B7280' }}
                                >
                                    <span>📅 {formatDate(featured.date)}</span>
                                    <span>⏱️ {featured.readTime}</span>
                                </div>
                                <Link href={`/blog/${featured.slug}`} className="btn-orange text-sm">
                                    <span>Read Article →</span>
                                </Link>
                            </div>
                            <div
                                className="rounded-xl p-8 relative overflow-hidden text-center"
                                style={{
                                    background:
                                        'linear-gradient(135deg, rgba(255,106,0,0.08), rgba(255,106,0,0.03))',
                                    border: '1px solid rgba(255,106,0,0.15)',
                                }}
                            >
                                <div className="text-7xl mb-4">📡</div>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {featured.tags.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {rest.map((post) => (
                            <article key={post.id} className="card p-7 flex flex-col group">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="tag">{post.category}</span>
                                    <span className="text-xs" style={{ color: '#6B7280' }}>
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-gradient-orange transition-all">
                                    {post.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-6 flex-1"
                                    style={{ color: '#9CA3AF' }}
                                >
                                    {post.excerpt.slice(0, 140)}...
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-md"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                color: '#6B7280',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs" style={{ color: '#6B7280' }}>
                                        {formatDate(post.date)}
                                    </span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-sm font-bold transition-colors"
                                        style={{ color: '#FF6A00' }}
                                    >
                                        Read →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter — client component */}
                    <BlogNewsletter />
                </div>
            </section>
        </>
    );
}
