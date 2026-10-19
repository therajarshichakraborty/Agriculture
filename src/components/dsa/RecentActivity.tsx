"use client";

import React from "react";
import { Check, Code2, Play } from "lucide-react";
import { recentActivities } from "@/data/dsa";

export default function RecentActivity() {
  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
        Recent Activity
      </span>

      {/* Timeline List */}
      <div className="relative pl-4 border-l border-border/40 ml-1.5 flex flex-col gap-5 py-1">
        {recentActivities.map((act) => {
          // Resolve visual elements based on activity type
          const isCompleted = act.type === "completed";
          const isStarted = act.type === "started";

          return (
            <div key={act.id} className="relative flex flex-col gap-0.5">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[22.5px] top-0.5 h-4 w-4 rounded-full border flex items-center justify-center bg-background shadow-xs transition-transform duration-300 hover:scale-110 ${
                  isCompleted
                    ? "border-emerald-500 text-emerald-500"
                    : isStarted
                      ? "border-blue-500 text-blue-500"
                      : "border-indigo-500 text-indigo-500"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-2.5 w-2.5 stroke-[3.5]" />
                ) : isStarted ? (
                  <Play className="h-2 w-2 stroke-[3.5] fill-blue-500" />
                ) : (
                  <Code2 className="h-2.5 w-2.5 stroke-[2.5]" />
                )}
              </div>

              {/* Timestamp */}
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider leading-none">
                {act.timeAgo}
              </span>

              {/* Details */}
              <div className="text-xs text-foreground mt-0.5 flex items-baseline gap-1">
                <span className="text-muted-foreground font-medium">
                  {act.type === "completed"
                    ? "Completed"
                    : act.type === "started"
                      ? "Started"
                      : "Solved"}
                </span>
                <span className="font-semibold">{act.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
