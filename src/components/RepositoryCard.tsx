import React from "react";

interface Repository {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  created_at: string;
}

interface RepositoryCardProps {
  repo: Repository;
}

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  const createdDate = new Date(repo.created_at).toLocaleDateString("pt-BR");

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group px-4 py-3 rounded-lg border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800/50 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
            {repo.name}
          </h3>
          {repo.description && (
            <p className="text-sm text-neutral-400 mt-1 line-clamp-2 group-hover:text-neutral-300 transition-colors">
              {repo.description}
            </p>
          )}
        </div>
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-xs text-neutral-400 whitespace-nowrap">
            <span>★</span>
            <span>{repo.stargazers_count}</span>
          </div>
        )}
      </div>
      <p className="text-xs text-neutral-500 mt-2">{createdDate}</p>
    </a>
  );
}