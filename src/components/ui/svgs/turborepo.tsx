import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const Turborepo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>Turborepo</title>
    <g fill="none">
      <path
        fill="#000"
        className="dark:fill-white"
        d="M49.96 17.482C32.046 17.482 17.47 32.07 17.47 50s14.575 32.518 32.49 32.518S82.452 67.93 82.452 50S67.877 17.482 49.961 17.482Zm0 49.346c-9.287 0-16.814-7.533-16.814-16.828s7.527-16.828 16.815-16.828S66.776 40.705 66.776 50s-7.527 16.828-16.815 16.828Z"
      />
      <path
        fill="url(#turbo-grad)"
        fillRule="evenodd"
        d="M52.683 12.141V0C79.053 1.41 100 23.26 100 50s-20.948 48.583-47.317 50V87.859C72.336 86.454 87.898 70.019 87.898 50S72.336 13.546 52.683 12.141M21.305 74.827c-5.21-6.019-8.568-13.685-9.167-22.102H0C.63 64.503 5.337 75.19 12.713 83.42l8.586-8.593zM47.237 100V87.859c-8.417-.6-16.077-3.954-22.091-9.174l-8.586 8.593C24.79 94.665 35.469 99.37 47.23 100z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="turbo-grad"
          x1="54.644"
          x2="5.425"
          y1="7.031"
          y2="56.211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096ff" />
          <stop offset="1" stopColor="#ff1e56" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

export { Turborepo };
