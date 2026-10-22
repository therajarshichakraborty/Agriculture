import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore full-stack, AI, and backend projects engineered by Rajarshi Chakraborty, including OpenStack, ApexZero, ZenithCLI, and Synapse UI.",
  openGraph: {
    title: `Projects | ${DATA.name}`,
    description:
      "Explore full-stack, AI, and backend projects engineered by Rajarshi Chakraborty.",
    url: `${DATA.url}/projects/case-studies`,
    siteName: `${DATA.name} Portfolio`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${DATA.name}`,
    description:
      "Explore full-stack, AI, and backend projects engineered by Rajarshi Chakraborty."
  }
};

export default function ProjectsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
