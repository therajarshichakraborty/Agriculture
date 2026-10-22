import type { Metadata } from "next";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { ProjectExplorer } from "@/src/components/projects/ProjectExplorer";
import { portfolio } from "@/src/config/portfolio";
import { Underline } from "@/src/components/ui/underline";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore full-stack, AI and developer-tooling projects built by ${portfolio.name}.`
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        plain
        title={
          <>
            Things I&apos;ve designed, built and <Underline>shipped</Underline>.
          </>
        }
        description="AI platforms, developer tools, real-time systems and UI libraries, engineered end to end."
      />
      <ProjectExplorer />
    </>
  );
}
