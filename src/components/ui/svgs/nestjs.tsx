/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const NestJs = ({ className }: { className?: string }) => (
  <img
    src="/svgs/nestjs.svg"
    alt="NestJs"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { NestJs };
