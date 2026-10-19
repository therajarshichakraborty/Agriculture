/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Bash = ({ className }: { className?: string }) => (
  <img
    src="/icons/bash.svg"
    alt="Bash"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Bash };
