"use client";

import { useEffect, useState } from "react";
import { GitCommit, ExternalLink } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

interface GitHubCommitSearchResponse {
  items: {
    sha: string;
    commit: {
      message: string;
      author: {
        date: string;
      };
    };
    html_url: string;
    repository: {
      name: string;
      full_name: string;
    };
  }[];
}

interface CommitItem {
  sha: string;
  message: string;
  repoName: string;
  date: string;
  commitUrl: string;
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

export default function GithubCommits({ username }: { username: string }) {
  const [commits, setCommits] = useState<CommitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCommits() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/github-commits?username=${username}&t=${Date.now()}`
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error(
              "GitHub API rate limit reached. Please check back later."
            );
          }
          throw new Error("Failed to load GitHub activity.");
        }

        const data: GitHubCommitSearchResponse = await response.json();
        const extractedCommits: CommitItem[] = (data.items || []).map(
          (item) => ({
            sha: item.sha,
            message: item.commit.message,
            repoName: item.repository.name,
            date: item.commit.author.date,
            commitUrl: item.html_url
          })
        );

        setCommits(extractedCommits);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    getCommits();
    const interval = setInterval(getCommits, 30000);
    return () => clearInterval(interval);
  }, [username]);

  return (
    <div className="relative flex flex-col w-full rounded-xl bg-transparent text-card-foreground px-0 py-2 transition-all duration-300 dark:bg-transparent">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 select-none shrink-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icons.github className="size-4 text-foreground/80" />
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              GitHub Activity
            </h3>
            <span className="inline-flex items-center gap-1.5 bg-transparent text-lime-600 dark:text-white border border-lime-500/25 dark:border-white/20 dark:bg-white/10 text-[10px] font-bold px-2 py-0.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500 dark:bg-white dark:shadow-[0_0_6px_rgba(255,255,255,0.9)]"></span>
              </span>
              Live
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Checkout my latest commits
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98] shrink-0"
          nativeButton={false}
          render={
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <span>View Profile</span>
          <ExternalLink className="size-3" />
        </Button>
      </div>

      <div
        className="flex-1 min-w-0 h-[220px] relative overflow-hidden flex items-center"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
        }}
      >
        {loading ? (
          <div className="w-full space-y-3 py-2 animate-pulse">
            <div className="flex items-center gap-3 px-2">
              <div className="size-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-full shrink-0" />
              <div className="h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-md w-1/3" />
            </div>
            <div className="flex items-center gap-3 px-2">
              <div className="size-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-full shrink-0" />
              <div className="h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-md w-1/2" />
            </div>
          </div>
        ) : error ? (
          <div className="text-[13px] text-red-500/80 font-medium w-full py-4 text-center">
            {error}
          </div>
        ) : commits.length === 0 ? (
          <div className="text-[13px] text-muted-foreground w-full py-4 text-center">
            No commits found.
          </div>
        ) : (
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:30s] [--gap:0.75rem] h-[220px] w-full"
            repeat={6}
          >
            {commits.map((commit) => (
              <a
                key={commit.sha}
                href={commit.commitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-1.5 transition-all duration-300 ease-out cursor-pointer w-full min-w-0 justify-start hover:bg-neutral-100/60 dark:hover:bg-neutral-800/30 rounded-lg px-2.5"
              >
                <GitCommit className="size-4 text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 ease-out shrink-0" />
                <div className="flex items-center justify-between min-w-0 flex-1 gap-4">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 ease-out truncate group-hover:text-black dark:group-hover:text-white">
                      {commit.message}
                    </span>
                    <span className="text-[10px] font-bold bg-neutral-50 dark:bg-neutral-900/60 px-1.5 py-0.5 rounded border border-neutral-200/60 dark:border-neutral-800/80 shrink-0 transition-all duration-300 ease-out group-hover:bg-white dark:group-hover:bg-neutral-900 group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
                      <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        {commit.repoName}
                      </span>
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 ease-out shrink-0 hidden sm:inline">
                    {formatRelativeTime(commit.date)}
                  </span>
                </div>
              </a>
            ))}
          </Marquee>
        )}
      </div>
    </div>
  );
}
