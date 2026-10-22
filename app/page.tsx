import { Hero } from "@/src/components/home/Hero";
import { TechStack } from "@/src/components/home/TechStack";
import { About } from "@/src/components/home/About";
import { DSA } from "@/src/components/home/DSA";
import { GithubActivity, HireMe, Research } from "@/src/components/home/Showcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      <GithubActivity />
      <Research />
      <DSA />
      <HireMe />
    </>
  );
}
