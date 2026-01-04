import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export const metadata: Metadata = generateMetadata({
    title: 'Experience',
    description: `Professional experience of ${portfolioData.personal.name} including roles at ${portfolioData.experiences.slice(0, 3).map(e => e.company).join(', ')}. ${portfolioData.education.degree} from ${portfolioData.education.institution}.`,
    keywords: [
        'Experience',
        'Work Experience',
        'Career',
        'Education',
        ...portfolioData.experiences.map(e => e.company),
        portfolioData.education.institution,
    ],
    canonicalUrl: `${siteUrl}/experience`,
});
