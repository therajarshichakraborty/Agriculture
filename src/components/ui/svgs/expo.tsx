/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Expo = ({ className }: { className?: string }) => (
  <img
    src="/svgs/expo.svg"
    alt="Expo"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Expo };
