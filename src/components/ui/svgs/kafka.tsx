/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Kafka = ({ className }: { className?: string }) => (
  <img
    src="/icons/kafka.svg"
    alt="Apache Kafka"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Kafka };
