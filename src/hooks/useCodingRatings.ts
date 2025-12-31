import { useState, useEffect } from 'react';

interface CodeforcesData {
    username: string;
    rating: number | null;
    maxRating: number | null;
    rank: string | null;
    maxRank: string | null;
    loading: boolean;
    error: string | null;
}

interface LeetCodeData {
    username: string;
    totalSolved: number | null;
    easySolved: number | null;
    mediumSolved: number | null;
    hardSolved: number | null;
    loading: boolean;
    error: string | null;
}

interface GitHubData {
    username: string;
    repos: number | null;
    followers: number | null;
    following: number | null;
    loading: boolean;
    error: string | null;
}

interface CodingProfiles {
    codeforces: CodeforcesData;
    leetcode: LeetCodeData;
    github: GitHubData;
}

const initialCodeforcesState: CodeforcesData = {
    username: '',
    rating: null,
    maxRating: null,
    rank: null,
    maxRank: null,
    loading: true,
    error: null,
};

const initialLeetCodeState: LeetCodeData = {
    username: '',
    totalSolved: null,
    easySolved: null,
    mediumSolved: null,
    hardSolved: null,
    loading: true,
    error: null,
};

const initialGitHubState: GitHubData = {
    username: '',
    repos: null,
    followers: null,
    following: null,
    loading: true,
    error: null,
};

export function useCodingProfiles(usernames: {
    codeforces: string;
    leetcode: string;
    github: string;
}) {
    const [profiles, setProfiles] = useState<CodingProfiles>({
        codeforces: { ...initialCodeforcesState, username: usernames.codeforces },
        leetcode: { ...initialLeetCodeState, username: usernames.leetcode },
        github: { ...initialGitHubState, username: usernames.github },
    });

    useEffect(() => {
        // Fetch Codeforces data
        const fetchCodeforcesData = async () => {
            try {
                const response = await fetch(
                    `https://codeforces.com/api/user.info?handles=${usernames.codeforces}`
                );
                const data = await response.json();

                if (data.status === 'OK' && data.result && data.result[0]) {
                    const user = data.result[0];
                    setProfiles(prev => ({
                        ...prev,
                        codeforces: {
                            username: usernames.codeforces,
                            rating: user.rating || null,
                            maxRating: user.maxRating || null,
                            rank: user.rank || null,
                            maxRank: user.maxRank || null,
                            loading: false,
                            error: null,
                        },
                    }));
                } else {
                    throw new Error('Invalid response');
                }
            } catch (error) {
                setProfiles(prev => ({
                    ...prev,
                    codeforces: {
                        ...prev.codeforces,
                        loading: false,
                        error: 'Failed to fetch',
                    },
                }));
            }
        };

        // Fetch LeetCode data - problem solved counts
        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch(
                    `https://alfa-leetcode-api.onrender.com/${usernames.leetcode}/solved`
                );
                const data = await response.json();

                if (data) {
                    setProfiles(prev => ({
                        ...prev,
                        leetcode: {
                            username: usernames.leetcode,
                            totalSolved: data.solvedProblem || data.totalSolved || null,
                            easySolved: data.easySolved || null,
                            mediumSolved: data.mediumSolved || null,
                            hardSolved: data.hardSolved || null,
                            loading: false,
                            error: null,
                        },
                    }));
                } else {
                    throw new Error('Invalid response');
                }
            } catch (error) {
                console.error('LeetCode API error:', error);
                setProfiles(prev => ({
                    ...prev,
                    leetcode: {
                        ...prev.leetcode,
                        loading: false,
                        error: 'Failed to fetch',
                    },
                }));
            }
        };

        // Fetch GitHub data
        const fetchGitHubData = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${usernames.github}`
                );
                const data = await response.json();

                if (data && !data.message) {
                    setProfiles(prev => ({
                        ...prev,
                        github: {
                            username: usernames.github,
                            repos: data.public_repos || 0,
                            followers: data.followers || 0,
                            following: data.following || 0,
                            loading: false,
                            error: null,
                        },
                    }));
                } else {
                    throw new Error('Invalid response');
                }
            } catch (error) {
                console.error('GitHub API error:', error);
                setProfiles(prev => ({
                    ...prev,
                    github: {
                        ...prev.github,
                        loading: false,
                        error: 'Failed to fetch',
                    },
                }));
            }
        };

        fetchCodeforcesData();
        fetchLeetCodeData();
        fetchGitHubData();
    }, [usernames.codeforces, usernames.leetcode, usernames.github]);

    return profiles;
}
