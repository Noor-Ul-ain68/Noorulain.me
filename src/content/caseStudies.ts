import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
    {
        id: 'saas-onboarding-automation',
        client: 'B2B SaaS Platform',
        industry: 'HR Tech',
        problem:
            'Manual client onboarding took 3–5 days per account. The operations team was handling 200+ emails weekly, copying data between tools, and manually provisioning accounts — causing delays and churn.',
        solution:
            'Built a fully automated onboarding pipeline using n8n that triggers on signup, provisions accounts, sends personalized email sequences, creates Notion workspaces, and notifies the team on Slack — all without human touch.',
        stack: ['n8n', 'PostgreSQL', 'Stripe API', 'SendGrid', 'Notion API', 'Slack API'],
        results: [
            { metric: 'Onboarding Time', value: '92%', description: 'Reduced from 5 days to 4 hours' },
            { metric: 'Team Hours Saved', value: '40hrs', description: 'Per week in manual operations' },
            { metric: 'Error Rate', value: '0%', description: 'Down from 15% manual errors' },
            { metric: 'Customer NPS', value: '+28pts', description: 'Improvement in onboarding satisfaction' },
        ],
    },
    {
        id: 'llm-document-processor',
        client: 'Legal Services Firm',
        industry: 'LegalTech',
        problem:
            'Lawyers were spending 6+ hours per day reviewing contracts, extracting key clauses, and summarizing documents for clients — a massive bottleneck on billable hours.',
        solution:
            'Developed a custom LLM-powered document processing pipeline that automatically ingests contracts, extracts key clauses, flags risk areas, generates executive summaries, and delivers structured reports via a web dashboard.',
        stack: ['Python', 'OpenAI GPT-4', 'LangChain', 'FastAPI', 'PostgreSQL', 'AWS S3'],
        results: [
            { metric: 'Review Time', value: '85%', description: 'Reduction per document' },
            { metric: 'Capacity Increase', value: '3x', description: 'More clients handled monthly' },
            { metric: 'ROI', value: '$180K', description: 'Annual billable hours recovered' },
            { metric: 'Accuracy', value: '97%', description: 'Clause extraction accuracy' },
        ],
    },
    {
        id: 'ecommerce-analytics-automation',
        client: 'DTC eCommerce Brand',
        industry: 'eCommerce',
        problem:
            'Marketing team was spending 15+ hours per week manually pulling data from Shopify, Meta Ads, Google Analytics, and TikTok to build performance reports — causing delayed decisions and missed optimization windows.',
        solution:
            'Built an automated multi-source data pipeline using n8n and Python that collects data from all platforms daily, processes KPIs, generates AI-written insights, and delivers a branded executive report every morning at 8AM.',
        stack: ['n8n', 'Python', 'Shopify API', 'Meta Graph API', 'Google Analytics 4', 'OpenAI', 'Google Sheets'],
        results: [
            { metric: 'Reporting Time', value: '15hrs', description: 'Saved per week on manual reports' },
            { metric: 'Decision Speed', value: '2x', description: 'Faster marketing optimization' },
            { metric: 'ROAS Improvement', value: '+34%', description: 'From faster campaign iteration' },
            { metric: 'Operational Cost', value: '$2,400', description: 'Saved monthly on reporting' },
        ],
    },
];
