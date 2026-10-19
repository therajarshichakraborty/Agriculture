/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Mongoose = ({ className }: { className?: string }) => (
  <img
    src="/icons/mongoose.svg"
    alt="Mongoose"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Mongoose };
