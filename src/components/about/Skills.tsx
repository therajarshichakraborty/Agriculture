"use client";

import { Section, Reveal } from "@/src/components/aceternity/section";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import { DATA } from "@/src/data/resume";

const groups: { title: string; blurb: string; names: string[] }[] = [
  {
    title: "Languages & Frontend",
    blurb: "Type-safe interfaces with motion and polish.",
    names: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind", "React Native", "Expo", "Java", "C++", "Python", "Go"]
  },
  {
    title: "Backend & APIs",
    blurb: "Services designed for scale and reliability.",
    names: ["Node", "Express", "NestJS", "Hono", "FastAPI", "GraphQL", "gRPC", "tRPC", "Kafka", "RabbitMQ"]
  },
  {
    title: "Data",
    blurb: "Relational, document, graph and vector stores.",
    names: ["PostgreSQL", "SQLite", "MongoDB", "Mongoose", "Redis", "Firebase", "Neo4j", "Prisma", "Drizzle"]
  },
  {
    title: "AI & ML",
    blurb: "From notebooks to production agents.",
    names: ["LangChain", "Langfuse", "Pinecone", "Qdrant", "PyTorch", "NumPy", "Pandas", "Scikit Learn"]
  },
  {
    title: "Cloud & DevOps",
    blurb: "Ship, observe and automate.",
    names: ["Docker", "Kubernetes", "AWS", "GCP", "Cloudflare", "Terraform", "GitHub Actions", "Jenkins", "Grafana", "Jest", "Git", "Shell", "Android Studio"]
  }
];

const byName = new Map<string, (typeof DATA.skills)[number]>(
  DATA.skills.map((s) => [s.name, s])
);

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="A stack chosen for production."
      description="The languages, frameworks and platforms I reach for, grouped by where they live in a system."
    >
      <div className="grid gap-4 md:grid-cols-6">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className={i < 2 ? "md:col-span-3" : "md:col-span-2"}
          >
            <GlowCard className="h-full">
              <div className="flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="font-semibold tracking-tight">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.blurb}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.names.map((name) => {
                    const skill = byName.get(name);
                    if (!skill) return null;
                    return (
                      <li
                        key={name}
                        className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5"
                      >
                        <skill.icon className="size-4" />
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
