"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export type TracingTimelineEntry = {
  id: string;
  /** Sticky left-column label, e.g. a date range. */
  label: ReactNode;
  /** Optional node shown inside the timeline dot (a logo). */
  marker?: ReactNode;
  content: ReactNode;
};

/** Aceternity timeline: sticky labels and a gradient beam that fills as you scroll. */
export function TracingTimeline({
  entries,
  className
}: {
  entries: TracingTimelineEntry[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setHeight(entry.contentRect.height)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"]
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div ref={ref} className="relative">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex justify-start pt-8 first:pt-0 md:gap-10 md:pt-16"
          >
            <div className="sticky top-32 z-30 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-0 flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-background shadow-sm">
                {entry.marker ?? (
                  <div className="size-3 rounded-full border border-border bg-muted" />
                )}
              </div>
              <div className="hidden pl-16 text-lg font-semibold tracking-tight text-muted-foreground md:block">
                {entry.label}
              </div>
            </div>

            <div className="relative w-full pl-16 md:pl-0">
              <div className="mb-3 text-sm font-medium text-muted-foreground md:hidden">
                {entry.label}
              </div>
              {entry.content}
            </div>
          </div>
        ))}

        <div
          aria-hidden
          style={{ height }}
          className="absolute left-5 top-0 w-px overflow-hidden bg-linear-to-b from-transparent via-border to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: beamHeight, opacity: beamOpacity }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-linear-to-t from-brand via-brand-2 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
