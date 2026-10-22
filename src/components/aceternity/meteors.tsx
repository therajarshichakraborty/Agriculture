"use client";

import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

type Meteor = { left: string; delay: string; duration: string };

/** Falling meteor streaks. Positions are generated after mount to avoid hydration drift. */
export function Meteors({ number = 18, className }: { number?: number; className?: string }) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, () => ({
        left: `${Math.floor(Math.random() * 120 - 10)}%`,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        duration: `${Math.floor(Math.random() * 6 + 4)}s`
      }))
    );
  }, [number]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, i) => (
        <span
          key={i}
          style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
          className={cn(
            "absolute top-0 size-0.5 rotate-[215deg] animate-[meteor_linear_infinite] rounded-full bg-foreground/60 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-linear-to-r before:from-foreground/50 before:to-transparent before:content-['']",
            className
          )}
        />
      ))}
    </div>
  );
}
