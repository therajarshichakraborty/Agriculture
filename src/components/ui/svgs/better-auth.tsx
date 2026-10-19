import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const BetterAuth = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>Better Auth</title>
    <path
      fill="currentColor"
      d="M0 3.39v17.22h5.783v-5.55h6.434V8.939H5.783V3.39Zm12.217 5.55h5.638v6.122h-5.638v5.548H24V3.391H12.217Z"
    />
  </svg>
);

export { BetterAuth };
