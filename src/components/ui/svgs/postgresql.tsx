/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Postgres = ({ className }: { className?: string }) => (
  <img
    src="/svgs/PostgresSQL.svg"
    alt="PostgreSQL"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Postgres, Postgres as PostgreSQL };
