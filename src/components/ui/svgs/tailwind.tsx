/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Tailwind = ({ className }: { className?: string }) => (
  <img
    src="/svgs/Tailwind CSS.svg"
    alt="Tailwind"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Tailwind };
