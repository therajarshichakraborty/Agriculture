/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const AwsEc2 = ({ className }: { className?: string }) => (
  <img
    src="/icons/aws-ec2.svg"
    alt="AWS EC2"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { AwsEc2 };
export const EC2 = AwsEc2;
