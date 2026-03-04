import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';
import { SITE_CONFIG } from '@/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | AI Automation Strategist & n8n Expert`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | AI Automation Strategist & n8n Expert`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | AI Automation Strategist & n8n Expert`,
    description: SITE_CONFIG.description,
    creator: '@noorulain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}/#person`,
      name: 'Noor ul Ain',
      url: SITE_CONFIG.url,
      jobTitle: 'AI Automation Strategist',
      description: SITE_CONFIG.description,
      email: SITE_CONFIG.email,
      sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
      knowsAbout: ['AI Automation', 'n8n Workflows', 'LLM Integration', 'SaaS Development', 'Python', 'Business Process Automation'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_CONFIG.url}/#service`,
      name: 'Noor ul Ain - AI Automation Consulting',
      url: SITE_CONFIG.url,
      description: 'Premium AI automation consulting services for SaaS founders and scaling businesses.',
      provider: { '@id': `${SITE_CONFIG.url}/#person` },
      serviceType: ['AI Workflow Architecture', 'n8n Automation', 'LLM Integration', 'SaaS Development', 'Business Process Automation'],
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        description: 'Free Strategy Call for qualified businesses',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
