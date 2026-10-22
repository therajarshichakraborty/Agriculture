"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

/** Aceternity lamp: two conic light beams meeting over the content. */
export function LampContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const beam = {
    initial: { opacity: 0.4, width: "12rem" },
    whileInView: { opacity: 1, width: "28rem" },
    viewport: { once: true },
    transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" as const }
  };

  return (
    <div
      className={cn(
        "relative isolate flex min-h-[34rem] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-background",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          {...beam}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, var(--brand), transparent, transparent)"
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-background mask-[linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-background mask-[linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          {...beam}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, var(--brand))"
          }}
          className="absolute inset-auto left-1/2 h-56"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-background mask-[linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-background mask-[linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-brand opacity-40 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 -translate-y-24 rounded-full bg-brand-2 opacity-60 blur-2xl"
        />
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "28rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-28 bg-brand-2"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-background" />
      </div>

      <div className="relative z-50 -mt-48 flex flex-col items-center px-6 pb-16">
        {children}
      </div>
    </div>
  );
}
