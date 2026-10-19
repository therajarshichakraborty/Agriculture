/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const AwsS3 = ({ className }: { className?: string }) => (
  <img
    src="/icons/aws-s3.svg"
    alt="AWS S3"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { AwsS3 };
export const S3 = AwsS3;
export const AWSS3 = AwsS3;
export const AmazonS3 = AwsS3;
