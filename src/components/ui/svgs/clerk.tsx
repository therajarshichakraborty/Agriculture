import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const Clerk = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>Clerk</title>
    <g fill="none">
      <circle cx="64" cy="64" r="20" fill="#6c47ff" />
      <path
        fill="#bab1ff"
        d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.85 35.85 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.85 35.85 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64C0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788"
      />
      <path
        fill="#6c47ff"
        d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128s-25.399-3.974-35.572-10.788c-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.322-1.32 3.37-1.53 5.033-.678A35.85 35.85 0 0 0 64 100a35.85 35.85 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678z"
      />
    </g>
  </svg>
);

export { Clerk };
