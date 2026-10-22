import ReactMarkdown from "react-markdown";
import { Section, Reveal } from "@/src/components/aceternity/section";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import ContactSidebar from "@/src/components/contact-sidebar";
import DeveloperCodeCard from "@/src/components/developer-code-card";
import Gallery from "@/src/components/ui/gallery";
import { DATA } from "@/src/data/resume";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering software that scales — and systems that think."
      description="A product-minded engineer who cares about clean architecture, performance and shipping things people actually use."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <GlowCard className="h-full">
            <div className="prose prose-neutral max-w-none p-6 text-[15px] leading-relaxed dark:prose-invert md:p-8 prose-strong:text-foreground prose-p:text-muted-foreground">
              <ReactMarkdown>{DATA.summary}</ReactMarkdown>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlowCard className="h-full">
            <div className="p-5">
              <ContactSidebar />
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-3">
          <DeveloperCodeCard />
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-3">
          <Gallery />
        </Reveal>
      </div>
    </Section>
  );
}
