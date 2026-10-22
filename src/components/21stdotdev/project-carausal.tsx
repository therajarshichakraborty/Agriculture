"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PenLine,
  ShieldCheck,
  Database,
  Layers,
  RefreshCw,
  Moon,
  Tag,
  Terminal,
  FolderPlus,
  KeyRound,
  Zap,
  Bug,
  LayoutDashboard,
  Gauge,
  Copy,
  FileCode,
  Code2,
  Accessibility,
  Palette,
  Wifi,
  Users,
  Monitor,
  Link,
  Sliders,
  Package,
  Puzzle,
  Brain,
  Globe,
  Hammer,
  CheckCircle,
  ArrowUpRight,
  Play,
  Pause
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PROJECTS,
  TECH_COLORS,
  skills,
  type ProjectData
} from "@/data/projects";
import {
  NPM,
  BetterAuth,
  BullMQ,
  RabbitMQ,
  Clerk,
  Corsair,
  FumaDocs,
  Groq,
  MagicUI,
  OpenAI,
  Pydantic,
  ShadcnUI,
  SocketIO,
  Turborepo,
  Vercel,
  Vite,
  Express,
  NextJs,
  React as ReactIcon,
  Typescript,
  JavaScript,
  Postgres,
  Prisma,
  Tailwind,
  Drizzle,
  LangChain,
  Streamlit,
  Docker,
  Kubernetes,
  Redis,
  Nodejs,
  NestJs,
  Python,
  Bun,
  Pnpm,
  Inngest,
  Pinecone
} from "@/components/ui/svgs";

// Build a normalized name → icon lookup from the shared skills array
const SKILL_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {};
for (const s of skills) {
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "");
  SKILL_ICON_MAP[normalize(s.name)] = s.icon as React.ComponentType<{
    className?: string;
  }>;
  SKILL_ICON_MAP[s.name.toLowerCase()] = s.icon as React.ComponentType<{
    className?: string;
  }>;
}

const PROJECT_TECH_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  npm: NPM,
  betterauth: BetterAuth,
  "better-auth": BetterAuth,
  "better auth": BetterAuth,
  clerk: Clerk,
  "clerk authentication": Clerk,
  corsair: Corsair,
  "corsair ai sdk": Corsair,
  fumadocs: FumaDocs,
  groq: Groq,
  "groq api": Groq,
  "groq llms": Groq,
  "magic ui": MagicUI,
  magicui: MagicUI,
  openai: OpenAI,
  openrouter: OpenAI,
  pydantic: Pydantic,
  pydantyc: Pydantic,
  "shadcn/ui": ShadcnUI,
  "shadcn ui": ShadcnUI,
  shadcn: ShadcnUI,
  shadcnui: ShadcnUI,
  websocket: SocketIO,
  websockets: SocketIO,
  socketio: SocketIO,
  "socket.io": SocketIO,
  turborepo: Turborepo,
  monorepo: Turborepo,
  bullmq: RabbitMQ,
  "bull mq": RabbitMQ,
  rabbitmq: RabbitMQ,
  "rabbit mq": RabbitMQ,
  "rabbit-mq": RabbitMQ,
  vercel: Vercel,
  "vercel ai sdk": Vercel,
  vite: Vite,
  express: Express,
  "express.js": Express,
  expressjs: Express,
  "next.js": NextJs,
  nextjs: NextJs,
  react: ReactIcon,
  "react.js": ReactIcon,
  reactjs: ReactIcon,
  typescript: Typescript,
  ts: Typescript,
  javascript: JavaScript,
  js: JavaScript,
  postgresql: Postgres,
  postgres: Postgres,
  tailwind: Tailwind,
  tailwindcss: Tailwind,
  "tailwind css": Tailwind,
  prisma: Prisma,
  "prisma orm": Prisma,
  prismaorm: Prisma,
  drizzle: Drizzle,
  "drizzle orm": Drizzle,
  drizzleorm: Drizzle,
  langchain: LangChain,
  "llm integration": LangChain,
  "ai integration": LangChain,
  streamlit: Streamlit,
  docker: Docker,
  kubernetes: Kubernetes,
  redis: Redis,
  node: Nodejs,
  nodejs: Nodejs,
  "node.js": Nodejs,
  "nose.js": Nodejs,
  nestjs: NestJs,
  "nest.js": NestJs,
  nest: NestJs,
  python: Python,
  bun: Bun,
  pnpm: Pnpm,
  inngest: Inngest,
  pinecone: Pinecone
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  PenLine,
  ShieldCheck,
  Database,
  Layers,
  RefreshCw,
  Moon,
  Tag,
  Terminal,
  FolderPlus,
  KeyRound,
  Zap,
  Bug,
  LayoutDashboard,
  Gauge,
  Copy,
  FileCode,
  Code2,
  Accessibility,
  Palette,
  Wifi,
  Users,
  Monitor,
  Link,
  Sliders,
  Package,
  Puzzle,
  Brain,
  Globe,
  Hammer,
  CheckCircle,
  Github,
  ExternalLink,
  BookOpen
};

