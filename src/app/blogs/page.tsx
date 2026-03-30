import { ArrowLeft, BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personal } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | " + personal.name,
    description: "Read my latest thoughts, learnings, and experiences on Medium.",
};

export default async function Blogs() {
    const username = personal.mediumUsername || "@utkarshraj1306";
    // Using rss2json to convert Medium RSS to JSON
    const rssUrl = `https://medium.com/feed/${username}`;
    let items: any[] = [];
    let error = false;

    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.status === 'ok') {
            items = data.items || [];
        } else {
            error = true;
        }
    } catch (e) {
        error = true;
    }

    return (
        <div className="min-h-screen bg-background relative flex flex-col">
            <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

            <Navbar />

            <main className="pt-24 pb-16 relative z-10 flex-1">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                        
                        <div className="stagger-children">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                <BookOpen className="h-4 w-4" />
                                Writings
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Latest <span className="text-primary">Blogs</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                Thoughts, learnings, and experiences I've shared on Medium.
                            </p>
                        </div>
                    </div>

                    {error ? (
                        <div className="text-center py-16 bg-card border border-border rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Failed to load blogs</h3>
                            <p className="text-muted-foreground mb-6">Could not fetch from Medium at the moment.</p>
                            <Button asChild>
                                <a href={`https://medium.com/${username}`} target="_blank" rel="noopener noreferrer">
                                    Visit my Medium Profile
                                </a>
                            </Button>
                        </div>
                    ) : items.length === 0 ? (
                        <div className="text-center py-16 bg-card border border-border rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">No blogs found</h3>
                            <p className="text-muted-foreground mb-6">Looks like I haven't published any articles yet.</p>
                            <Button asChild>
                                <a href={`https://medium.com/${username}`} target="_blank" rel="noopener noreferrer">
                                    Visit my Medium Profile
                                </a>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((post: any) => {
                                // Extract a snippet stripping HTML tags
                                const rawText = post.description.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
                                const snippet = rawText.length > 150 ? rawText.substring(0, 150) + "..." : rawText;
                                
                                const date = new Date(post.pubDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                });
                                
                                return (
                                    <a
                                        key={post.guid}
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col relative overflow-hidden h-full"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        
                                        <div className="relative z-10 flex flex-col h-full">
                                            {post.thumbnail && (
                                                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-secondary border border-border">
                                                    {/* Using img instead of Next Image to avoid external domain config issues */}
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={post.thumbnail}
                                                        alt={post.title}
                                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                            
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-2 mb-3">
                                                    {post.title}
                                                </h3>
                                                
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {snippet}
                                                </p>
                                                
                                                {post.categories && post.categories.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                                        {post.categories.slice(0, 3).map((cat: string) => (
                                                            <span key={cat} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                                                {cat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                
                                                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        {date}
                                                    </div>
                                                    <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1.5 text-sm font-medium">
                                                        Read <ExternalLink className="h-3.5 w-3.5" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                    
                    {items.length > 0 && (
                        <div className="text-center mt-16 pb-8">
                            <Button size="lg" variant="outline" asChild className="gap-2 hover:bg-primary/5">
                                <a
                                    href={`https://medium.com/${username}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="h-5 w-5" />
                                    View on Medium
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
