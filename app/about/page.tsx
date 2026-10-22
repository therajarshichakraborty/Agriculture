import { PageHeader } from "@/src/components/layout/PageHeader";
import { Bio } from "@/src/components/about/Bio";
import { Experience } from "@/src/components/about/Experience";
import { Education } from "@/src/components/about/Education";
import { Research } from "@/src/components/home/Showcase";
import { Underline } from "@/src/components/ui/underline";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { breadcrumbs, graph, pageMetadata, profilePage } from "@/src/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Rajarshi Chakraborty: Software Engineer at Brand Voy, UnderGrad Researcher at Techno Main Salt Lake and community lead at Samarth TMSL and Geekonix, Kolkata.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          profilePage("/about"),
          breadcrumbs([{ name: "About", path: "/about" }])
        )}
      />
      <PageHeader
        plain
        title={
          <>
            The person behind the <Underline>commits</Underline>.
          </>
        }
        description="Where I've worked, what I've studied and the communities that shaped how I build."
      />
      <Bio />
      <Experience />
      <Education />
      <Research />
    </>
  );
}
