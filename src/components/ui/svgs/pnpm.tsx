/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Pnpm = ({ className }: { className?: string }) => (
  <img
    src="/icons/pnpm-light.svg"
    alt="pnpm"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

const PNPM = Pnpm;

export { Pnpm, PNPM };
