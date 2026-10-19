/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Pinecone = ({ className }: { className?: string }) => (
  <img
    src="/icons/pinecone-icon.svg"
    alt="Pinecone"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Pinecone };
