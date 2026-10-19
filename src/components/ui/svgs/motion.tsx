/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Motion = ({ className }: { className?: string }) => (
  <img
    src="/icons/motion-dark.svg"
    alt="Motion"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

const FramerMotion = Motion;

export { Motion, FramerMotion };
