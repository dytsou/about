import { useState, useEffect, useRef } from 'react';
import { Github, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { GitHubRepo } from '../../types';
import './GitHubActivity.css';

interface GitHubActivityProps {
  repos: GitHubRepo[];
  loading: boolean;
}

interface RepoCardProps {
  repo: GitHubRepo;
}

function RepoCard({ repo }: RepoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const description = repo.description || 'No description available';

  useEffect(() => {
    const measureOverflow = () => {
      const element = descriptionRef.current;
      if (!element) return;

      if (isExpanded) {
        // When expanded, check if it would overflow when collapsed
        element.classList.add('repo-card-description-clamped');
        const hasOverflow = element.scrollHeight > element.clientHeight;
        element.classList.remove('repo-card-description-clamped');
        setShouldShowToggle(hasOverflow);
      } else {
        // When collapsed, check if content overflows
        const hasOverflow = element.scrollHeight > element.clientHeight;
        setShouldShowToggle(hasOverflow);
      }
    };

    measureOverflow();
    window.addEventListener('resize', measureOverflow);
    return () => {
      window.removeEventListener('resize', measureOverflow);
    };
  }, [description, isExpanded]);

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <a
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
      <div className="repo-card-description-wrapper">
        <p
          ref={descriptionRef}
          className={`repo-card-description ${!isExpanded ? 'repo-card-description-clamped' : ''}`}
        >
          {description}
        </p>
        {shouldShowToggle && (
          <button
            onClick={handleToggleExpand}
            className="repo-card-more-button"
            aria-label={isExpanded ? 'See less' : 'See more'}
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>
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
  );
}

export function GitHubActivity({ repos, loading }: GitHubActivityProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllRepos, setShowAllRepos] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (loading || repos.length === 0) {
    return null;
  }

  const displayRepos = repos.slice(0, 6);
  const initialReposCount = isMobile ? 2 : displayRepos.length;
  const reposToShow = isMobile && !showAllRepos
    ? displayRepos.slice(0, initialReposCount)
    : displayRepos;
  const hasMoreRepos = isMobile && displayRepos.length > initialReposCount && !showAllRepos;
  const showLessButton = isMobile && showAllRepos && displayRepos.length > initialReposCount;

  return (
    <div className="github-activity">
      <h3 className="github-activity-title">
        Recent GitHub Activity
      </h3>
      <div className="github-repos-grid">
        {reposToShow.map(repo => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
      {(!isMobile || showAllRepos) && (
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
      )}
      {(hasMoreRepos || showLessButton) && (
        <div className="github-repos-toggle-container">
          <button
            onClick={() => setShowAllRepos(!showAllRepos)}
            className="github-repos-toggle-button"
            aria-label={showAllRepos ? 'Collapse repositories' : 'Expand repositories'}
          >
            {showAllRepos ? (
              <ChevronUp className="github-repos-toggle-icon" />
            ) : (
              <ChevronDown className="github-repos-toggle-icon" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}


