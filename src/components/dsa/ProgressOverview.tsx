"use client";

import React from "react";
import { Flame, CheckCircle2, Play, Award } from "lucide-react";
import { DSAMetrics } from "@/data/dsa";

interface ProgressOverviewProps {
  metrics: DSAMetrics;
  filteredTopicsSolved?: {
    easy: number;
    medium: number;
    hard: number;
    total: number;
  };
  isFiltered?: boolean;
}

export default function ProgressOverview({
  metrics,
  filteredTopicsSolved,
  isFiltered = false
}: ProgressOverviewProps) {
  // Use either the global metrics or the filtered metrics if a filter is active
  const easySolved =
    isFiltered && filteredTopicsSolved
      ? filteredTopicsSolved.easy
      : metrics.difficultySplit.easy.solved;
  const mediumSolved =
    isFiltered && filteredTopicsSolved
      ? filteredTopicsSolved.medium
      : metrics.difficultySplit.medium.solved;
  const hardSolved =
    isFiltered && filteredTopicsSolved
      ? filteredTopicsSolved.hard
      : metrics.difficultySplit.hard.solved;
  const totalSolved = easySolved + mediumSolved + hardSolved;
  const totalProblems =
    isFiltered && filteredTopicsSolved
      ? filteredTopicsSolved.total
      : metrics.totalProblems;

  const totalPossible = easySolved + mediumSolved + hardSolved;
  const easyPercent =
    totalPossible > 0 ? (easySolved / totalPossible) * 100 : 0;
  const mediumPercent =
    totalPossible > 0 ? (mediumSolved / totalPossible) * 100 : 0;
  const hardPercent =
    totalPossible > 0 ? (hardSolved / totalPossible) * 100 : 0;

  return (
    <div className="flex flex-col gap-3">
      {/* Metrics Row 1 */}
      <div className="grid grid-cols-2 gap-3">
        {/* Solved Card */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/45 p-3.5 backdrop-blur-sm transition-all hover:bg-card/60">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Solved
            </span>
            <CheckCircle2 className="h-4 w-4 text-primary/70" />
          </div>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {totalSolved}
            </span>
            <span className="text-xs text-muted-foreground">
              / {totalProblems}
            </span>
          </div>
        </div>

        {/* Streak Card */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/45 p-3.5 backdrop-blur-sm transition-all hover:bg-card/60">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Streak
            </span>
            <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
          </div>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {metrics.currentStreak}
            </span>
            <span className="text-xs text-muted-foreground">Days</span>
          </div>
        </div>
      </div>

      {/* Metrics Row 2 */}
      <div className="grid grid-cols-1 gap-3">
        {/* Current Topic */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/45 p-3.5 backdrop-blur-sm transition-all hover:bg-card/60 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Current Focus
            </span>
            <span className="text-sm font-semibold text-foreground mt-1 flex items-center gap-1.5">
              <Play className="h-3 w-3 text-emerald-500 fill-emerald-500" />
              {metrics.currentTopic}
            </span>
          </div>
          <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Active
          </span>
        </div>

        {/* Difficulty Split Card */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/45 p-3.5 backdrop-blur-sm transition-all hover:bg-card/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Difficulty Split
            </span>
            <Award className="h-4 w-4 text-muted-foreground/60" />
          </div>

          {/* Ratio bar */}
          <div className="h-2 w-full rounded-full bg-muted/40 overflow-hidden flex mb-3">
            {easySolved > 0 && (
              <div
                style={{ width: `${easyPercent}%` }}
                className="h-full bg-emerald-500 transition-all duration-500"
                title={`Easy: ${easySolved}`}
              />
            )}
            {mediumSolved > 0 && (
              <div
                style={{ width: `${mediumPercent}%` }}
                className="h-full bg-amber-500 transition-all duration-500"
                title={`Medium: ${mediumSolved}`}
              />
            )}
            {hardSolved > 0 && (
              <div
                style={{ width: `${hardPercent}%` }}
                className="h-full bg-rose-500 transition-all duration-500"
                title={`Hard: ${hardSolved}`}
              />
            )}
          </div>

          {/* Counts */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-muted-foreground font-medium">
                  Easy
                </span>
              </div>
              <span className="text-xs font-bold text-foreground mt-0.5">
                {easySolved}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] text-muted-foreground font-medium">
                  Medium
                </span>
              </div>
              <span className="text-xs font-bold text-foreground mt-0.5">
                {mediumSolved}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span className="text-[10px] text-muted-foreground font-medium">
                  Hard
                </span>
              </div>
              <span className="text-xs font-bold text-foreground mt-0.5">
                {hardSolved}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
