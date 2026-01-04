import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export const metadata: Metadata = generateMetadata({
    title: 'Projects',
    description: `Explore ${portfolioData.personal.name}'s portfolio of web development projects including ${portfolioData.projects.major.map(p => p.title).join(', ')}. Full-stack applications built with React, Next.js, Node.js, and more.`,
    keywords: [
        'Projects',
        'Portfolio',
        'Web Development Projects',
        'Full Stack Projects',
        'React Projects',
        'Next.js Projects',
        ...portfolioData.projects.major.map(p => p.title),
    ],
    canonicalUrl: `${siteUrl}/projects`,
    ogImage: portfolioData.projects.major[0]?.image ? `${siteUrl}${portfolioData.projects.major[0].image}` : undefined,
});
