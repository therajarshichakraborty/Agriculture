"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, CheckCircle2, Circle } from "lucide-react";
import { dailyGoal } from "@/data/dsa";

export default function DailyGoal() {
  // Initialize with the first two pre-checked to get 2/3 progress
  const [completedList, setCompletedList] = useState<boolean[]>([
    true,
    true,
    false
  ]);

  const solvedCount = completedList.filter(Boolean).length;
  const total = dailyGoal.total;
  const isFullyCompleted = solvedCount === total;

  const toggleProblem = (index: number) => {
    const newList = [...completedList];
    newList[index] = !newList[index];
    setCompletedList(newList);
  };

  return (
    <motion.div
      layout
      className={`relative overflow-hidden rounded-xl border p-4 transition-all duration-300 ${
        isFullyCompleted
          ? "border-emerald-500/40 bg-emerald-500/5 shadow-md shadow-emerald-500/5 dark:bg-emerald-950/10"
          : "border-border/50 bg-card/45 backdrop-blur-sm hover:bg-card/60"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            Daily Goal
          </span>
          <span className="text-xs font-semibold text-foreground mt-0.5">
            {isFullyCompleted
              ? "Today's goal completed!"
              : `Solve ${total} Problems`}
          </span>
        </div>
        <div className="flex items-baseline gap-0.5 text-right">
          <motion.span
            key={solvedCount}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`text-sm font-bold ${isFullyCompleted ? "text-emerald-500" : "text-foreground"}`}
          >
            {solvedCount}
          </motion.span>
          <span className="text-xs text-muted-foreground">/{total}</span>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="h-1.5 w-full rounded-full bg-muted/40 overflow-hidden mb-3 relative">
        <motion.div
          initial={{ width: "66.6%" }}
          animate={{ width: `${(solvedCount / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className={`h-full rounded-full transition-all duration-300 ${
            isFullyCompleted
              ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              : "bg-primary"
          }`}
        />
      </div>

      {/* Today's Problems List */}
      <div className="flex flex-col gap-2 mt-2">
        {dailyGoal.problems.map((problem, idx) => {
          const isDone = completedList[idx];
          return (
            <button
              key={problem}
              onClick={() => toggleProblem(idx)}
              className={`flex items-center gap-2.5 text-left w-full p-2 rounded-lg text-xs transition-all border outline-none group cursor-pointer ${
                isDone
                  ? "bg-emerald-500/5 border-emerald-500/20 text-foreground/80 dark:bg-emerald-500/10"
                  : "bg-muted/15 border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              }`}
            >
              <div className="flex-shrink-0">
                {isDone ? (
                  <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/60 group-hover:text-foreground transition-colors stroke-[1.5]" />
                )}
              </div>
              <span
                className={`font-medium line-clamp-1 flex-1 ${isDone ? "line-through text-muted-foreground/70" : ""}`}
              >
                {problem}
              </span>
            </button>
          );
        })}
      </div>

      {/* Celebratory Message */}
      <AnimatePresence>
        {isFullyCompleted && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 border-t border-emerald-500/20 pt-2.5"
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Streak maintained! Let's keep it up. 🎉</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
