/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const MySQL = ({ className }: { className?: string }) => (
  <img
    src="/icons/mysql-icon.svg"
    alt="MySQL"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { MySQL };