function DynIcon({ name, className }: { name: string; className?: string }) {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}

type BadgeStatus = "building" | "live" | "archived";

const statusConfig: Record<
  BadgeStatus,
  {
    label: string;
    dot: string;
    ring: string;
    text: string;
    border: string;
    bg: string;
    glow: string;
  }
> = {
  building: {
    label: "Building",
    dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
    ring: "bg-amber-400",
    text: "text-amber-600 dark:text-amber-300 font-bold",
    border: "border-amber-500/30 dark:border-amber-400/30",
    bg: "bg-amber-500/10 dark:bg-amber-400/15",
    glow: "shadow-[0_0_12px_rgba(245,158,11,0.25)]"
  },
  live: {
    label: "Live",
    dot: "bg-lime-400 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]",
    ring: "bg-lime-400 dark:bg-white",
    text: "text-lime-600 dark:text-white font-bold",
    border: "border-lime-500/30 dark:border-white/25",
    bg: "bg-lime-500/10 dark:bg-white/10",
    glow: "shadow-[0_0_12px_rgba(132,204,22,0.25)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)]"
  },
  archived: {
    label: "Archived",
    dot: "bg-zinc-400",
    ring: "bg-zinc-400",
    text: "text-zinc-500 dark:text-zinc-400 font-bold",
    border: "border-zinc-500/30",
    bg: "bg-zinc-500/10",
    glow: ""
  }
};

interface StatusBadgeProps {
  status: BadgeStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const isAnimated = status === "building" || status === "live";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-[11px] font-bold tracking-widest uppercase select-none transition-all duration-300 backdrop-blur-md hover:scale-[1.05]",
        config.border,
        config.bg,
        config.text,
        config.glow
      )}
    >
      <span className="relative flex h-2 w-2">
        {isAnimated && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              config.ring
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            config.dot
          )}
        />
      </span>
      <span>{config.label}</span>
    </span>
  );
}

function TechBadge({ name, delay }: { name: string; delay: number }) {
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const Icon =
    PROJECT_TECH_MAP[name.toLowerCase()] ??
    PROJECT_TECH_MAP[normalize(name)] ??
    SKILL_ICON_MAP[normalize(name)] ??
    SKILL_ICON_MAP[name.toLowerCase()] ??
    null;

  let displayName = name;
  const lower = name.toLowerCase();
  if (lower === "express.js" || lower === "expressjs") {
    displayName = "Express";
  } else if (lower === "openrouter") {
    displayName = "OpenAI";
  } else if (
    lower === "tailwindcss" ||
    lower === "tailwind css" ||
    lower === "tailwind-css"
  ) {
    displayName = "Tailwind";
  } else if (lower === "ai integration" || lower === "ai-integration") {
    displayName = "LLM Integration";
  } else if (lower === "prisma orm" || lower === "prisma-orm") {
    displayName = "Prisma";
  } else if (lower === "drizzle orm" || lower === "drizzle-orm") {
    displayName = "Drizzle";
  } else if (lower === "websocket" || lower === "websockets") {
    displayName = "Socket.io";
  } else if (lower === "monorepo") {
    displayName = "Turborepo";
  } else if (lower === "bullmq" || lower === "bull mq" || lower === "bull-mq") {
    displayName = "RabbitMQ";
  } else if (lower === "node.js" || lower === "nodejs" || lower === "nose.js") {
    displayName = "Node";
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, delay }}
      className={cn(
        "group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer select-none border-none",
        "bg-transparent text-neutral-800 dark:text-neutral-200",
        "hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:text-foreground",
        "hover:shadow-md hover:shadow-primary/5 transition-all duration-300 ease-out"
      )}
    >
      {Icon && (
        <Icon className="size-4.5 shrink-0 transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110" />
      )}
      <span>{displayName}</span>
    </motion.span>
  );
}

function FeatureItem({
  text,
  icon,
  delay
}: {
  text: string;
  icon: string;
  delay: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay }}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
        <DynIcon name={icon} className="h-3 w-3" />
      </span>
      <span className="leading-tight">{text}</span>
    </motion.li>
  );
}

