/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Shell = ({ className }: { className?: string }) => (
  <img
    src="/icons/shell-outline-regular.svg"
    alt="Shell"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Shell };
