"use client";

import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { codingProfiles, about, personal } from "@/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCodingProfiles } from "@/hooks/useCodingRatings";
import { useEffect } from "react";

// SEO metadata is handled in layout.tsx for client components
// We'll add structured data via script tag

export default function About() {
    // Fetch real-time data from APIs
    const profiles = useCodingProfiles({
        codeforces: 'utkarsh_raj_13',
        leetcode: 'utkarsh_raj_13',
        github: 'rajutkarsh07',
    });

    return (
        <div className="min-h-screen bg-background relative">
            {/* Background grid - same as home */}
            <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

            <Navbar />

            <main className="pt-24 pb-16 relative z-10">
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    {/* Header */}
                    <div className="mb-20">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>

                        <div className="stagger-children">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                About Me
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Get to <span className="text-primary">Know Me</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                                I'm a passionate developer who loves building beautiful and functional web applications.
                            </p>
                        </div>
                    </div>

                    {/* Main Content - Two Column Layout */}
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-24 items-start">
                        {/* About Text - Takes more space */}
                        <div className="lg:col-span-3 space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Hello! I'm <span className="text-primary">{personal.name}</span>
                                </h2>
                                <div className="space-y-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                                    {about.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Fun Fact Card */}
                            {personal.funFact && (
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
                                    <p className="text-sm font-medium text-primary mb-2">Fun Fact</p>
                                    <p className="text-foreground">{personal.funFact}</p>
                                </div>
                            )}
                        </div>

                        {/* Profile Photo */}
                        <div className="lg:col-span-2 relative">
                            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated group">
                                <img
                                    src={personal.aboutImage}
                                    alt={personal.name}
                                    className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                                {/* Name overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-2xl font-bold text-foreground">{personal.name}</p>
                                    <p className="text-primary font-medium">{personal.title}</p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />

                            {/* Floating accent */}
                            <div className="absolute top-6 -left-3 w-6 h-6 bg-primary rounded-full animate-float opacity-60" />
                            <div className="absolute bottom-12 -right-3 w-4 h-4 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                        </div>
                    </div>

                    {/* Skills Section - Interactive Marquee */}
                    <SkillsMarquee />

                    {/* Coding Profiles - Premium Design */}
                    <div>
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                Coding Profiles
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold">Competitive Programming & GitHub</h2>
                        </div>

                        <div className="space-y-5">
                            {/* Codeforces Card */}
                            <a
                                href={codingProfiles.find(p => p.name === 'Codeforces')?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-card via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                                        {/* Logo & Username */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                                    <img
                                                        src={codingProfiles.find(p => p.name === 'Codeforces')?.logo}
                                                        alt="Codeforces"
                                                        className="h-9 w-9 object-contain drop-shadow-lg"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Codeforces</h3>
                                                <p className="text-sm text-muted-foreground">@{profiles.codeforces.username || 'utkarsh_raj_13'}</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex-1 flex flex-wrap items-center gap-6 md:justify-end">
                                            {profiles.codeforces.loading ? (
                                                <Loader2 className="h-5 w-5 text-primary animate-spin" />
                                            ) : profiles.codeforces.error ? (
                                                <span className="text-muted-foreground text-sm">Unable to load ratings</span>
                                            ) : (
                                                <>
                                                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/50 backdrop-blur-sm">
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Rating</span>
                                                        <span className="text-xl font-bold text-primary">{profiles.codeforces.rating}</span>
                                                        {profiles.codeforces.rank && (
                                                            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-medium">
                                                                {profiles.codeforces.rank}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/50 backdrop-blur-sm">
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Max</span>
                                                        <span className="text-xl font-bold">{profiles.codeforces.maxRating}</span>
                                                        {profiles.codeforces.maxRank && (
                                                            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-medium">
                                                                {profiles.codeforces.maxRank}
                                                            </span>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* LeetCode Card */}
                            <a
                                href={codingProfiles.find(p => p.name === 'LeetCode')?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-card via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                                        {/* Logo & Username */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                                    <img
                                                        src={codingProfiles.find(p => p.name === 'LeetCode')?.logo}
                                                        alt="LeetCode"
                                                        className="h-9 w-9 object-contain drop-shadow-lg"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">LeetCode</h3>
                                                <p className="text-sm text-muted-foreground">@{profiles.leetcode.username || 'utkarsh_raj_13'}</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex-1 flex flex-wrap items-center gap-4 md:justify-end">
                                            {profiles.leetcode.loading ? (
                                                <Loader2 className="h-5 w-5 text-primary animate-spin" />
                                            ) : profiles.leetcode.error ? (
                                                <span className="text-muted-foreground text-sm">Unable to load stats</span>
                                            ) : (
                                                <>
                                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 backdrop-blur-sm">
                                                        <span className="text-xl font-bold text-primary">{profiles.leetcode.totalSolved}</span>
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Solved</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 backdrop-blur-sm">
                                                        <span className="text-sm font-bold text-green-500">{profiles.leetcode.easySolved}</span>
                                                        <span className="text-xs text-green-400/80">Easy</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 backdrop-blur-sm">
                                                        <span className="text-sm font-bold text-amber-500">{profiles.leetcode.mediumSolved}</span>
                                                        <span className="text-xs text-amber-400/80">Medium</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 backdrop-blur-sm">
                                                        <span className="text-sm font-bold text-red-500">{profiles.leetcode.hardSolved}</span>
                                                        <span className="text-xs text-red-400/80">Hard</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* GitHub Card */}
                            <a
                                href={codingProfiles.find(p => p.name === 'GitHub')?.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-card via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-gray-500/5 to-zinc-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                                        {/* Logo & Username */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                                    <img
                                                        src={codingProfiles.find(p => p.name === 'GitHub')?.logo}
                                                        alt="GitHub"
                                                        className="h-9 w-9 object-contain drop-shadow-lg dark:invert"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">GitHub</h3>
                                                <p className="text-sm text-muted-foreground">@{profiles.github.username || 'rajutkarsh07'}</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex-1 flex flex-wrap items-center gap-4 md:justify-end">
                                            {profiles.github.loading ? (
                                                <Loader2 className="h-5 w-5 text-primary animate-spin" />
                                            ) : profiles.github.error ? (
                                                <span className="text-muted-foreground text-sm">Unable to load stats</span>
                                            ) : (
                                                <>
                                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 backdrop-blur-sm">
                                                        <span className="text-xl font-bold text-primary">{profiles.github.repos}</span>
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Repos</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 backdrop-blur-sm">
                                                        <span className="text-lg font-bold">{profiles.github.followers}</span>
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Followers</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 backdrop-blur-sm">
                                                        <span className="text-lg font-bold">{profiles.github.following}</span>
                                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Following</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
