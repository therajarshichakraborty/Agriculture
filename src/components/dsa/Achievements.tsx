"use client";

import React from "react";
import { Lock } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { dsaAchievements, Achievement } from "@/data/dsa";

export default function Achievements() {
  const unlockedCount = dsaAchievements.filter((a) => a.isUnlocked).length;
  const totalCount = dsaAchievements.length;

  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
          Achievements
        </span>
        <span className="text-[10px] font-bold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full border border-border/40">
          {unlockedCount} / {totalCount} Unlocked
        </span>
      </div>

      {/* Grid of Badges */}
      <div className="grid grid-cols-3 gap-2.5">
        {dsaAchievements.map((badge) => {
          return (
            <Tooltip key={badge.id}>
              <TooltipTrigger
                render={<div />}
                className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 text-center ${
                  badge.isUnlocked
                    ? "bg-card/45 border-border/50 hover:bg-card/65 hover:border-primary/20 hover:scale-[1.03] cursor-pointer"
                    : "bg-muted/5 border-border/25 select-none"
                }`}
              >
                {/* Emoji / Icon Container */}
                <div
                  className={`h-11 w-11 rounded-full flex items-center justify-center text-xl mb-1.5 transition-transform duration-300 ${
                    badge.isUnlocked
                      ? "bg-primary/5 dark:bg-primary/10 group-hover:scale-110"
                      : "bg-muted/10 opacity-60 filter blur-[1.2px]"
                  }`}
                >
                  <span>{badge.icon}</span>
                </div>

                {/* Title */}
                <span
                  className={`text-[10px] font-semibold tracking-tight line-clamp-1 leading-tight ${
                    badge.isUnlocked
                      ? "text-foreground"
                      : "text-muted-foreground/60 filter blur-[0.6px]"
                  }`}
                >
                  {badge.title}
                </span>

                {/* Lock Indicator */}
                {!badge.isUnlocked && (
                  <div className="absolute top-1.5 right-1.5 text-muted-foreground/50">
                    <Lock className="h-2.5 w-2.5" />
                  </div>
                )}
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={6}
                className="max-w-[200px] p-2.5 rounded-xl border border-border/50 bg-popover text-popover-foreground shadow-lg flex flex-col gap-1 text-left"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold">{badge.title}</span>
                  {!badge.isUnlocked && (
                    <span className="text-[8px] font-bold uppercase tracking-wider text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded-full border border-rose-500/20">
                      Locked
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-muted-foreground leading-normal">
                  {badge.description}
                </p>
                <div className="border-t border-border/30 my-1 pt-1">
                  <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider block">
                    Criteria:
                  </span>
                  <span className="text-[9px] text-foreground font-medium">
                    {badge.unlockCriteria}
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
