"use client";
/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

const getSkill = (tag: string) => {
  const normalizedTag = tag.toLowerCase().replace(/[^a-z0-9+]/g, "");

  if (normalizedTag === "postgresql" || normalizedTag === "postgres") {
    return DATA.skills.find(
      (s) =>
        s.name.toLowerCase() === "postgresql" ||
        s.name.toLowerCase() === "postgres"
    );
  }
  if (normalizedTag === "tailwindcss" || normalizedTag === "tailwind") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "tailwind");
  }
  if (normalizedTag === "expressjs" || normalizedTag === "express") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "express");
  }
  if (normalizedTag === "reactjs" || normalizedTag === "react") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "react");
  }
  if (normalizedTag === "nodejs" || normalizedTag === "node") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "node.js");
  }
  if (normalizedTag === "javascript" || normalizedTag === "js") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "javascript");
  }
  if (normalizedTag === "typescript" || normalizedTag === "ts") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "typescript");
  }
  if (normalizedTag === "openai") {
    return { name: "OpenAI", icon: Icons.openai };
  }
  if (normalizedTag === "golang" || normalizedTag === "go") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "go");
  }
  if (normalizedTag === "scikitlearn" || normalizedTag === "sklearn") {
    return DATA.skills.find((s) => s.name.toLowerCase() === "scikit learn");
  }

  // Fallback case-insensitive match
  return (
    DATA.skills.find(
      (s) => s.name.toLowerCase().replace(/[^a-z0-9+]/g, "") === normalizedTag
    ) || null
  );
};

const BLUR_FADE_DELAY = 0.04;

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

function ProjectImage({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
        No image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-full object-cover", className)}
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  isBuilding?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  isBuilding
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col h-full border border-neutral-200/80 dark:border-neutral-800/60 rounded-xl overflow-hidden cursor-pointer bg-white/40 dark:bg-neutral-900/20 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/[0.04] dark:hover:shadow-white/[0.02] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500",
        className
      )}
    >
      <div className="relative shrink-0 aspect-video w-full overflow-hidden bg-muted/20 border-b border-border/40">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : image ? (
            <ProjectImage
              src={image}
              alt={title}
              className="transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
              No Preview
            </div>
          )}
        </Link>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {isBuilding ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-full bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 dark:border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.25)] backdrop-blur-md select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                  </span>
                  Building
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-full bg-lime-500/10 dark:bg-white/10 text-lime-600 dark:text-white border border-lime-500/30 dark:border-white/25 shadow-[0_0_12px_rgba(132,204,22,0.25)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] backdrop-blur-md select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </span>
                  Live
                </span>
              )}
            </div>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs sm:text-[13px] flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag, id) => {
              const skill = getSkill(tag);
              const Icon =
                skill?.icon ||
                tagIconMap[tag.toLowerCase()] ||
                tagIconMap[tag.toLowerCase().replace(/[^a-z0-9]/g, "")] ||
                null;
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
                <BlurFade key={tag} delay={BLUR_FADE_DELAY * 10 + id * 0.03}>
                  <div
                    className="
                      group/tag border-none
                      bg-transparent
                      hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
                      rounded-xl h-[26px] w-fit px-3 flex items-center gap-1.5
                      transition-all duration-300 ease-out
                      hover:scale-[1.06] hover:-translate-y-0.5
                      cursor-pointer active:scale-[0.98] select-none
                    "
                  >
                    {Icon && (
                      <Icon className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover/tag:rotate-12 group-hover/tag:scale-110" />
                    )}
                    <span className="text-muted-foreground group-hover/tag:text-foreground text-[11px] font-semibold transition-colors duration-200">
                      {displayName}
                    </span>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-900/60">
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
                    "inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl border transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] group select-none",
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
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
