/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const BullMQ = ({ className }: { className?: string }) => (
  <img
    src="/assets/bullmq.png"
    alt="BullMQ"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { BullMQ };
