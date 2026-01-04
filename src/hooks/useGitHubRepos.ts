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

                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                user(login: "${username}") {
                                    pinnedItems(first: ${count}, types: REPOSITORY) {
                                        nodes {
                                            ... on Repository {
                                                name
                                                description
                                                url
                                                homepageUrl
                                                stargazerCount
                                                forkCount
                                                isFork
                                                primaryLanguage {
                                                    name
                                                }
                                                repositoryTopics(first: 3) {
                                                    nodes {
                                                        topic {
                                                            name
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        `
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const json = await response.json();

                if (json.errors) {
                    throw new Error(json.errors[0].message);
                }

                const nodes = json.data?.user?.pinnedItems?.nodes || [];

                // Transform to PinnedProject format
                const pinnedProjects: PinnedProject[] = nodes.map((repo: any) => ({
                    title: repo.name,
                    description: repo.description || 'No description available',
                    language: repo.primaryLanguage?.name || 'Unknown',
                    github: repo.url,
                    live: repo.homepageUrl || '',
                    stars: repo.stargazerCount,
                    forks: repo.forkCount,
                    isForked: repo.isFork,
                    topics: repo.repositoryTopics?.nodes?.map((node: any) => node.topic.name) || [],
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
