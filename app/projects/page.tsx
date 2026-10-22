import { PageHeader } from "@/src/components/layout/PageHeader";
import { ProjectExplorer } from "@/src/components/projects/ProjectExplorer";
import { Underline } from "@/src/components/ui/underline";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { PROJECTS } from "@/src/data/projects";
import {
  PERSON_ID,
  SITE_URL,
  WEBSITE_ID,
  breadcrumbs,
  graph,
  pageMetadata
} from "@/src/lib/seo";

const description =
  "Full-stack, AI and developer-tooling projects by Rajarshi Chakraborty, including Talk To Your GitHub, ReviewRay, ZenithCLI, Synapse UI and SocketPoll.";

export const metadata = pageMetadata({
  title: "Projects",
  description,
  path: "/projects"
});

const projectList = {
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects#collection`,
  url: `${SITE_URL}/projects`,
  name: "Projects by Rajarshi Chakraborty",
  description,
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, i) => {
      const repo = project.links.find((l) => l.type === "GitHub")?.href;
      const live = project.links.find((l) => l.type !== "GitHub")?.href;
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.title,
          headline: project.tagline,
          description: project.description.replace(/\s+/g, " ").trim(),
          url: live ?? repo ?? `${SITE_URL}/projects`,
          ...(repo && { codeRepository: repo }),
          image: `${SITE_URL}${project.image}`,
          keywords: project.technologies.map((t) => t.name).join(", "),
          author: { "@id": PERSON_ID }
        }
      };
    })
  }
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          projectList,
          breadcrumbs([{ name: "Projects", path: "/projects" }])
        )}
      />
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
