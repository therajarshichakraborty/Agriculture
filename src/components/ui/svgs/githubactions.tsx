/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const GitHubActions = ({ className }: { className?: string }) => (
  <img
    src="/icons/githubactions.svg"
    alt="GitHub Actions"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { GitHubActions };
