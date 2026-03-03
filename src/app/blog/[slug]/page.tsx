import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants";

export const dynamic = 'force-dynamic';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (!post) return {};

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt || "",
            images: post.featuredImage ? [post.featuredImage] : [],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug, published: true },
    });

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#0A0A0B] pt-32 pb-24">
            <div className="container-custom max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                        <span>📅 {formatDate(post.createdAt.toISOString())}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full" />
                        <span className="text-orange-500">Insights</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                    {post.featuredImage && (
                        <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-orange-900/10 mb-12">
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    )}
                </header>

                {/* Content */}
                <div
                    className="prose prose-invert prose-orange max-w-none 
                        prose-headings:font-black prose-headings:text-white
                        prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg
                        prose-strong:text-white prose-blockquote:border-orange-500
                        prose-a:text-orange-500 hover:prose-a:text-orange-400
                        prose-img:rounded-3xl prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer */}
                <footer className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
                    <p className="text-gray-500 font-medium">Enjoyed this insight? Let's connect on LinkedIn.</p>
                    <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all border border-white/10"
                    >
                        Connect with Noor ul Ain
                    </a>
                </footer>
            </div>
        </article>
    );
}
