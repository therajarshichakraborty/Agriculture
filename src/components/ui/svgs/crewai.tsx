/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const CrewAI = ({ className }: { className?: string }) => (
  <img
    src="/icons/crewai.svg"
    alt="CrewAI"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { CrewAI };
