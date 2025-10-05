import { useState, useEffect } from 'react';
import { GitHubRepo, GitHubStats } from '../types';

const GITHUB_USERNAME = 'dytsou';
const GITHUB_API = 'https://api.github.com';

export function useGitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [reposResponse, userResponse] = await Promise.all([
          fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
          fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`)
        ]);

        if (!reposResponse.ok || !userResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const reposData = await reposResponse.json();
        const userData = await userResponse.json();

        setRepos(reposData);
        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return { repos, stats, loading, error };
}
