import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { ProjectsClient } from "@/src/components/projects/ProjectsClient";
import ProjectsSection from "@/src/components/section/projects-section";
import { Reveal } from "@/src/components/aceternity/section";
import { PROJECTS } from "@/src/data/projects";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore full-stack, AI and developer-tooling projects built by ${portfolio.name}.`
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${PROJECTS.length} projects`}
        title="Things I've designed, built and shipped."
        description="AI platforms, developer tools, real-time systems and UI libraries — engineered end-to-end."
      >
        <Link
          href="/projects/case-studies"
          className="group inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-foreground/20"
        >
          Read the engineering case studies
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </PageHeader>
      <ProjectsClient />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <ProjectsSection />
        </Reveal>
      </section>
    </>
  );
}
