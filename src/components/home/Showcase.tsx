import { Reveal, Section } from "@/src/components/aceternity/section";
import Publications from "@/src/components/publications";
import GithubContributionBadge from "@/src/components/github-contribution-badge";
import GithubCommits from "@/src/components/github-commits";
import HireMeSection from "@/src/components/section/hire-me";
import { HOME_WIDTH } from "@/src/components/home/About";
import { cn } from "@/src/lib/utils";

const GITHUB_USER = "therajarshichakraborty";

export function GithubActivity() {
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="My latest commits."
      description="Shipping in public: the most recent pushes and contribution graph, live from GitHub."
      className={HOME_WIDTH}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <GithubCommits username={GITHUB_USER} />
        </Reveal>
        <Reveal delay={0.1}>
          <GithubContributionBadge username={GITHUB_USER} theme="purple" />
        </Reveal>
      </div>
    </Section>
  );
}

export function Research() {
  return (
    <section id="publications" className={cn("mx-auto w-full px-6", HOME_WIDTH)}>
      <Reveal>
        <Publications />
      </Reveal>
    </section>
  );
}

export function HireMe() {
  return (
    <section id="hire-me" className={cn("mx-auto w-full px-6", HOME_WIDTH)}>
      <Reveal className="mx-auto max-w-3xl">
        <HireMeSection />
      </Reveal>
    </section>
  );
}
