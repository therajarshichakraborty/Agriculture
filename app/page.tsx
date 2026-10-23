import { Hero } from "@/src/components/home/Hero";
import { TechStack } from "@/src/components/home/TechStack";
import { About } from "@/src/components/home/About";
import { DSA } from "@/src/components/home/DSA";
import {
  GithubActivity,
  HireMe,
  Research
} from "@/src/components/home/Showcase";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { graph, profilePage } from "@/src/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(profilePage("/"))} />
      <Hero />
      <About />
      <TechStack />
      <GithubActivity />
      {/* <Research /> */}
      <DSA />
      <HireMe />
    </>
  );
}
