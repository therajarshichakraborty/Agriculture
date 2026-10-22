"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  radius?: number;
};

/** Card whose border and surface light up under the cursor (Aceternity card-spotlight). */
export function GlowCard({ children, className, radius = 320 }: GlowCardProps) {
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glow = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklch, var(--brand) 16%, transparent), transparent 80%)`;
  const ring = useMotionTemplate`radial-gradient(${radius * 0.6}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklch, var(--brand) 70%, transparent), transparent 80%)`;

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(-radius);
        mouseY.set(-radius);
      }}
      className={cn(
        "group/glow relative overflow-hidden rounded-2xl border border-border bg-card p-px transition-colors",
        className
      )}
    >
      {/* Border highlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100"
        style={{ background: ring }}
      />
      <div className="relative h-full rounded-[calc(var(--radius-2xl)-1px)] bg-card">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100"
          style={{ background: glow }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
