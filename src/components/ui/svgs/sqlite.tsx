/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const SQLite = ({ className }: { className?: string }) => (
  <img
    src="/icons/sqlite.svg"
    alt="SQLite"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { SQLite };
