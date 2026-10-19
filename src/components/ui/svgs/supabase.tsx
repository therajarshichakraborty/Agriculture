/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Supabase = ({ className }: { className?: string }) => (
  <img
    src="/icons/supabase.svg"
    alt="Supabase"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Supabase };
