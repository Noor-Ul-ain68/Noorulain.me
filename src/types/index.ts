export interface NavItem {
    label: string;
    href: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    problem: string;
    solution: string;
    tools: string[];
    outcome: string;
    price?: string;
}

export interface CaseStudy {
    id: string;
    client: string;
    industry: string;
    problem: string;
    solution: string;
    stack: string[];
    results: Result[];
    image?: string;
}

export interface Result {
    metric: string;
    value: string;
    description: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    tags: string[];
}

export interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar?: string;
}
