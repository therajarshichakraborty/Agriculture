/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const ReactNative = ({ className }: { className?: string }) => (
  <img
    src="/svgs/react-native.svg"
    alt="React Native"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { ReactNative };
