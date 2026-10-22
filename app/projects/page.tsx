import type { Metadata } from "next";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { ProjectExplorer } from "@/src/components/projects/ProjectExplorer";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore full-stack, AI and developer-tooling projects built by ${portfolio.name}.`
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        plain
        title="Things I've designed, built and shipped."
        description="AI platforms, developer tools, real-time systems and UI libraries, engineered end to end."
      />
      <ProjectExplorer />
    </>
  );
}
