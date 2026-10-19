/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const LangChain = ({ className }: { className?: string }) => (
  <img
    src="/svgs/langchain.svg"
    alt="LangChain"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { LangChain };
