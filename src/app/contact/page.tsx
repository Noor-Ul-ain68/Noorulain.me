import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Noor ul Ain | Book a Free AI Automation Strategy Call',
    description:
        'Book a free 30-minute strategy call with AI Automation Strategist Noor ul Ain. Discuss your project, identify automation opportunities, and get a tailored implementation roadmap.',
    alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
    return <ContactClient />;
}
