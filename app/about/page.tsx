import type { Metadata } from "next";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { Bio } from "@/src/components/about/Bio";
import { Skills } from "@/src/components/about/Skills";
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
        eyebrow="About me"
        title="Engineer. Researcher. Builder."
        description={portfolio.bio}
      />
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <Research />
    </>
  );
}
