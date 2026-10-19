"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Server,
  Database,
  Globe,
  Cpu,
  Terminal,
  Zap,
  Users,
  Code,
  GitPullRequest,
  Lock,
  Bot,
  Layers,
  RefreshCw,
  FolderSync
} from "lucide-react";

interface TimelineStep {
  title: string;
  annotation: string;
  details: string;
  icon: React.ReactNode;
  colorClass: string;
}

const PROJECT_TIMELINES: Record<string, TimelineStep[]> = {
  reviewray: [
    {
      title: "GitHub Webhooks Trigger",
      annotation: "Real-Time PR Actions",
      details:
        "Receives pull request payloads (open, synchronize, reopen) from GitHub repositories in real-time. Signatures are validated using HMAC SHA-256 headers.",
      icon: <GitPullRequest className="size-5" />,
      colorClass:
        "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      title: "Next.js Route Handlers",
      annotation: "API Gateway & Better Auth Middleware",
      details:
        "Validates active subscription statuses using Razorpay metadata and processes session authorization keys with Better Auth cookie verification.",
      icon: <Server className="size-5" />,
      colorClass:
        "from-slate-500/10 to-zinc-500/10 text-foreground border-border"
    },
    {
      title: "Inngest Queue Worker",
      annotation: "Asynchronous Background Processing",
      details:
        "Orchestrates background step functions asynchronously. Manages high-throughput PR webhooks with automated retries, failure handling, and concurrency limits.",
      icon: <Zap className="size-5" />,
      colorClass:
        "from-amber-500/10 to-orange-500/10 text-amber-500 border-amber-500/20"
    },
    {
      title: "Pinecone RAG Vector Search",
      annotation: "Semantic Code Context Extraction",
      details:
        "Performs semantic queries against codebase chunks stored as embeddings in Pinecone, retrieving code snippets and repository structures relevant to the PR diff.",
      icon: <Database className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "OpenAI LLM Inference",
      annotation: "Line-by-Line Context Reviews",
      details:
        "Sends code context to OpenAI APIs (GPT-4o / frontier models) to analyze diff code logic, then submits precise line comments to the GitHub API via Octokit.",
      icon: <Cpu className="size-5" />,
      colorClass:
        "from-rose-500/10 to-pink-500/10 text-rose-500 border-rose-500/20"
    }
  ],
  "exeos-ai": [
    {
      title: "Clerk Authentication Gate",
      annotation: "Workspace & Role Scopes",
      details:
        "Shields server resources by validating Clerk session cookies, ensuring users only access their authorized workspace and tenant organization scopes.",
      icon: <Lock className="size-5" />,
      colorClass:
        "from-indigo-500/10 to-purple-500/10 text-indigo-500 border-indigo-500/20"
    },
    {
      title: "Next.js Server Actions",
      annotation: "Vercel AI SDK Router",
      details:
        "Routes client actions, manages react state, and streams model completions to the dashboard interface using Vercel's standard AI stream helpers.",
      icon: <Globe className="size-5" />,
      colorClass:
        "from-cyan-500/10 to-teal-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      title: "Inngest Task Queue",
      annotation: "Background Synchronization Crons",
      details:
        "Fires scheduled crons to sync email and calendar events, processes asynchronous database updates, and triggers real-time workspace alerts.",
      icon: <Zap className="size-5" />,
      colorClass:
        "from-orange-500/10 to-yellow-500/10 text-orange-500 border-orange-500/20"
    },
    {
      title: "OpenAI Multi-LLM Orchestrator",
      annotation: "Inference Model Routing",
      details:
        "Selects and calls the best frontier models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro) based on workspace prompts, request latency, and budget requirements.",
      icon: <Cpu className="size-5" />,
      colorClass:
        "from-rose-500/10 to-purple-500/10 text-rose-500 border-rose-500/20"
    },
    {
      title: "Drizzle / PostgreSQL DB",
      annotation: "Relational Persistence Layer",
      details:
        "Performs low-latency transactional updates and relational queries on PostgreSQL schemas using Drizzle, fetching inbox messages, event schedules, and system logs.",
      icon: <Database className="size-5" />,
      colorClass:
        "from-blue-500/10 to-cyan-500/10 text-blue-500 border-blue-500/20"
    }
  ],
  "zenith-cli": [
    {
      title: "Bun CLI / Commander.js Core",
      annotation: "Terminal-First Developer Utility",
      details:
        "Accepts developer commands and arguments inside terminal shells. Bundles module trees using tsup/esbuild for minimal execution latency.",
      icon: <Terminal className="size-5" />,
      colorClass:
        "from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    {
      title: "OAuth Device Auth Portal",
      annotation: "Browser Authentication Validation",
      details:
        "Coordinates login states between the terminal and browser using the OAuth 2.0 Device Flow (RFC 8628) and Better Auth dashboard controls.",
      icon: <Lock className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "Express.js API Gateway",
      annotation: "Central Command Server",
      details:
        "Processes REST queries, validates user authentication payloads, and fetches details from a PostgreSQL instance using type-safe Prisma schemas.",
      icon: <Server className="size-5" />,
      colorClass:
        "from-slate-500/10 to-zinc-500/10 text-foreground border-border"
    },
    {
      title: "Google Gemini API Integration",
      annotation: "Generative AI Automation Worker",
      details:
        "Leverages Gemini API models via the Vercel AI SDK to build folder structures, write template configurations, and stream generated code solutions to the terminal.",
      icon: <Bot className="size-5" />,
      colorClass:
        "from-purple-500/10 to-indigo-500/10 text-purple-500 border-purple-500/20"
    }
  ],
  "synapse-ui": [
    {
      title: "FumaDocs Portal",
      annotation: "Interactive Developer Documentation",
      details:
        "Hosts interactive MDX documentation pages, rendering live playground components where designers can manipulate props and see layouts in real-time.",
      icon: <Globe className="size-5" />,
      colorClass:
        "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      title: "Component Registry JSON API",
      annotation: "Modular Code Content Distributor",
      details:
        "Compiles source code paths, Tailwind design tokens, and components catalog layouts into static JSON metadata hosted on Vercel CDN nodes.",
      icon: <Server className="size-5" />,
      colorClass:
        "from-slate-500/10 to-zinc-500/10 text-foreground border-border"
    },
    {
      title: "npx CLI Installer",
      annotation: "Automatic Code Dependency Inversion",
      details:
        "Resolves shadcn-compatible CLI requests to fetch component details from the JSON registry and injects them directly into developer file workspaces.",
      icon: <Terminal className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    }
  ],
  "socket-poll": [
    {
      title: "Presenter & Audience Clients",
      annotation: "Interactive Frontend Applications",
      details:
        "React + Vite user applications that render active vote sliders, poll charts, and session control panels using responsive Tailwind elements.",
      icon: <Users className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "Socket.io Connection Core",
      annotation: "Bi-Directional Messaging Pipeline",
      details:
        "Creates persistent, bi-directional sockets between user views and the backend to broadcast and update live poll stats in milliseconds.",
      icon: <RefreshCw className="size-5" />,
      colorClass:
        "from-rose-500/10 to-orange-500/10 text-rose-500 border-rose-500/20"
    },
    {
      title: "Express HTTP Router",
      annotation: "Authentication & Administration Gate",
      details:
        "Validates host dashboard credentials, initializes active poll sessions, and exposes REST endpoints for dashboard controls.",
      icon: <Server className="size-5" />,
      colorClass:
        "from-slate-500/10 to-zinc-500/10 text-foreground border-border"
    },
    {
      title: "Drizzle & PostgreSQL Store",
      annotation: "Transactional Persistence Layout",
      details:
        "Validates user ip hashes, registers vote transactions, and saves aggregate tallies onto Postgres schemas utilizing Drizzle.",
      icon: <Database className="size-5" />,
      colorClass:
        "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/20"
    }
  ],
  "linked-up": [
    {
      title: "Streamlit Dashboard",
      annotation: "User Parameters Controller",
      details:
        "Renders parameter settings (tone, industry, keywords, topic, length) for generating LinkedIn posts using Streamlit elements.",
      icon: <Globe className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "LangChain Pipeline Orchestration",
      annotation: "Prompt Template & Context Manager",
      details:
        "Loads preconfigured prompt files, compiles user context inputs, and handles call chains to orchestrate instructions to LLMs.",
      icon: <Layers className="size-5" />,
      colorClass:
        "from-purple-500/10 to-pink-500/10 text-purple-500 border-purple-500/20"
    },
    {
      title: "Groq LLM API",
      annotation: "High-Speed Inference Engine",
      details:
        "Queries Groq's high-speed API endpoints to get structured text responses in milliseconds.",
      icon: <Cpu className="size-5" />,
      colorClass:
        "from-amber-500/10 to-orange-500/10 text-amber-500 border-amber-500/20"
    },
    {
      title: "Pydantic Schema Parser",
      annotation: "Structured JSON Output Parser",
      details:
        "Enforces type structures on generated text output (e.g. hashtags, key hooks, content blocks) before rendering details to users.",
      icon: <Code className="size-5" />,
      colorClass:
        "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/20"
    }
  ],
  "mini-tailwindcss": [
    {
      title: "HTML / DOM Nodes Scan",
      annotation: "Client-Side Token Extraction",
      details:
        "Parses DOM layouts at runtime, scanning class lists for active Tailwind CSS style configurations.",
      icon: <Code className="size-5" />,
      colorClass:
        "from-blue-500/10 to-indigo-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "JS RegEx Parser Engine",
      annotation: "Token Component Extractor",
      details:
        "Tokenizes string classes into parts, identifying responsive tags, utility modifiers, values, and selector parameters at runtime.",
      icon: <Cpu className="size-5" />,
      colorClass:
        "from-purple-500/10 to-pink-500/10 text-purple-500 border-purple-500/20"
    },
    {
      title: "Class Map Registry",
      annotation: "Standardized Property Compiler",
      details:
        "Compares style tokens against lookup configurations to compile standard CSS style sheets dynamically.",
      icon: <Layers className="size-5" />,
      colorClass:
        "from-amber-500/10 to-orange-500/10 text-amber-500 border-amber-500/20"
    },
    {
      title: "Style Tag Injector",
      annotation: "Dynamic Browser CSSOM Injection",
      details:
        "Appends generated styling rules into a dedicated runtime stylesheet in the browser document head, painting components instantly.",
      icon: <FolderSync className="size-5" />,
      colorClass:
        "from-emerald-500/10 to-teal-500/10 text-emerald-500 border-emerald-500/20"
    }
  ]
};

