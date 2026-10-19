import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const NPM = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>NPM</title>
    <path fill="#e53935" d="M4 4v24h24V4Zm20 20h-4V12h-4v12H8V8h16Z" />
  </svg>
);

const Npm = NPM;
export { NPM, Npm };
