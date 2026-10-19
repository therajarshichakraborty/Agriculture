/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const CPP = ({ className }: { className?: string }) => (
  <img
    src="/svgs/C++.svg"
    alt="C++"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { CPP };
