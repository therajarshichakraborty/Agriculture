/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const Terraform = ({ className }: { className?: string }) => (
  <img
    src="/icons/terraform-icon.svg"
    alt="Terraform"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { Terraform };
