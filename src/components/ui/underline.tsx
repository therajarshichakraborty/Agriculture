"use client";

import { useId, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

/**
 * Hand-drawn underline in a deep orange to red gradient. The stroke draws in
 * from left to right the first time the word scrolls into view, and scales
 * with the surrounding font size.
 */
export function Underline({
  children,
  delay = 0.3,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  // useId can contain characters that are not valid inside url(#...).
  const gradientId = `underline-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[0.22em] left-[-2%] h-[0.32em] w-[104%] overflow-visible"
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100"
            y2="0"
          >
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <motion.path
          d="M2 8.5 C 22 4, 48 3.5, 70 5 S 92 7.5, 98 4.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ strokeWidth: "0.075em" }}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            pathLength: { duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.15, delay }
          }}
        />
      </svg>
    </span>
  );
}
