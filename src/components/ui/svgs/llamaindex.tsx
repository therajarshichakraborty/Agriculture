/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const LlamaIndex = ({ className }: { className?: string }) => (
  <img
    src="/icons/llamaindex.svg"
    alt="LlamaIndex"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { LlamaIndex };
