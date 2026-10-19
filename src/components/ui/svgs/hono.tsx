/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Hono = ({ className }: { className?: string }) => (
  <img
    src="/icons/hono.svg"
    alt="Hono"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Hono };
