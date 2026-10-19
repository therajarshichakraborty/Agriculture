/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Jenkins = ({ className }: { className?: string }) => (
  <img
    src="/icons/jenkins.svg"
    alt="Jenkins"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Jenkins };
