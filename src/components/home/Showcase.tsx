import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/aceternity/section";
import { ProjectCarousel } from "@/src/components/21stdotdev/project-carausal";
import Experience from "@/src/components/experience";
import Education from "@/src/components/education";
import Publications from "@/src/components/publications";
import GithubContributionBadge from "@/src/components/github-contribution-badge";
import GithubCommits from "@/src/components/github-commits";
import HireMeSection from "@/src/components/section/hire-me";
import { Section } from "@/src/components/aceternity/section";
import { LampContainer } from "@/src/components/aceternity/lamp";
import { HOME_WIDTH } from "@/src/components/home/About";
import { cn } from "@/src/lib/utils";

const GITHUB_USER = "therajarshichakraborty";

/** Wraps a legacy section (which renders its own heading) in the page rhythm. */
function Block({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("mx-auto w-full px-6 py-20 md:py-28", HOME_WIDTH)}>
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
      title="My academic journey."
      description="Computer Science & Engineering at Techno Main Salt Lake — with an IEEE publication along the way."
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
        <Link
          href="/projects"
          className="group inline-flex h-11 items-center gap-2 rounded-xl bg-card px-5 text-sm font-medium shadow-[0_0_0_1px_var(--border),0_2px_8px_-2px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_var(--border),0_12px_24px_-12px_var(--brand)]"
        >
          Explore all projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
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
    <section id="hire-me" className={cn("mx-auto w-full px-6 py-20", HOME_WIDTH)}>
      <LampContainer>
        <HireMeSection />
      </LampContainer>
    </section>
  );
}
