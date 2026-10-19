/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Redis = ({ className }: { className?: string }) => (
  <img
    src="/svgs/Redis.svg"
    alt="Redis"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Redis };
