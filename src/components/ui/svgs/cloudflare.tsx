/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Cloudflare = ({ className }: { className?: string }) => (
  <img
    src="/icons/cloudflare-icon.svg"
    alt="Cloudflare"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Cloudflare };
