/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Nodejs = ({ className }: { className?: string }) => (
  <img
    src="/svgs/Node.js.svg"
    alt="Node.js"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Nodejs };
