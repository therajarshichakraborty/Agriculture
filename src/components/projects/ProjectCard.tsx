import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import type { ProjectData } from "@/src/data/projects";

export function ProjectCard({ project }: { project: ProjectData }) {
  const github = project.links.find((l) => l.type === "GitHub");
  const live = project.links.find((l) => l.type !== "GitHub");

  return (
    <GlowCard className="h-full">
      <article className="flex h-full flex-col">
        <div className="relative aspect-16/10 overflow-hidden rounded-t-[calc(var(--radius-2xl)-1px)] border-b border-border bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover/glow:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="glass rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium">
              {project.category}
            </span>
            {project.isBuilding && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-medium text-amber-500">
                Building
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 6).map((t) => (
              <li
                key={t.name}
                className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-secondary-foreground"
              >
                {t.name}
              </li>
            ))}
            {project.technologies.length > 6 && (
              <li className="px-1 py-0.5 text-[11px] text-muted-foreground">
                +{project.technologies.length - 6}
              </li>
            )}
          </ul>
          <div className="flex gap-2 border-t border-border pt-4">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium transition-colors hover:bg-accent"
              >
                <Github className="size-3.5" /> Source
              </a>
            )}
            {live && (
              <a
                href={live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-foreground px-3 text-xs font-medium text-background transition-opacity hover:opacity-90"
              >
                {live.type} <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </GlowCard>
  );
}
