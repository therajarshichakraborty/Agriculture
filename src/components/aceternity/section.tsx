"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

/** Consistent section shell: eyebrow pill, gradient title, lead copy, reveal-on-scroll. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center"
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28", className)}
    >
      {(eyebrow || title || description) && (
        <Reveal
          className={cn(
            "mb-12 flex flex-col gap-4 md:mb-16",
            align === "center" ? "items-center text-center" : "items-start"
          )}
        >
          {eyebrow && <SectionLabel centered={align === "center"}>{eyebrow}</SectionLabel>}
          {title && (
            <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}

/** Section label from the previous portfolio: dark pill flanked by hairlines. */
export function SectionLabel({
  children,
  centered = true
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  const pill = (
    <div className="z-10 rounded-xl border bg-primary px-4 py-1">
      <span className="text-sm font-medium text-background">{children}</span>
    </div>
  );
  if (!centered) return pill;
  return (
    <div className="flex w-full items-center">
      <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
      {pill}
      <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1 shadow-[0_0_0_1px_var(--border)] text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-linear-to-r from-brand to-brand-2" />
      </span>
      {children}
    </span>
  );
}

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
