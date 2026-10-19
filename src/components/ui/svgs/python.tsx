/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Python = ({ className }: { className?: string }) => (
  <img
    src="/svgs/python.svg"
    alt="Python"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Python };
