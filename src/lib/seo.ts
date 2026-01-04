import { Metadata } from 'next';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
    noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description,
        keywords = [],
        ogImage = `${siteUrl}/assets/utkarsh.jpg`,
        canonicalUrl,
        noindex = false,
    } = config;

    const fullTitle = title === portfolioData.personal.name
        ? `${title} - ${portfolioData.personal.title}`
        : `${title} | ${portfolioData.personal.name}`;

    return {
        title: fullTitle,
        description,
        keywords: [
            portfolioData.personal.name,
            'Full Stack Developer',
            'Web Developer',
            'Software Engineer',
            'React Developer',
            'Next.js Developer',
            'TypeScript',
            'Node.js',
            ...keywords,
        ],
        authors: [{ name: portfolioData.personal.name }],
        creator: portfolioData.personal.name,
        publisher: portfolioData.personal.name,
        robots: noindex ? 'noindex, nofollow' : 'index, follow',
        alternates: canonicalUrl ? {
            canonical: canonicalUrl,
        } : undefined,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: canonicalUrl || siteUrl,
            siteName: portfolioData.personal.name,
            title: fullTitle,
            description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            creator: `@${portfolioData.socials.find(s => s.name === 'Twitter')?.username}`,
            images: [ogImage],
        },
        verification: {
            // Add your verification codes here
            // google: 'your-google-verification-code',
            // yandex: 'your-yandex-verification-code',
            // bing: 'your-bing-verification-code',
        },
    };
}

export function generateStructuredData() {
    const person = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: portfolioData.personal.name,
        jobTitle: portfolioData.personal.title,
        url: siteUrl,
        image: `${siteUrl}${portfolioData.personal.profileImage}`,
        email: portfolioData.contact.email,
        address: {
            '@type': 'PostalAddress',
            addressCountry: portfolioData.contact.location,
        },
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: portfolioData.education.institution,
        },
        worksFor: {
            '@type': 'Organization',
            name: portfolioData.personal.currentCompany,
        },
        sameAs: portfolioData.socials.map(social => social.url),
        knowsAbout: [
            ...portfolioData.skills.categories.Frontend.map(skill => skill.name),
            ...portfolioData.skills.categories.Backend.map(skill => skill.name),
        ],
    };

    return person;
}

export function generateWebsiteStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${portfolioData.personal.name} - Portfolio`,
        url: siteUrl,
        description: portfolioData.personal.bio,
        author: {
            '@type': 'Person',
            name: portfolioData.personal.name,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/projects?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.url}`,
        })),
    };
}

export function generateProjectStructuredData(project: {
    title: string;
    description: string;
    tech: string[];
    image?: string;
    github?: string;
    live?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        author: {
            '@type': 'Person',
            name: portfolioData.personal.name,
        },
        image: project.image ? `${siteUrl}${project.image}` : undefined,
        url: project.live,
        codeRepository: project.github,
        programmingLanguage: project.tech,
    };
}
