import type { Metadata } from "next";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { Bio } from "@/src/components/about/Bio";
import { Experience } from "@/src/components/about/Experience";
import { Education } from "@/src/components/about/Education";
import { Research } from "@/src/components/home/Showcase";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${portfolio.name}, ${portfolio.role} based in ${portfolio.location}.`
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        plain
        title="The person behind the commits."
        description="Where I've worked, what I've studied and the communities that shaped how I build."
      />
      <Bio />
      <Experience />
      <Education />
      <Research />
    </>
  );
}
