"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  radius?: number;
  /** Borderless variant: soft shadow surface that lifts on hover. */
  bordered?: boolean;
};

/** Card whose border and surface light up under the cursor (Aceternity card-spotlight). */
export function GlowCard({
  children,
  className,
  radius = 320,
  bordered = true
}: GlowCardProps) {
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
        "group/glow relative overflow-hidden rounded-2xl bg-card p-px transition-all duration-300",
        bordered
          ? "border border-border"
          : "shadow-[0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent),0_2px_4px_rgba(0,0,0,0.03),0_12px_32px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--brand)_25%,transparent),0_24px_48px_-16px_color-mix(in_oklch,var(--brand)_30%,transparent)]",
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
