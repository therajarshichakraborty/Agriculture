/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Spring = ({ className }: { className?: string }) => (
  <img
    src="/icons/spring.svg"
    alt="Spring Boot"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Spring };
export const SpringBoot = Spring;
