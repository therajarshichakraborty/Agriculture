/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Gcp = ({ className }: { className?: string }) => (
  <img
    src="/icons/gcp.svg"
    alt="GCP"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Gcp };
export const GCP = Gcp;
