/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Prisma = ({ className }: { className?: string }) => (
  <img
    src="/svgs/prisma-svgrepo-com.svg"
    alt="Prisma"
    className={cn(
      "inline-block shrink-0 size-4 object-contain dark:invert",
      className
    )}
  />
);

export { Prisma };
