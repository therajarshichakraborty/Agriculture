/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const FastAPI = ({ className }: { className?: string }) => (
  <img
    src="/icons/fastapi.svg"
    alt="FastAPI"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { FastAPI };
