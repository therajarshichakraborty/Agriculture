import Link from "next/link";
import type { Components } from "react-markdown";
import { ArrowRight } from "lucide-react";

// Paragraphs inherit size and colour from their wrapper, so only inline marks need styling.
export const markdownComponents: Components = {
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  // Call-to-action link: brand gradient text, growing underline and a nudging arrow.
  a: ({ href = "", children }) => (
    <Link
      href={href}
      className="group/cta relative inline-flex items-center gap-1 font-semibold"
    >
      <span className="bg-linear-to-r from-red-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
        {children}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 text-violet-500 transition-transform duration-300 group-hover/cta:translate-x-1"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-red-500 via-pink-500 to-violet-500 transition-transform duration-500 ease-out group-hover/cta:scale-x-100"
      />
    </Link>
  )
};
