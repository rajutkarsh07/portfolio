import { useState, useEffect } from 'react';

interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    topics: string[];
    created_at: string;
    updated_at: string;
    pushed_at: string;
}

interface PinnedProject {
    title: string;
    description: string;
    language: string;
    github: string;
    live: string;
    stars: number;
    forks: number;
    isForked: boolean;
    topics: string[];
}

interface UseGitHubReposResult {
    repos: PinnedProject[];
    loading: boolean;
    error: string | null;
}

export function useGitHubRepos(username: string, count: number = 6): UseGitHubReposResult {
    const [repos, setRepos] = useState<PinnedProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch user's public repositories sorted by updated time
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=30&type=owner`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data: GitHubRepo[] = await response.json();

                // Filter and sort repos:
                // 1. Exclude forks (unless they have significant stars)
                // 2. Sort by stars + recent activity
                const sortedRepos = data
                    .filter(repo => !repo.fork || repo.stargazers_count > 5)
                    .sort((a, b) => {
                        // Prioritize by stars, then by recent push
                        const scoreA = a.stargazers_count * 10 + (new Date(a.pushed_at).getTime() / 1e12);
                        const scoreB = b.stargazers_count * 10 + (new Date(b.pushed_at).getTime() / 1e12);
                        return scoreB - scoreA;
                    })
                    .slice(0, count);

                // Transform to PinnedProject format
                const pinnedProjects: PinnedProject[] = sortedRepos.map(repo => ({
                    title: repo.name,
                    description: repo.description || 'No description available',
                    language: repo.language || 'Unknown',
                    github: repo.html_url,
                    live: repo.homepage || '',
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    isForked: repo.fork,
                    topics: repo.topics || [],
                }));

                setRepos(pinnedProjects);
            } catch (err) {
                console.error('GitHub API error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch repos');
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username, count]);

    return { repos, loading, error };
}
