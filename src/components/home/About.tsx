import ReactMarkdown from "react-markdown";
import { Section, Reveal } from "@/src/components/aceternity/section";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import DeveloperCodeCard from "@/src/components/developer-code-card";
import Gallery from "@/src/components/ui/gallery";
import { DATA } from "@/src/data/resume";

/** Narrower, more generously padded container used by every home section. */
export const HOME_WIDTH = "max-w-5xl md:px-10";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering software that scales — and systems that think."
      description="A product-minded engineer who cares about clean architecture, performance and shipping things people actually use."
      className={HOME_WIDTH}
    >
      <div className="flex flex-col gap-6">
        <Reveal>
          <GlowCard bordered={false}>
            <div className="prose prose-neutral max-w-none p-6 text-[15px] leading-relaxed dark:prose-invert md:p-10 prose-strong:text-foreground prose-p:text-muted-foreground">
              <ReactMarkdown>{DATA.summary}</ReactMarkdown>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 overflow-hidden">
          <DeveloperCodeCard />
        </Reveal>

        <Reveal delay={0.15}>
          <Gallery />
        </Reveal>
      </div>
    </Section>
  );
}
