import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export const metadata: Metadata = generateMetadata({
    title: 'Contact',
    description: `Get in touch with ${portfolioData.personal.name}. Available for freelance work, collaborations, and full-time opportunities. ${portfolioData.contact.locationDescription}.`,
    keywords: [
        'Contact',
        'Hire',
        'Freelance',
        'Collaboration',
        'Get in Touch',
        'Email',
    ],
    canonicalUrl: `${siteUrl}/contact`,
});
