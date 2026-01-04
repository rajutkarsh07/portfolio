import { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/about', '/projects', '/experience', '/contact'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Add project pages if they have individual routes
    const projectRoutes = portfolioData.projects.major
        .filter(p => p.featured)
        .map((project) => ({
            url: `${siteUrl}/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

    return [...routes];
}
