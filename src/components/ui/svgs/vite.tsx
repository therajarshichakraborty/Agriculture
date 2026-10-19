import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

const Vite = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 46"
    className={cn("inline-block shrink-0 size-4 object-contain", className)}
    {...props}
  >
    <title>Vite</title>
    <mask
      id="vite-mask"
      width="48"
      height="46"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" />
    </mask>
    <g fill="none">
      <path
        fill="#863bff"
        d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
      />
      <g mask="url(#vite-mask)">
        <ellipse
          cx="5.508"
          cy="14.704"
          fill="#ede6ff"
          rx="5.508"
          ry="14.704"
          transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"
        />
        <ellipse
          cx="10.399"
          cy="29.851"
          fill="#ede6ff"
          rx="10.399"
          ry="29.851"
          transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"
        />
        <ellipse
          cx="5.508"
          cy="30.487"
          fill="#7e14ff"
          rx="5.508"
          ry="30.487"
          transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"
        />
        <ellipse
          cx="5.508"
          cy="30.599"
          fill="#7e14ff"
          rx="5.508"
          ry="30.599"
          transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"
        />
        <ellipse
          cx="14.072"
          cy="22.078"
          fill="#ede6ff"
          rx="14.072"
          ry="22.078"
          transform="rotate(93.35 24.506 48.493)scale(-1 1)"
        />
        <ellipse
          cx="41.412"
          cy="6.333"
          fill="#47bfff"
          rx="5.971"
          ry="9.665"
          transform="rotate(37.892 41.412 6.333)"
        />
        <ellipse
          cx="38.418"
          cy="32.4"
          fill="#47bfff"
          rx="5.971"
          ry="15.297"
          transform="rotate(37.892 38.418 32.4)"
        />
      </g>
    </g>
  </svg>
);

export { Vite };
