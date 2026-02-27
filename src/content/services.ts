import type { Service } from '@/types';

export const services: Service[] = [
    {
        id: 'ai-workflow-architecture',
        icon: '⚡',
        title: 'AI Workflow Architecture',
        problem:
            'Your team is drowning in repetitive manual processes that eat hours, create errors, and kill growth potential.',
        solution:
            'I design end-to-end intelligent workflow systems that connect your tools, data sources, and teams — eliminating human bottlenecks with smart automation.',
        tools: ['n8n', 'Python', 'OpenAI API', 'Webhooks', 'REST APIs', 'PostgreSQL'],
        outcome:
            'Reduce manual operations by 80%+ and free your team to focus on high-value strategic work.',
        price: 'From $3,000',
    },
    {
        id: 'n8n-automation-systems',
        icon: '🔄',
        title: 'n8n Automation Systems',
        problem:
            'You know automation is possible but lack the technical expertise to build reliable, scalable n8n workflows that actually work in production.',
        solution:
            'I architect, build, and deploy production-grade n8n automation systems tailored to your business processes — complete with error handling, monitoring, and documentation.',
        tools: ['n8n', 'Docker', 'PostgreSQL', 'Redis', 'Webhooks', 'Custom Nodes'],
        outcome:
            'Fully automated business pipelines running 24/7 with zero manual intervention and full observability.',
        price: 'From $2,500',
    },
    {
        id: 'custom-llm-integrations',
        icon: '🧠',
        title: 'Custom LLM Integrations',
        problem:
            'Off-the-shelf AI tools don\'t fit your workflow, your data, or your customers\' specific needs.',
        solution:
            'I build custom LLM-powered applications — from intelligent document processors to AI copilots — deeply integrated with your existing SaaS stack.',
        tools: ['OpenAI', 'LangChain', 'Anthropic', 'Python', 'FastAPI', 'Vector DBs'],
        outcome:
            'AI-powered features that deliver tangible ROI, reduce support load, and create competitive advantage.',
        price: 'From $5,000',
    },
    {
        id: 'saas-system-development',
        icon: '🏗️',
        title: 'SaaS & Scalable System Development',
        problem:
            'Your SaaS product needs robust backend systems, but building them from scratch is slow, expensive, and error-prone.',
        solution:
            'I architect and build scalable SaaS backends using modern cloud infrastructure — designed to handle growth from day one.',
        tools: ['Python', 'FastAPI', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL'],
        outcome:
            'Production-ready SaaS infrastructure that scales with your user base and maintains 99.9% uptime.',
        price: 'From $8,000',
    },
    {
        id: 'business-process-automation',
        icon: '📊',
        title: 'Business Process Automation',
        problem:
            'Critical business processes — reporting, onboarding, invoicing, data sync — are stuck in spreadsheets and email chains.',
        solution:
            'I map, redesign, and automate your core business processes end-to-end, integrating all your tools into a single intelligent operational system.',
        tools: ['n8n', 'Zapier Enterprise', 'Airtable', 'Notion API', 'Slack', 'Google Workspace'],
        outcome:
            'Save 40+ hours/week per team member and eliminate costly human errors across operations.',
        price: 'From $1,500',
    },
];
