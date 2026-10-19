/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Maven = ({ className }: { className?: string }) => (
  <img
    src="/icons/maven.svg"
    alt="Maven"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Maven };
