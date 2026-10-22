import ReactMarkdown from "react-markdown";
import { Section, Reveal } from "@/src/components/aceternity/section";
import { markdownComponents } from "@/src/components/about/markdown";
import Gallery from "@/src/components/ui/gallery";
import { DATA } from "@/src/data/resume";
import { Underline } from "@/src/components/ui/underline";

/** Narrower, padded container with tighter vertical rhythm for every home section. */
export const HOME_WIDTH = "max-w-5xl md:px-10 py-8 md:py-10";

const paragraphs = DATA.summary.split(/\n\s*\n/);

export function About() {
  return (
    <Section
      id="about"
      title={
        <>
          Engineering software that <Underline>scales</Underline>, and systems
          that <Underline delay={0.5}>think</Underline>.
        </>
      }
      description="A product-minded engineer who cares about clean architecture, performance and shipping things people actually use."
      className={`${HOME_WIDTH} pt-16 md:pt-44`}
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
              <ReactMarkdown components={markdownComponents}>
                {text}
              </ReactMarkdown>
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
