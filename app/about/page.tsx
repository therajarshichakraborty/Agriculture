import type { Metadata } from "next";
import { Bio } from "@/src/components/about/Bio";
import { Skills } from "@/src/components/about/Skills";
import { Experience } from "@/src/components/about/Experience";
import { Education } from "@/src/components/about/Education";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `About — ${portfolio.name}`,
  description: `Learn more about ${portfolio.name}, ${portfolio.role} based in ${portfolio.location}.`
};

export default function AboutPage() {
  return (
    <>
      <Bio />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}
