import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/content/blog';
import { SITE_CONFIG } from '@/constants';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: { canonical: `${SITE_CONFIG.url}/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            tags: post.tags,
        },
    };
}

const sampleContent: Record<string, string[]> = {
    default: [
        'AI automation is no longer a luxury reserved for enterprise companies with massive engineering teams. Today, platforms like n8n, combined with the power of large language models, have made it possible for any business — from 5-person startups to 500-person scale-ups — to build sophisticated automation systems that run 24/7 without human intervention.',
        'The core insight is this: most businesses are hemorrhaging time and money on work that a properly designed automation system could handle faster, cheaper, and more accurately. The question isn\'t whether you should automate — it\'s which processes to automate first and how to build systems that actually scale.',
        'In this article, we\'ll break down the exact strategic framework I use when approaching automation projects for clients, the most common mistakes businesses make when trying to automate, and the specific tools and architectures that deliver the highest ROI in the shortest time.',
        'The first step in any automation project is process mapping. Before writing a single line of code or building a single n8n workflow, you need to have a crystal-clear understanding of exactly what happens in the process you want to automate — every step, every decision point, every edge case, every exception.',
        'Once you\'ve mapped your processes, prioritize them by a simple framework: Impact × Frequency ÷ Complexity. High-impact processes that happen frequently and aren\'t overly complex are your highest-ROI automation targets. These are the ones that will deliver measurable results fastest and build organizational confidence in automation.',
        'The technology stack you choose matters enormously. n8n gives you the visual workflow layer that makes complex automation accessible and maintainable. Python handles the heavy lifting — data processing, API integrations, custom logic. And LLMs like GPT-4 or Claude add the intelligence layer that transforms simple automation into genuinely smart systems.',
        'The key differentiator between automation that delivers ROI and automation that becomes a maintenance nightmare is error handling. Production-grade automation systems need robust error handling, alerting, retry logic, and observability from day one. This is what separates amateur implementations from systems that actually run reliably in production.',
        'The businesses that win with automation treat it as a strategic capability, not a one-time project. Start with your highest-impact bottleneck, build it right, measure the results, then use those results to justify and prioritize the next automation. Over 12–24 months, this compounding approach transforms how the entire business operates.',
    ],
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
    const content = sampleContent[slug] || sampleContent.default;

    return (
        <>
            {/* HERO */}
            <section className="pt-32 pb-16 relative overflow-hidden tech-grid">
                <div className="absolute inset-0 gradient-radial-orange pointer-events-none" />
                <div className="container-custom relative z-10 max-w-3xl mx-auto">
                    <div className="mb-6">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm transition-colors" style={{ color: '#9CA3AF' }}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                    <span className="tag mb-5 inline-block">{post.category}</span>
                    <h1 className="text-[28px] xs:text-[32px] sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.2] lg:leading-[1.1]">{post.title}</h1>
                    <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: '#6B7280' }}>
                        <span className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>N</div>
                            Noor ul Ain
                        </span>
                        <span>📅 {formatDate(post.date)}</span>
                        <span>⏱️ {post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="section-pad">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Article */}
                        <article className="lg:col-span-3 prose max-w-none">
                            <p className="text-lg leading-relaxed mb-8 font-medium" style={{ color: '#E5E5E5' }}>{post.excerpt}</p>
                            <div className="divider mb-8" />
                            <div className="space-y-7">
                                {content.map((para, i) => (
                                    <p key={i} className="text-base leading-loose" style={{ color: '#9CA3AF' }}>{para}</p>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="divider my-10" />
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            {/* Author CTA */}
                            <div className="card p-8 mt-10 relative">
                                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 80% at 0% 100%, rgba(255,106,0,0.07) 0%, transparent 70%)' }} />
                                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-xl font-black text-white" style={{ background: 'linear-gradient(135deg, #FF8C1A, #FF4D00)' }}>NA</div>
                                    <div className="flex-1">
                                        <p className="font-black text-white text-lg mb-1">Noor ul Ain</p>
                                        <p className="text-sm mb-3" style={{ color: '#9CA3AF' }}>AI Automation Strategist · n8n Expert · LLM Architect</p>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>I help SaaS founders and scaling businesses eliminate manual work using intelligent AI automation. Book a free strategy call to discuss your project.</p>
                                        <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-sm">
                                            <span>Book a Free Strategy Call →</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-28 space-y-6">
                                {/* CTA */}
                                <div className="card p-6">
                                    <h3 className="font-black text-white mb-3 text-base">Ready to Automate?</h3>
                                    <p className="text-xs mb-5" style={{ color: '#9CA3AF' }}>Book a free 30-min strategy call and let&apos;s design your automation system.</p>
                                    <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer" className="btn-orange text-sm w-full justify-center">
                                        <span>Book Call →</span>
                                    </a>
                                </div>

                                {/* Related */}
                                <div className="card p-6">
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#FF6A00' }}>Related Articles</h3>
                                    <div className="space-y-4">
                                        {relatedPosts.map((rp) => (
                                            <Link key={rp.id} href={`/blog/${rp.slug}`} className="block group">
                                                <span className="tag mb-2 inline-block">{rp.category}</span>
                                                <p className="text-sm font-semibold text-white leading-snug group-hover:text-orange-400 transition-colors">{rp.title}</p>
                                                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{rp.readTime}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
