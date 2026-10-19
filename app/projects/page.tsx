import type { Metadata } from "next";
import { ProjectsClient } from "@/src/components/projects/ProjectsClient";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `Projects — ${portfolio.name}`,
  description: `Explore projects built by ${portfolio.name}, ${portfolio.role}.`
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
