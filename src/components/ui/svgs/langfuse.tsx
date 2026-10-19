/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Langfuse = ({ className }: { className?: string }) => (
  <img
    src="/icons/langfuse.svg"
    alt="Langfuse"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Langfuse };
