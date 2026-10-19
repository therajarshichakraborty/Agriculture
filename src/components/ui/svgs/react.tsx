/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const React = ({ className }: { className?: string }) => (
  <img
    src="/svgs/React.svg"
    alt="React"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { React };
