import { Github, Star } from 'lucide-react';
import { GitHubRepo } from '../../types';
import './GitHubActivity.css';

interface GitHubActivityProps {
  repos: GitHubRepo[];
  loading: boolean;
}

export function GitHubActivity({ repos, loading }: GitHubActivityProps) {
  if (loading || repos.length === 0) {
    return null;
  }

  return (
    <div className="github-activity">
      <h3 className="github-activity-title">
        Recent GitHub Activity
      </h3>
      <div className="github-repos-grid">
        {repos.slice(0, 6).map(repo => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card group"
          >
            <div className="repo-card-header">
              <h4 className="repo-card-title">
                {repo.name}
              </h4>
              <Github className="repo-card-icon" />
            </div>
            <p className="repo-card-description">
              {repo.description || 'No description available'}
            </p>
            <div className="repo-card-footer">
              {repo.language && (
                <span className="language-indicator">
                  <span className="language-dot"></span>
                  {repo.language}
                </span>
              )}
              <span className="star-indicator">
                <Star className="star-icon" />
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="github-button-container">
        <a
          href="https://github.com/dytsou"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <Github className="github-button-icon" />
          View More on GitHub
        </a>
      </div>
    </div>
  );
}


