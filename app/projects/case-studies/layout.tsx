import { pageMetadata } from "@/src/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Engineering case studies by Rajarshi Chakraborty: architecture, trade-offs and lessons from full-stack, AI and developer-tooling projects.",
  path: "/projects/case-studies"
});

export default function ProjectsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
