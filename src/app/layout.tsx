import type { Metadata } from 'next'
import './globals.css'
import { Providers } from "@/components/Providers";
import { SocialSidebar } from "@/components/SocialSidebar";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { generateMetadata, generateStructuredData, generateWebsiteStructuredData } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshraj.dev';

export const metadata: Metadata = generateMetadata({
    title: portfolioData.personal.name,
    description: `${portfolioData.personal.bio} Explore my portfolio featuring projects in ${portfolioData.skills.simple.slice(0, 5).map(s => s.name).join(', ')} and more.`,
    keywords: [
        'Portfolio',
        'Web Development',
        'Software Engineering',
        'UI/UX Design',
        'Competitive Programming',
        portfolioData.education.institution,
        portfolioData.personal.currentCompany,
    ],
    canonicalUrl: siteUrl,
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const personSchema = generateStructuredData();
    const websiteSchema = generateWebsiteStructuredData();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Preload critical fonts */}
                <link
                    rel="preload"
                    href="/cabinet-grotesk/CabinetGrotesk-Regular.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/cabinet-grotesk/CabinetGrotesk-Bold.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/cabinet-grotesk/CabinetGrotesk-Medium.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
            </head>
            <body className="bg-background text-foreground font-sans antialiased" suppressHydrationWarning>
                <Providers>
                    <ScrollToTop />
                    <SocialSidebar />
                    <div className="flex-grow w-full">
                        {children}
                    </div>
                    <Toaster />
                    <Sonner />
                </Providers>
            </body>
        </html>
    )
}
