/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Ollama = ({ className }: { className?: string }) => (
  <img
    src="/icons/ollama.svg"
    alt="Ollama"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Ollama };
