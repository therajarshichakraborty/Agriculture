/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Jest = ({ className }: { className?: string }) => (
  <img
    src="/icons/jest.svg"
    alt="Jest"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Jest };
