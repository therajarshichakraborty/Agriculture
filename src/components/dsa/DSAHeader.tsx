"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Brain } from "lucide-react";

interface DSAHeaderProps {
  totalSolved: number;
  totalProblems: number;
}

export default function DSAHeader({
  totalSolved,
  totalProblems
}: DSAHeaderProps) {
  const percentage = Math.round((totalSolved / totalProblems) * 100) || 0;
  const [animatedPercent, setAnimatedPercent] = useState(0);

  // Animate the text counter from 0 to percentage
  useEffect(() => {
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out quad
      const ease = progress * (2 - progress);
      setAnimatedPercent(Math.round(ease * percentage));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [percentage]);

  // SVG parameters
  const radius = 22;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-between border-b border-border/40 pb-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-primary/10">
            <Brain className="h-4 w-4" />
          </div>
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            DSA Journey
          </h2>
        </div>
        <p className="text-[11px] text-muted-foreground font-medium leading-none mt-1">
          Grind 169, ChaiCode & CSES
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Circle Progress Bar */}
        <svg className="h-14 w-14 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-muted/40 fill-none"
            strokeWidth={strokeWidth}
          />
          {/* Foreground circle with animation */}
          <motion.circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-primary fill-none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference
            }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        {/* Centered Percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[11px] font-bold text-foreground">
            {animatedPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}
