/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";

const AwsLambda = ({ className }: { className?: string }) => (
  <img
    src="/icons/aws-lambda.svg"
    alt="AWS Lambda"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
  />
);

export { AwsLambda };
export const Lambda = AwsLambda;
export const AWSLambda = AwsLambda;
