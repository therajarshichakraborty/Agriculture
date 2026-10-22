import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Reveal } from "@/src/components/aceternity/section";
import { ProjectCarousel } from "@/src/components/21stdotdev/project-carausal";
import Experience from "@/src/components/experience";
import Education from "@/src/components/education";
import Publications from "@/src/components/publications";
import GithubContributionBadge from "@/src/components/github-contribution-badge";
import GithubCommits from "@/src/components/github-commits";
import HireMeSection from "@/src/components/section/hire-me";
import { Section } from "@/src/components/aceternity/section";
import { HOME_WIDTH } from "@/src/components/home/About";
import { cn } from "@/src/lib/utils";

const GITHUB_USER = "therajarshichakraborty";

/** Wraps a legacy section (which renders its own heading) in the page rhythm. */
function Block({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("mx-auto w-full px-6", HOME_WIDTH)}>
      <Reveal>{children}</Reveal>
    </section>
  );
}

export function WorkExperience() {
  return (
    <Block id="experience">
      <Experience />
    </Block>
  );
}

export function AcademicJourney() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      className={HOME_WIDTH}
    >
      <Reveal className="mx-auto max-w-3xl">
        <Education />
      </Reveal>
    </Section>
  );
}

export function ProjectsShowcase() {
  return (
    <Block id="projects">
      <ProjectCarousel />
      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="gap-2 group font-semibold bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          <span>Explore all projects</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </Block>
  );
}

export function GithubActivity() {
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="My latest commits."
      description="Shipping in public — contribution graph and the most recent pushes, live from GitHub."
      className={HOME_WIDTH}
    >
      <div className="flex flex-col gap-6">
        <Reveal>
          <GithubContributionBadge username={GITHUB_USER} theme="purple" />
        </Reveal>
        <Reveal delay={0.1}>
          <GithubCommits username={GITHUB_USER} />
        </Reveal>
      </div>
    </Section>
  );
}

export function Research() {
  return (
    <Block id="publications">
      <Publications />
    </Block>
  );
}

export function HireMe() {
  return (
    <section id="hire-me" className={cn("mx-auto w-full px-6", HOME_WIDTH)}>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-b from-secondary/70 to-background px-6 py-14 md:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(55%_65%_at_50%_0%,color-mix(in_oklch,var(--brand)_20%,transparent),transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-brand/60 to-transparent"
          />
          <HireMeSection />
        </div>
      </Reveal>
    </section>
  );
}
