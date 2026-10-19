/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Grafana = ({ className }: { className?: string }) => (
  <img
    src="/icons/grafana.svg"
    alt="Grafana"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Grafana };
