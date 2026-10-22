import { Hero } from "@/src/components/home/Hero";
import { TechStack } from "@/src/components/home/TechStack";
import { About } from "@/src/components/home/About";
import { DSA } from "@/src/components/home/DSA";
import {
  AcademicJourney,
  GithubActivity,
  HireMe,
  ProjectsShowcase,
  Research,
  WorkExperience
} from "@/src/components/home/Showcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      <WorkExperience />
      <AcademicJourney />
      <ProjectsShowcase />
      <GithubActivity />
      <Research />
      <DSA />
      <HireMe />
    </>
  );
}
