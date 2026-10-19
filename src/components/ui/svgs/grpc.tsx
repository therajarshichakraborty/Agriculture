/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Grpc = ({ className }: { className?: string }) => (
  <img
    src="/icons/grpc.svg"
    alt="gRPC"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Grpc };
export const GRPC = Grpc;
