/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Inngest = ({ className }: { className?: string }) => (
  <img
    src="/icons/inngest.png"
    alt="Inngest"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Inngest };
