/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Qdrant = ({ className }: { className?: string }) => (
  <img
    src="/icons/qdrant-light.svg"
    alt="Qdrant"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Qdrant };
