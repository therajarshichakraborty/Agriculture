/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const MongoDB = ({ className }: { className?: string }) => (
  <img
    src="/svgs/MongoDB.svg"
    alt="MongoDB"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { MongoDB };
