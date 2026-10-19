/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Gin = ({ className }: { className?: string }) => (
  <img
    src="/icons/gin.svg"
    alt="Gin"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Gin };
