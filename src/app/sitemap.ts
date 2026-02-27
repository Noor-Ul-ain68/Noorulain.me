import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants';
import { blogPosts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { url: SITE_CONFIG.url, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
        { url: `${SITE_CONFIG.url}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${SITE_CONFIG.url}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${SITE_CONFIG.url}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${SITE_CONFIG.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${SITE_CONFIG.url}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
    ];

    const blogPages = blogPosts.map((post) => ({
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
