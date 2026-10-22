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
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="text-gradient max-w-3xl text-balance font-display text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
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

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
      <span className="size-1.5 rounded-full bg-linear-to-r from-brand to-brand-2" />
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
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
