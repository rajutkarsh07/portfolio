import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export const metadata: Metadata = generateMetadata({
    title: 'About',
    description: `Learn more about ${portfolioData.personal.name}, a ${portfolioData.personal.title} with expertise in ${portfolioData.skills.simple.slice(0, 8).map(s => s.name).join(', ')}. Currently working at ${portfolioData.personal.currentCompany}.`,
    keywords: [
        'About',
        'Biography',
        'Skills',
        'Coding Profiles',
        'Codeforces',
        'LeetCode',
        'GitHub',
        'Competitive Programming',
    ],
    canonicalUrl: `${siteUrl}/about`,
});
