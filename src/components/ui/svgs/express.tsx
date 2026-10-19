/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Express = ({ className }: { className?: string }) => (
  <img
    src="/svgs/Express.svg"
    alt="Express"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Express };
