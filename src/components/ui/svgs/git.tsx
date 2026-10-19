/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Git = ({ className }: { className?: string }) => (
  <img
    src="/svgs/Git.svg"
    alt="Git"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Git };
