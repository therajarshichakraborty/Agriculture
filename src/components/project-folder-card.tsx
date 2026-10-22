/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedFolder } from "@/components/3d-folder";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import {
  Typescript,
  Nodejs,
  Python,
  Golang,
  Docker,
  Kubernetes,
  Java,
  React as ReactIcon,
  Postgres,
  CPP,
  Express,
  MongoDB,
  NumPy,
  Pandas,
  SkLearn,
  Pytorch,
  Tailwind,
  Git,
  Prisma,
  JavaScript,
  NextJs,
  Csharp,
  Redis,
  NestJs,
  TRPC,
  Drizzle,
  LangChain,
  NPM,
  BetterAuth,
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
  BullMQ,
  RabbitMQ,
  Bun,
  Pnpm,
  Inngest,
  Pinecone,
  Streamlit
} from "@/components/ui/svgs";
import { ArrowUpRight } from "lucide-react";

const tagIconMap: Record<string, React.ComponentType<any>> = {
  typescript: Typescript,
  ts: Typescript,
  node: Nodejs,
  "node.js": Nodejs,
  nodejs: Nodejs,
  "nose.js": Nodejs,
  python: Python,
  go: Golang,
  golang: Golang,
  docker: Docker,
  kubernetes: Kubernetes,
  java: Java,
  react: ReactIcon,
  "react.js": ReactIcon,
  reactjs: ReactIcon,
  postgres: Postgres,
  postgresql: Postgres,
  redis: Redis,
  nestjs: NestJs,
  "nest.js": NestJs,
  nest: NestJs,
  drizzle: Drizzle,
  "drizzle orm": Drizzle,
  drizzleorm: Drizzle,
  trpc: TRPC,
  langchain: LangChain,
  "llm integration": LangChain,
  "ai integration": LangChain,
  "c++": CPP,
  cpp: CPP,
  express: Express,
  "express.js": Express,
  expressjs: Express,
  mongodb: MongoDB,
  mongo: MongoDB,
  numpy: NumPy,
  pandas: Pandas,
  "scikit learn": SkLearn,
  "sk-learn": SkLearn,
  pytorch: Pytorch,
  tailwind: Tailwind,
  tailwindcss: Tailwind,
  "tailwind css": Tailwind,
  git: Git,
  prisma: Prisma,
  "prisma orm": Prisma,
  prismaorm: Prisma,
  javascript: JavaScript,
  js: JavaScript,
  "next.js": NextJs,
  nextjs: NextJs,
  "c#": Csharp,
  csharp: Csharp,
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
  bun: Bun,
  pnpm: Pnpm,
  inngest: Inngest,
  pinecone: Pinecone,
  streamlit: Streamlit
};

const getSkill = (tag: string) => {
  const normalizedTag = tag.toLowerCase().replace(/[^a-z0-9+]/g, "");
  if (normalizedTag === "postgresql" || normalizedTag === "postgres")
    return DATA.skills.find(
      (s) =>
        s.name.toLowerCase() === "postgresql" ||
        s.name.toLowerCase() === "postgres"
    );
  if (normalizedTag === "tailwindcss" || normalizedTag === "tailwind")
    return DATA.skills.find((s) => s.name.toLowerCase() === "tailwind");
  if (normalizedTag === "expressjs" || normalizedTag === "express")
    return DATA.skills.find((s) => s.name.toLowerCase() === "express");
  if (normalizedTag === "reactjs" || normalizedTag === "react")
    return DATA.skills.find((s) => s.name.toLowerCase() === "react");
  if (normalizedTag === "nodejs" || normalizedTag === "node")
    return DATA.skills.find((s) => s.name.toLowerCase() === "node.js");
  if (normalizedTag === "javascript" || normalizedTag === "js")
    return DATA.skills.find((s) => s.name.toLowerCase() === "javascript");
  if (normalizedTag === "typescript" || normalizedTag === "ts")
    return DATA.skills.find((s) => s.name.toLowerCase() === "typescript");
  if (normalizedTag === "openai") return { name: "OpenAI", icon: Icons.openai };
  if (normalizedTag === "golang" || normalizedTag === "go")
    return DATA.skills.find((s) => s.name.toLowerCase() === "go");
  if (normalizedTag === "scikitlearn" || normalizedTag === "sklearn")
    return DATA.skills.find((s) => s.name.toLowerCase() === "scikit learn");
  return (
    DATA.skills.find(
      (s) => s.name.toLowerCase().replace(/[^a-z0-9+]/g, "") === normalizedTag
    ) || null
  );
};

const BLUR_FADE_DELAY = 0.04;

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  extraImages?: string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  isBuilding?: boolean;
  index?: number;
}

