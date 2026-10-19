/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const GraphQL = ({ className }: { className?: string }) => (
  <img
    src="/icons/graphql.svg"
    alt="GraphQL"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { GraphQL };
