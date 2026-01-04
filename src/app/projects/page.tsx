"use client";

import Image from "next/image";
import { Github, ExternalLink, ArrowLeft, Star, GitFork, Folder, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, socials } from "@/data";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";

export default function Projects() {
    // Fetch pinned repos from GitHub API
    const { repos: githubRepos, loading: reposLoading, error: reposError } = useGitHubRepos('rajutkarsh07', 6);

    return (
        <div className="min-h-screen bg-background relative">
            {/* Background grid - same as home */}
            <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

            <Navbar />

            <main className="pt-24 pb-16 relative z-10">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <div className="mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>

                        <div className="stagger-children">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                Portfolio
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Major <span className="text-primary">Projects</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                A curated selection of projects I've worked on. Each one represents a unique challenge and learning experience.
                            </p>
                        </div>
                    </div>

                    {/* Featured Projects */}
                    <div className="space-y-32 mb-32">
                        {projects.major.filter(p => p.featured).map((project, index) => (
                            <div
                                key={project.title}
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className="relative group">
                                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                                        <div className="aspect-[16/10] relative overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 688px"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                priority={index === 0}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                                            Featured Project
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                                    </div>

                                    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <Button variant="outline" size="lg" asChild className="gap-2">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-5 w-5" />
                                                View Code
                                            </a>
                                        </Button>
                                        <Button size="lg" asChild className="gap-2">
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-5 w-5" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pinned Projects from GitHub */}
                    <div>
                        <div className="flex items-center justify-center gap-3 mb-12">
                            <Github className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-bold">GitHub Repositories</h2>
                        </div>

                        {reposLoading ? (
                            <div className="flex items-center justify-center py-16">
                                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                <span className="ml-3 text-muted-foreground">Loading repositories...</span>
                            </div>
                        ) : reposError ? (
                            <div className="text-center py-16">
                                {/* <p className="text-muted-foreground">Failed to load repositories. Using cached data.</p> */}
                                {/* Fallback to static data */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                    {projects.pinned.map((project) => (
                                        <a
                                            key={project.title}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-secondary">
                                                        <Folder className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-muted-foreground">{project.language}</span>
                                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Star className="h-4 w-4" />
                                                        {project.stars}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <GitFork className="h-4 w-4" />
                                                        {project.forks}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {githubRepos.map((repo) => {
                                    // Language color mapping
                                    const languageColors: Record<string, string> = {
                                        'JavaScript': 'bg-yellow-400',
                                        'TypeScript': 'bg-blue-500',
                                        'Python': 'bg-green-500',
                                        'Java': 'bg-orange-500',
                                        'C++': 'bg-pink-500',
                                        'C': 'bg-gray-500',
                                        'HTML': 'bg-red-500',
                                        'CSS': 'bg-purple-500',
                                        'SCSS': 'bg-pink-400',
                                        'Vue': 'bg-emerald-500',
                                        'Rust': 'bg-orange-600',
                                        'Go': 'bg-cyan-500',
                                        'Swift': 'bg-orange-400',
                                        'Kotlin': 'bg-purple-400',
                                        'Ruby': 'bg-red-600',
                                        'PHP': 'bg-indigo-400',
                                    };

                                    return (
                                        <a
                                            key={repo.title}
                                            href={repo.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col relative overflow-hidden"
                                        >
                                            {/* Hover gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                                                            <Folder className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                                                {repo.title}
                                                            </h3>
                                                            {repo.isForked && (
                                                                <p className="text-xs text-muted-foreground">Forked</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>

                                                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
                                                    {repo.description}
                                                </p>

                                                {/* Topics/Tags */}
                                                {repo.topics && repo.topics.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                                        {repo.topics.slice(0, 3).map((topic: string) => (
                                                            <span
                                                                key={topic}
                                                                className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                                                            >
                                                                {topic}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <span className="flex items-center gap-1.5">
                                                            <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-muted-foreground'}`} />
                                                            {repo.language}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        {repo.stars > 0 && (
                                                            <span className="flex items-center gap-1">
                                                                <Star className="h-4 w-4" />
                                                                {repo.stars}
                                                            </span>
                                                        )}
                                                        {repo.forks > 0 && (
                                                            <span className="flex items-center gap-1">
                                                                <GitFork className="h-4 w-4" />
                                                                {repo.forks}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-16">
                        <Button size="lg" variant="outline" asChild className="gap-2">
                            <a
                                href={socials.find(s => s.name === "GitHub")?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-5 w-5" />
                                View All Repositories
                            </a>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
