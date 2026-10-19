/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Aws = ({ className }: { className?: string }) => (
  <img
    src="/icons/aws.svg"
    alt="AWS"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Aws };
export const AWS = Aws;
