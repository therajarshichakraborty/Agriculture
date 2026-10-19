/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Django = ({ className }: { className?: string }) => (
  <img
    src="/icons/django.svg"
    alt="Django"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Django };
