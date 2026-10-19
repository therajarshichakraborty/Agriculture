/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Streamlit = ({ className }: { className?: string }) => (
  <img
    src="/icons/streamlit.svg"
    alt="Streamlit"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Streamlit };
