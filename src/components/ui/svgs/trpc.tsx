/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const TRPC = ({ className }: { className?: string }) => (
  <img
    src="/svgs/trpc.svg"
    alt="tRPC"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { TRPC };
