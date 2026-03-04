import React from 'react';

interface Repository {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface RepositoryCardProps {
  repo: Repository;
}

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <div className="repository-card">
      <div className="repo-header">
        <img 
          src={repo.owner.avatar_url} 
          alt={repo.owner.login}
          className="avatar"
        />
        <div className="repo-title-section">
          <h3 className="repo-name">{repo.name}</h3>
          <p className="repo-full-name">{repo.full_name}</p>
        </div>
      </div>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      <div className="repo-stats">
        <div className="stat">
          <span className="stat-label">⭐ Stars</span>
          <span className="stat-value">{repo.stargazers_count}</span>
        </div>
        <div className="stat">
          <span className="stat-label">🔀 Forks</span>
          <span className="stat-value">{repo.forks_count}</span>
        </div>
        {repo.language && (
          <div className="stat">
            <span className="stat-label">📝 Language</span>
            <span className="stat-value">{repo.language}</span>
          </div>
        )}
      </div>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
        Ver no GitHub →
      </a>
    </div>
  );
}
