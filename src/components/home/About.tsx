import ReactMarkdown from "react-markdown";
import { Section, Reveal } from "@/src/components/aceternity/section";
import Gallery from "@/src/components/ui/gallery";
import { DATA } from "@/src/data/resume";

/** Narrower, padded container with tighter vertical rhythm for every home section. */
export const HOME_WIDTH = "max-w-5xl md:px-10 py-8 md:py-10";

export function About() {
  return (
    <Section
      id="about"
      // eyebrow="About"
      // title="Engineering software that scales, and systems that think."
      // description="A product-minded engineer who cares about clean architecture, performance and shipping things people actually use."
      className={HOME_WIDTH}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="prose prose-neutral mx-auto max-w-3xl text-left text-[15px] leading-relaxed dark:prose-invert md:text-base prose-p:my-4 prose-strong:text-foreground prose-p:text-muted-foreground">
            <ReactMarkdown>{DATA.summary}</ReactMarkdown>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-2xl">
          <Gallery />
        </Reveal>
      </div>
    </Section>
  );
}
