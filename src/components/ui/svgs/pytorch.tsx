"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Pytorch = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "inline-flex items-center justify-center shrink-0 size-4",
      className
    )}
  >
    <Image
      src="/svgs/PyTorch.svg"
      alt="PyTorch"
      width={20}
      height={20}
      className="w-full h-full object-contain"
    />
  </div>
);

export { Pytorch };
