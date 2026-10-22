import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import { ArrowRight } from "lucide-react";
import { Section, Reveal } from "@/src/components/aceternity/section";
import Gallery from "@/src/components/ui/gallery";
import { DATA } from "@/src/data/resume";

/** Narrower, padded container with tighter vertical rhythm for every home section. */
export const HOME_WIDTH = "max-w-5xl md:px-10 py-8 md:py-10";

// Paragraphs inherit size and colour from their wrapper, so only inline marks need styling.
const markdown: Components = {
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

const paragraphs = DATA.summary.split(/\n\s*\n/);

export function About() {
  return (
    <Section
      id="about"
      title="Engineering software that scales, and systems that think."
      description="A product-minded engineer who cares about clean architecture, performance and shipping things people actually use."
      className={`${HOME_WIDTH} pt-28 md:pt-44`}
    >
      <div className="flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-left">
          {/* One type style for every paragraph, matching the section description. */}
          {paragraphs.map((text, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="text-pretty text-base leading-[1.8] text-muted-foreground md:text-lg md:leading-[1.8]"
            >
              <ReactMarkdown components={markdown}>{text}</ReactMarkdown>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-2xl">
          <Gallery />
        </Reveal>
      </div>
    </Section>
  );
}
