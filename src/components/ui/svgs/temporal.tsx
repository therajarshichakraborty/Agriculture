/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Temporal = ({ className }: { className?: string }) => (
  <img
    src="/icons/temporal.svg"
    alt="Temporal"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Temporal };