function StatPill({
  label,
  value,
  icon,
  delay
}: {
  label: string;
  value: string;
  icon: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay }}
      className="flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-3 py-2"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
        <DynIcon name={icon} className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/70 font-semibold">
          {label}
        </p>
        <p className="text-xs font-bold text-foreground leading-tight truncate">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function CtaButton({
  href,
  type,
  delay
}: {
  href: string;
  type: string;
  delay: number;
}) {
  const isGithub = type === "GitHub";
  const isLive = type === "Live" || type === "Live Demo" || type === "Website";
  const Icon = isGithub ? Github : ExternalLink;
  if (!href) return null;
  return (
    <motion.a
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 select-none",
        "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isLive
          ? "border border-lime-500/40 dark:border-white/25 bg-transparent text-lime-600 dark:text-white hover:bg-lime-500/10 dark:hover:bg-white/10 hover:border-lime-500/70 dark:hover:border-white/50 hover:scale-[1.03] hover:-translate-y-0.5 shadow-xs dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
          : isGithub
            ? "border border-border/80 bg-background text-foreground hover:bg-muted hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5"
            : "border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5"
      )}
      aria-label={type}
    >
      {isLive && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
        </span>
      )}
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      <span>{type}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}

const ProjectThumb = memo(function ProjectThumb({
  project,
  isActive,
  onClick
}: {
  project: ProjectData;
  isActive: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`View ${project.title}`}
      aria-current={isActive ? "true" : undefined}
      className={cn(
        "group relative w-full lg:w-[175px] shrink-0 rounded-2xl border p-3.5 text-left",
        "outline-none transition-all duration-200 ease-out",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "border-border bg-accent/60 shadow-sm"
          : "border-border/40 bg-muted/10 hover:border-border hover:bg-accent/30"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <span
            className={cn(
              "block truncate text-sm font-semibold tracking-tight transition-colors duration-200",
              isActive
                ? "text-foreground"
                : "text-foreground/70 group-hover:text-foreground"
            )}
          >
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">
              {project.title}
            </span>
          </span>
          <p
            className={cn(
              "mt-0.5 line-clamp-1 text-[11px] leading-tight transition-colors duration-200",
              isActive
                ? "text-muted-foreground"
                : "text-muted-foreground/60 group-hover:text-muted-foreground"
            )}
          >
            {project.tagline}
          </p>
        </div>
        <ArrowUpRight
          className={cn(
            "size-3.5 shrink-0 translate-y-0.5 transition-all duration-200 ease-out",
            isActive
              ? "translate-x-0 opacity-60 text-foreground"
              : "-translate-x-1 opacity-0 text-muted-foreground group-hover:translate-x-0 group-hover:opacity-50"
          )}
        />
      </div>
    </button>
  );
});

function DetailsPanel({ project }: { project: ProjectData }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-5 w-full"
      >
        <div className="relative w-full overflow-hidden rounded-2xl">
          <div style={{ paddingBottom: "65.00%" }} className="relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover absolute inset-0"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 leading-snug line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full rounded-2xl">
          <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground">
            <span className="inline-flex items-center rounded-lg bg-linear-to-r from-cyan-400 to-blue-500 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
              {project.category}
            </span>
            <span className="font-medium">{project.duration}</span>
            <StatusBadge status={project.isBuilding ? "building" : "live"} />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="w-full py-1">
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <TechBadge key={t.name} name={t.name} delay={i * 0.03} />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-2.5">
              {project.links.map((l, i) => (
                <CtaButton
                  key={l.type}
                  href={l.href}
                  type={l.type}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const AUTO_INTERVAL = 6000;

  const goTo = useCallback((index: number) => {
    setActiveIndex(
      ((index % PROJECTS.length) + PROJECTS.length) % PROJECTS.length
    );
  }, []);

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
    setIsPlaying(false);
  }, [activeIndex, goTo]);
  const next = useCallback(() => {
    goTo(activeIndex + 1);
    setIsPlaying(false);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % PROJECTS.length);
      }, AUTO_INTERVAL);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const active = PROJECTS[activeIndex];

  return (
    <section
      id="projects-carousel"
      className="w-full"
      aria-label="Current Projects"
    >
      <div className="flex flex-col gap-y-4 items-center justify-center mb-10">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              My work spans{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-medium">
                Full Stack Web Applications
              </span>
              , open-source contributions, and theming systems. Click any card
              to explore with full details and left/right navigation. I&apos;m
              currently working on{" "}
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-medium">
                Generative AI & AI-powered agents
              </span>
              , building intelligent, AI-powered systems.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-6 items-start">
        <div className="min-w-0 w-full order-1 lg:order-2">
          <DetailsPanel project={active} />
        </div>

        <div className="order-2 lg:order-1 w-full lg:w-auto">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 lg:overflow-y-auto pb-1 lg:pb-0 lg:max-h-[480px]"
            style={
              {
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              } as React.CSSProperties
            }
          >
            <style>{`.project-list-scroll::-webkit-scrollbar { display: none; }`}</style>
            {PROJECTS.map((project, i) => (
              <ProjectThumb
                key={project.id}
                project={project}
                isActive={i === activeIndex}
                index={i}
                onClick={() => {
                  goTo(i);
                  setIsPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Feature() {
  return null;
}
