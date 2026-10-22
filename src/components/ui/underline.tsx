"use client";

import { useId, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const EASE = [0.65, 0, 0.35, 1] as const;

// Clip insets (top right bottom left). Negative values leave room for the
// round caps and the curve's height so the finished stroke is never cut.
const HIDDEN_FROM_RIGHT = "inset(-80% 108% -80% -8%)";
const HIDDEN_FROM_LEFT = "inset(-80% -8% -80% 108%)";
const SHOWN = "inset(-80% -8% -80% -8%)";

/**
 * Hand-drawn underline in a deep orange to red gradient. Like a pen stroke,
 * it sweeps left to right under the word, then loops back with a shorter
 * second stroke. Plays the first time the word scrolls into view.
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
  const stroke = {
    fill: "none",
    stroke: `url(#${gradientId})`,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const
  };

  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {children}
      {/* The svg is always visible, so it carries the in-view trigger; a fully
          clipped path reports no visible area and would never fire. */}
      <motion.svg
        aria-hidden="true"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-40px" }}
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[0.36em] left-[-3%] h-[0.5em] w-[106%] overflow-visible"
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

        {/* Main stroke: a slightly bowed sweep across the full word */}
        <motion.path
          d="M1 6 C 20 3.6, 45 3.2, 70 4.6 S 92 6.6, 99 4.2"
          {...stroke}
          style={{ strokeWidth: "0.075em" }}
          variants={{
            hidden: { clipPath: HIDDEN_FROM_RIGHT },
            shown: { clipPath: SHOWN }
          }}
          transition={{ duration: 0.6, delay, ease: EASE }}
        />

        {/* Return stroke: shorter, a touch lower, drawn back right to left */}
        <motion.path
          d="M95 8.4 C 76 7.4, 52 9.6, 30 9.8 S 16 10.6, 12 10.2"
          {...stroke}
          style={{ strokeWidth: "0.06em" }}
          variants={{
            hidden: { clipPath: HIDDEN_FROM_LEFT },
            shown: { clipPath: SHOWN }
          }}
          transition={{ duration: 0.45, delay: delay + 0.5, ease: EASE }}
        />
      </motion.svg>
    </span>
  );
}
