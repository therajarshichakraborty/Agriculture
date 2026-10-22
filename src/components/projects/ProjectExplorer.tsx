"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Github,
  Package,
  Pause,
  Play
} from "lucide-react";
import { Reveal } from "@/src/components/aceternity/section";
import { StackChip, type StackIcon } from "@/src/components/ui/stack-chip";
import { PROJECTS, skills, type ProjectData } from "@/src/data/projects";
import {
  BetterAuth,
  Clerk,
  Corsair,
  FumaDocs,
  Groq,
  MagicUI,
  NPM,
  Nodejs,
  OpenAI,
  Pydantic,
  ShadcnUI,
  SocketIO,
  Turborepo,
  Vercel,
  Vite
} from "@/src/components/ui/svgs";
import { cn } from "@/src/lib/utils";

const AUTO_ADVANCE_S = 6;
const EASE = [0.22, 1, 0.36, 1] as const;

const key = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

// Shared skill logos first, then the project-only tools.
const techIcons = new Map<string, StackIcon>([
  ...skills.map((s) => [key(s.name), s.icon as StackIcon] as const),
  ...(
    [
      ["shadcn/ui", ShadcnUI],
      ["OpenAI", OpenAI],
      ["Vercel AI SDK", Vercel],
      ["Socket.io", SocketIO],
      ["Better Auth", BetterAuth],
      ["Vite", Vite],
      ["Turborepo", Turborepo],
      ["Pydantic", Pydantic],
      ["NPM", NPM],
      ["Magic UI", MagicUI],
      ["Groq API", Groq],
      ["FumaDocs", FumaDocs],
      ["Corsair", Corsair],
      ["Clerk", Clerk],
      ["Node", Nodejs]
    ] as const
  ).map(([name, icon]) => [key(name), icon as StackIcon] as const)
]);

const techLabel = (name: string) =>
  ({ node: "Node.js", betterauth: "Better Auth" })[key(name)] ?? name;

const pad = (n: number) => String(n).padStart(2, "0");

function Dot() {
  return (
    <span aria-hidden="true" className="size-1 rounded-full bg-foreground" />
  );
}

function Status({ building }: { building: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
      <span className="relative flex size-2">
        <span
          className={cn(
            "absolute inline-flex size-full animate-ping rounded-full opacity-60",
            building ? "bg-amber-400" : "bg-emerald-400"
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            building ? "bg-amber-500" : "bg-emerald-500"
          )}
        />
      </span>
      {building ? "Building" : "Live"}
    </span>
  );
}

function ProjectLink({
  type,
  href,
  primary
}: {
  type: string;
  href: string;
  primary: boolean;
}) {
  const live = type === "Live" || type === "Live Demo";
  const Icon =
    type === "GitHub"
      ? Github
      : type === "NPM"
        ? Package
        : type === "Docs"
          ? BookOpen
          : null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]",
        primary
          ? "bg-foreground text-background hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/15"
          : "border border-border bg-background text-foreground hover:border-foreground/25 hover:shadow-sm"
      )}
    >
      {live && (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
      )}
      {Icon && <Icon aria-hidden="true" className="size-4" />}
      {live ? "Live demo" : type}
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      />
    </a>
  );
}

function Details({ project, first }: { project: ProjectData; first: boolean }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col gap-6"
      >
        <div className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            priority={first}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-1 line-clamp-1 text-sm text-white/75">
              {project.tagline}
            </p>
          </div>
        </div>

        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-muted-foreground">
          {/* Category takes its own line on phones so no separator dangles. */}
          <span className="w-full font-semibold text-foreground sm:w-auto">
            {project.category}
          </span>
          <span className="hidden sm:contents">
            <Dot />
          </span>
          <span className="tabular-nums">{project.duration}</span>
          <Dot />
          <Status building={project.isBuilding} />
        </p>

        <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-foreground">Tech stack:</span>
          <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <StackChip
                key={t.name}
                label={techLabel(t.name)}
                icon={techIcons.get(key(t.name))}
                index={i}
                inView={false}
              />
            ))}
          </ul>
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((l) => (
              <ProjectLink
                key={l.type}
                type={l.type}
                href={l.href}
                primary={l.type === "GitHub"}
              />
            ))}
          </div>
        )}
      </motion.article>
    </AnimatePresence>
  );
}

export function ProjectExplorer() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  const goTo = useCallback((i: number) => {
    setActive(((i % PROJECTS.length) + PROJECTS.length) % PROJECTS.length);
  }, []);

  const step = useCallback((delta: number) => {
    setPlaying(false);
    setActive((i) => (i + delta + PROJECTS.length) % PROJECTS.length);
  }, []);

  // Left/right arrow keys browse projects, unless the user is typing.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  return (
    <section
      aria-label="Projects"
      className="mx-auto w-full max-w-5xl px-6 pb-24"
    >
      <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
        {/* Project list: a rail where the active bar fills while autoplay counts down */}
        <div className="flex min-w-0 flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <ol className="-mx-6 flex gap-1 overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {PROJECTS.map((project, i) => {
              const isActive = i === active;
              return (
                <li key={project.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => {
                      goTo(i);
                      setPlaying(false);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative flex w-44 items-start gap-3 py-2.5 pr-2 pl-4 text-left lg:w-full"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-1 left-0 w-0.5 overflow-hidden rounded-full bg-border"
                    >
                      {isActive && (
                        <motion.span
                          key={`${active}-${playing}`}
                          initial={{ scaleY: playing ? 0 : 1 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            duration: playing ? AUTO_ADVANCE_S : 0,
                            ease: "linear"
                          }}
                          onAnimationComplete={() => {
                            if (playing) goTo(active + 1);
                          }}
                          className="absolute inset-0 origin-top bg-foreground"
                        />
                      )}
                    </span>
                    <span
                      className={cn(
                        "pt-0.5 text-[11px] font-semibold tabular-nums transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/60 group-hover:text-muted-foreground"
                      )}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block truncate text-sm font-semibold tracking-tight transition-colors",
                          isActive
                            ? "text-foreground"
                            : "text-foreground/55 group-hover:text-foreground"
                        )}
                      >
                        {project.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                        {project.tagline}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm active:scale-95"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm active:scale-95"
            >
              <ChevronRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause autoplay" : "Resume autoplay"}
              className="flex size-9 items-center justify-center rounded-full bg-foreground text-background transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
              {playing ? (
                <Pause className="size-3.5" />
              ) : (
                <Play className="size-3.5" />
              )}
            </button>
            <span className="ml-auto text-xs font-semibold text-muted-foreground tabular-nums">
              <span className="text-foreground">{pad(active + 1)}</span> /{" "}
              {pad(PROJECTS.length)}
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <Details project={PROJECTS[active]} first={active === 0} />
        </div>
      </Reveal>
    </section>
  );
}
