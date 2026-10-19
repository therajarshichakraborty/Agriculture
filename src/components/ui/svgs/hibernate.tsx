/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Hibernate = ({ className }: { className?: string }) => (
  <img
    src="/icons/hibernate.svg"
    alt="Hibernate"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Hibernate };
