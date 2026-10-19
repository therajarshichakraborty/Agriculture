import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const FumaDocs = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>FumaDocs</title>
    <linearGradient
      id="fuma-grad"
      x1="436.005"
      x2="75.992"
      y1="436.005"
      y2="75.992"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".229" stopColor="#fff" />
      <stop offset=".55" stopColor="#525252" />
      <stop offset=".591" stopColor="#434343" />
      <stop offset=".683" stopColor="#262626" />
      <stop offset=".774" stopColor="#111" />
      <stop offset=".864" stopColor="#040404" />
      <stop offset=".95" />
    </linearGradient>
    <circle cx="256" cy="256" r="254.6" fill="url(#fuma-grad)" />
    <path
      fill="#fafafa"
      d="M256 512C114.8 512 0 397.2 0 256S114.8 0 256 0s256 114.8 256 256s-114.8 256-256 256m0-509.1C116.4 2.9 2.9 116.4 2.9 256S116.4 509.1 256 509.1S509.1 395.6 509.1 256S395.6 2.9 256 2.9"
    />
  </svg>
);

export { FumaDocs };
