/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Fiber = ({ className }: { className?: string }) => (
  <img
    src="/icons/fiber.svg"
    alt="Fiber"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Fiber };
