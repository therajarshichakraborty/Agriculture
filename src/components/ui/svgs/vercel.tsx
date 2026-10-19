import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const Vercel = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>Vercel</title>
    <path fill="currentColor" d="M23 21.648H1L12 2.352z" />
  </svg>
);

export { Vercel };
