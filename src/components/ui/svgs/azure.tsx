/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Azure = ({ className }: { className?: string }) => (
  <img
    src="/icons/azure.svg"
    alt="Azure"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Azure };
