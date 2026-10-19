/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const HuggingFace = ({ className }: { className?: string }) => (
  <img
    src="/icons/huggingface.svg"
    alt="Hugging Face"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { HuggingFace };
