"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedFolder } from "@/components/3d-folder";
import type { FolderProject } from "@/components/3d-folder";
import { DATA } from "@/data/resume";
import { Button } from "../ui/button";
import Link from "next/link";

// ── Skill icon lookup ─────────────────────────────────────────────────────────
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
import type React from "react";

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

function getTagIcon(tag: string) {
  const key = tag.toLowerCase();
  const keyNorm = key.replace(/[.\s]/g, "");
  return tagIconMap[key] ?? tagIconMap[keyNorm] ?? undefined;
}

function buildFolderProjects(): FolderProject[] {
  return DATA.projects.map((project, i) => ({
    id: String(i + 1),
    image: project.image || "/placeholder.svg",
    title: project.title,
    href: project.href || undefined,
    dates: project.dates,
    description: project.description,
    tags: project.technologies.map((t) => {
      let displayName = t;
      const lower = t.toLowerCase();
      if (lower === "express.js" || lower === "expressjs")
        displayName = "Express";
      else if (lower === "openrouter") displayName = "OpenAI";
      else if (lower === "tailwindcss" || lower === "tailwind css")
        displayName = "Tailwind";
      else if (lower === "ai integration") displayName = "LLM Integration";
      else if (lower === "prisma orm") displayName = "Prisma";
      else if (lower === "drizzle orm") displayName = "Drizzle";
      else if (lower === "websocket" || lower === "websockets")
        displayName = "Socket.io";
      else if (lower === "monorepo") displayName = "Turborepo";
      else if (lower === "bullmq" || lower === "bull mq")
        displayName = "RabbitMQ";
      else if (lower === "node.js" || lower === "nodejs" || lower === "nose.js")
        displayName = "Node";
      return { name: displayName, icon: getTagIcon(t) };
    }),
    links: project.links as any,
    isBuilding: "isBuilding" in project ? project.isBuilding : undefined
  }));
}

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const folderProjects = buildFolderProjects();

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        {/* ── Section header ─────────────────────────────────────────────── */}
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl inline-block text-center">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Hover the folder to explore, click any
              card to view full details.
            </p>
          </div>
        </div>

        {/* ── Single folder containing ALL projects ───────────────────────── */}
        <BlurFade delay={BLUR_FADE_DELAY * 12} className="flex justify-center">
          <AnimatedFolder title="My Projects" projects={folderProjects} />
        </BlurFade>
      </div>
    </section>
  );
}
