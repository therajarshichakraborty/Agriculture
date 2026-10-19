/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Golang = ({ className }: { className?: string }) => (
  <img
    src="/svgs/golang.svg"
    alt="Golang"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Golang };