export function ProjectArchitectureDiagram({
  projectId
}: {
  projectId: string;
}) {
  const steps = PROJECT_TIMELINES[projectId];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (!steps) return null;

  return (
    <div className="w-full flex flex-col gap-y-4 rounded-2xl bg-transparent relative overflow-hidden">
      <div className="flex flex-col gap-y-1">
        <h5 className="text-[10px] font-bold uppercase tracking-widest text-black/70 dark:text-foreground/60">
          System Pipeline Flow
        </h5>
        <p className="text-[11px] text-black dark:text-foreground/75 leading-relaxed mb-3 font-mono">
          Visualizing the step-by-step lifecycle of request payloads and data
          pathways.
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative pl-6 sm:pl-8">
        {/* Continuous gradient line background */}
        <div className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-[1px] bg-gradient-to-b from-border/80 via-border/40 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-y-5">
          {steps.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative flex items-start gap-4 sm:gap-6 transition-all duration-300"
              >
                {/* Connection dot */}
                <div
                  className={`absolute left-2.5 sm:left-3 -translate-x-1/2 top-[22px] flex items-center justify-center rounded-full transition-all duration-300 z-20 ${
                    isHovered
                      ? "w-3 h-3 bg-foreground ring-4 ring-muted scale-110"
                      : "w-2 h-2 bg-foreground/20 ring-4 ring-background"
                  }`}
                />

                {/* Node details card */}
                <div
                  className={`flex-1 flex flex-col gap-y-2 rounded-xl border border-border/20 bg-muted/5 p-4 sm:p-5 transition-all duration-300 ${
                    isHovered
                      ? "border-border/60 bg-muted/15 shadow-[0_4px_20px_rgba(0,0,0,0.015)] translate-x-0.5"
                      : "hover:border-border/30 hover:bg-muted/8"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold text-black/40 dark:text-foreground/40 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {step.icon && (
                        <div className="flex items-center justify-center size-8 rounded-lg border border-border/30 bg-muted/25 text-foreground/70 group-hover:text-foreground group-hover:bg-muted/40 transition-all duration-300 shrink-0">
                          {React.isValidElement(step.icon)
                            ? React.cloneElement(
                                step.icon as React.ReactElement<any>,
                                {
                                  className:
                                    "size-4 text-foreground/70 group-hover:text-foreground transition-colors duration-300"
                                }
                              )
                            : step.icon}
                        </div>
                      )}
                      <h6 className="text-sm font-bold text-black dark:text-foreground leading-tight tracking-tight">
                        {step.title}
                      </h6>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-black/80 dark:text-foreground/75 bg-muted/30 border border-border/30 px-2.5 py-0.5 rounded-md shrink-0">
                      {step.annotation}
                    </span>
                  </div>
                  <p className="text-[12px] text-black/90 dark:text-foreground/80 leading-relaxed pl-0 sm:pl-11 mt-0.5">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
