"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { Topic } from "@/data/dsa";

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onToggleExpand: () => void;
}

export default function TopicCard({
  topic,
  isActive,
  onToggleExpand
}: TopicCardProps) {
  // Resolve Lucide Icon dynamically
  const IconComponent = (Icons as any)[topic.iconName] || Icons.BookOpen;

  const percent =
    Math.round((topic.solvedProblems / topic.totalProblems) * 100) || 0;

  // Status-based styles
  const isCompleted = topic.status === "completed";
  const isCurrent = topic.status === "current";
  const isLocked = topic.status === "locked";
  const isNotStarted = topic.status === "not-started";

  return (
    <motion.div
      layout="position"
      className={`group rounded-xl border transition-all duration-300 ${
        isLocked
          ? "opacity-55 bg-muted/5 border-border/30 cursor-not-allowed select-none"
          : isCurrent
            ? "border-emerald-500/40 bg-emerald-500/5 shadow-xs shadow-emerald-500/5 dark:bg-emerald-950/10 cursor-pointer"
            : "border-border/50 bg-card/45 backdrop-blur-sm hover:bg-card/60 hover:border-border/80 cursor-pointer"
      }`}
    >
      {/* Header / Clickable Toggle */}
      <div
        onClick={() => !isLocked && onToggleExpand()}
        className="p-3.5 flex flex-col gap-2.5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Icon */}
            <div
              className={`h-7 w-7 rounded-lg flex items-center justify-center border transition-colors ${
                isCompleted
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  : isCurrent
                    ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-500"
                    : isLocked
                      ? "bg-muted/10 border-transparent text-muted-foreground/40"
                      : "bg-muted/30 border-border/60 text-muted-foreground"
              }`}
            >
              <IconComponent className="h-4 w-4 stroke-[1.8]" />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground tracking-tight">
                  {topic.title}
                </span>
                {isCurrent && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right side info */}
          <div className="flex items-center gap-2 text-right">
            {isLocked ? (
              <Icons.Lock className="h-3.5 w-3.5 text-muted-foreground/45" />
            ) : isCompleted ? (
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  100%
                </span>
                <Icons.CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 stroke-[2.5]" />
              </div>
            ) : (
              <div className="flex flex-col gap-0.5 items-end">
                <span className="text-[11px] font-bold text-foreground">
                  {topic.solvedProblems}{" "}
                  <span className="text-muted-foreground">
                    / {topic.totalProblems}
                  </span>
                </span>
                {percent > 0 && (
                  <span className="text-[9px] text-muted-foreground font-semibold">
                    {percent}%
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar (not shown for Locked/Not Started) */}
        {!isLocked && !isNotStarted && (
          <div className="h-1 w-full bg-muted/40 rounded-full overflow-hidden">
            <div
              style={{ width: `${percent}%` }}
              className={`h-full rounded-full transition-all duration-500 ${
                isCompleted ? "bg-emerald-500" : "bg-primary"
              }`}
            />
          </div>
        )}

        {isNotStarted && (
          <div className="flex items-center justify-between text-[10px] text-muted-foreground font-medium">
            <span>Not Started</span>
            <span>0 / {topic.totalProblems}</span>
          </div>
        )}
      </div>

      {/* Accordion Expandable Detailed Split */}
      <AnimatePresence initial={false}>
        {isActive && !isLocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 pt-0 border-t border-border/30 bg-muted/5 flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2 pt-2.5 text-center">
                {/* Easy Split */}
                <div className="flex flex-col gap-0.5 p-1.5 rounded-lg bg-card/30 border border-border/20">
                  <span className="text-[9px] text-emerald-500 font-semibold uppercase tracking-wider">
                    Easy
                  </span>
                  <span className="text-xs font-bold text-foreground mt-0.5">
                    {topic.difficultyCounts.easy.solved}
                    <span className="text-[10px] text-muted-foreground font-medium">
                      /{topic.difficultyCounts.easy.total}
                    </span>
                  </span>
                </div>

                {/* Medium Split */}
                <div className="flex flex-col gap-0.5 p-1.5 rounded-lg bg-card/30 border border-border/20">
                  <span className="text-[9px] text-amber-500 font-semibold uppercase tracking-wider">
                    Medium
                  </span>
                  <span className="text-xs font-bold text-foreground mt-0.5">
                    {topic.difficultyCounts.medium.solved}
                    <span className="text-[10px] text-muted-foreground font-medium">
                      /{topic.difficultyCounts.medium.total}
                    </span>
                  </span>
                </div>

                {/* Hard Split */}
                <div className="flex flex-col gap-0.5 p-1.5 rounded-lg bg-card/30 border border-border/20">
                  <span className="text-[9px] text-rose-500 font-semibold uppercase tracking-wider">
                    Hard
                  </span>
                  <span className="text-xs font-bold text-foreground mt-0.5">
                    {topic.difficultyCounts.hard.solved}
                    <span className="text-[10px] text-muted-foreground font-medium">
                      /{topic.difficultyCounts.hard.total}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
