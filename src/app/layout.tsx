import type { Metadata } from 'next'
import './globals.css'
import { Providers } from "@/components/Providers";
import { SocialSidebar } from "@/components/SocialSidebar";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'My Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-background text-foreground font-sans antialiased">
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
