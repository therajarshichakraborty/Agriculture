/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const AndroidStudio = ({ className }: { className?: string }) => (
  <img
    src="/icons/androidstudio.svg"
    alt="Android Studio"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { AndroidStudio };
