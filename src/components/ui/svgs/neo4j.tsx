/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Neo4j = ({ className }: { className?: string }) => (
  <img
    src="/icons/file-type-light-neo4j.svg"
    alt="Neo4j"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Neo4j };
