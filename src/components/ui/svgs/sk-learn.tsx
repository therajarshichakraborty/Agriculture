"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SkLearn = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "inline-flex items-center justify-center shrink-0 size-4",
      className
    )}
  >
    <Image
      src="/svgs/scikit-learn.svg"
      alt="Scikit-Learn"
      width={20}
      height={20}
      className="w-full h-full object-contain"
    />
  </div>
);

export { SkLearn };