export function ProjectFolderCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  extraImages = [],
  links,
  className,
  isBuilding,
  index = 0
}: Props) {
  const fallback = image || "/placeholder.svg";

  // Build 3 images for the folder fan-out animation
  const folderProjects = [
    { id: "1", image: fallback, title },
    { id: "2", image: extraImages[0] ?? fallback, title: `${title} preview` },
    { id: "3", image: extraImages[1] ?? fallback, title: `${title} detail` }
  ];

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 12 + index * 0.06} className="h-full">
      {/*
        The outer wrapper is a subtle glass panel.
        The AnimatedFolder sits on top with its own `bg-card` look; we let it
        keep that so it doesn't fight our backdrop-blur layer. The description
        panel below is clearly separated by a top border.
      */}
      <div
        className={cn(
          "group flex flex-col h-full rounded-2xl overflow-hidden relative",
          "border border-neutral-200/80 dark:border-neutral-800/60",
          "hover:border-neutral-300 dark:hover:border-neutral-700",
          "hover:shadow-2xl hover:shadow-primary/[0.04] dark:hover:shadow-white/[0.02]",
          "hover:-translate-y-1.5 hover:scale-[1.01]",
          "transition-all duration-500 ease-out",
          className
        )}
      >
        {isBuilding ? (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-wider uppercase font-bold rounded-full bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 dark:border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.25)] backdrop-blur-md select-none z-50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            </span>
            Building
          </span>
        ) : (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-wider uppercase font-bold rounded-full bg-lime-500/10 dark:bg-white/10 text-lime-600 dark:text-white border border-lime-500/30 dark:border-white/25 shadow-[0_0_12px_rgba(132,204,22,0.25)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] backdrop-blur-md select-none z-50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
            </span>
            Live
          </span>
        )}

        {/* ── AnimatedFolder (provides the 3-D folder + lightbox) ──────── */}
        <AnimatedFolder
          title={title}
          projects={folderProjects}
          className="!rounded-b-none !border-b-0 !shadow-none hover:!shadow-none !rounded-t-2xl"
        />

        {/* ── Info panel ───────────────────────────────────────────────── */}
        <div className="px-5 pb-5 pt-4 flex flex-col gap-3 flex-1 bg-card dark:bg-card">
          {/* Title + link */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-0.5">
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base tracking-tight text-foreground hover:text-primary group-hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                >
                  {title}
                </Link>
              ) : (
                <span className="font-semibold text-base tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </span>
              )}
              <time className="text-[11px] text-muted-foreground">{dates}</time>
            </div>
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5"
                aria-label={`Open ${title}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Description */}
          <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          {/* Skill badge pills */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, id) => {
                const skill = getSkill(tag);
                const IconFromSkill = skill?.icon;
                const IconFromMap =
                  tagIconMap[tag.toLowerCase()] ||
                  tagIconMap[tag.toLowerCase().replace(/[.\s]/g, "")] ||
                  null;
                const FinalIcon = IconFromSkill || IconFromMap;
                const lower = tag.toLowerCase();
                let displayName = tag;
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
                } else if (
                  lower === "ai integration" ||
                  lower === "ai-integration"
                ) {
                  displayName = "LLM Integration";
                } else if (lower === "prisma orm" || lower === "prisma-orm") {
                  displayName = "Prisma";
                } else if (lower === "drizzle orm" || lower === "drizzle-orm") {
                  displayName = "Drizzle";
                } else if (lower === "websocket" || lower === "websockets") {
                  displayName = "Socket.io";
                } else if (lower === "monorepo") {
                  displayName = "Turborepo";
                } else if (
                  lower === "bullmq" ||
                  lower === "bull mq" ||
                  lower === "bull-mq"
                ) {
                  displayName = "RabbitMQ";
                } else if (
                  lower === "node.js" ||
                  lower === "nodejs" ||
                  lower === "nose.js"
                ) {
                  displayName = "Node";
                }
                return (
                  <BlurFade key={tag} delay={BLUR_FADE_DELAY * 10 + id * 0.025}>
                    <div
                      className="
                        group/tag border-none
                        bg-transparent
                        hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
                        rounded-xl h-[26px] w-fit px-3 flex items-center gap-1.5
                        transition-all duration-300 ease-out
                        hover:scale-[1.06] hover:-translate-y-0.5
                        cursor-pointer active:scale-[0.97] select-none
                      "
                    >
                      {FinalIcon && (
                        <FinalIcon className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover/tag:rotate-12 group-hover/tag:scale-110" />
                      )}
                      <span className="text-muted-foreground group-hover/tag:text-foreground text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap">
                        {displayName}
                      </span>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          )}

          {/* Action link buttons */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {links.map((link, idx) => {
                const isLive =
                  link.type === "Live" ||
                  link.type === "Live Demo" ||
                  link.type === "Website";
                return (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 py-1.5 rounded-xl border transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] group select-none",
                      isLive
                        ? "border border-lime-500/40 dark:border-white/25 bg-transparent text-lime-600 dark:text-white hover:bg-lime-500/10 dark:hover:bg-white/10 hover:border-lime-500/70 dark:hover:border-white/50 hover:scale-[1.03] hover:-translate-y-0.5 shadow-xs dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
                        : "border-border bg-background text-foreground hover:bg-muted shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700"
                    )}
                  >
                    {isLive ? (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      </span>
                    ) : (
                      link.icon
                    )}
                    <span>{link.type}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
