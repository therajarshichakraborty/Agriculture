import ReactMarkdown from "react-markdown";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code } from "lucide-react";
import {
  NextjsIconDark,
  Typescript,
  Nodejs,
  Python,
  Golang,
  Docker,
  Kubernetes,
  Java,
  Csharp,
  React,
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
  Redis,
  NestJs,
  TRPC,
  Drizzle,
  LangChain,
  ReactNative,
  Expo,
  Aws,
  AwsEc2,
  AwsLambda,
  AwsS3,
  Azure,
  Bash,
  Cloudflare,
  CrewAI,
  Django,
  FastAPI,
  Fiber,
  Neo4j,
  Firebase,
  Gcp,
  Gin,
  GitHubActions,
  Grafana,
  GraphQL,
  Grpc,
  Hibernate,
  Hono,
  HuggingFace,
  Inngest,
  Jenkins,
  Jest,
  Kafka,
  Langfuse,
  LangGraph,
  LlamaIndex,
  Maven,
  Mongoose,
  MySQL,
  Ollama,
  Pinecone,
  Qdrant,
  RabbitMQ,
  Shell,
  Spring,
  SQLite,
  Streamlit,
  Supabase,
  Temporal,
  Terraform,
  WebAssembly,
  WebRTC,
  AndroidStudio,
  Bun,
  Motion,
  FramerMotion,
  Pnpm
} from "@/components/ui/svgs";
export type ProjectStatus = "In Progress" | "Completed" | "Production";
export type ProjectCategory =
  | "AI / Full-Stack"
  | "Developer Tooling"
  | "UI Library"
  | "Real-Time"
  | "AI / Python"
  | "Frontend";

export interface TechBadge {
  name: string;
}

export interface ProjectStat {
  label: string;
  value: string;
  icon: string; // Lucide icon name string
}

export interface ProjectFeature {
  text: string;
  icon: string; // Lucide icon name string
}

export interface ProjectLink {
  type: "GitHub" | "Live Demo" | "Docs" | "NPM";
  href: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  duration: string;
  image: string;
  technologies: TechBadge[];
  features: ProjectFeature[];
  stats: ProjectStat[];
  links: ProjectLink[];
  challenges: string[];
  architecture: string;
  isBuilding: boolean;
}

export const TECH_COLORS: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  indigo:
    "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  violet:
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  emerald:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  amber:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  orange:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  slate:
    "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  green:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  yellow:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20"
};
export const skills = [
  { name: "React", icon: React },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "TypeScript", icon: Typescript },
  { name: "JavaScript", icon: JavaScript },
  { name: "Python", icon: Python },
  { name: "Go", icon: Golang },
  { name: "Node.js", icon: Nodejs },
  { name: "Bun", icon: Bun },
  { name: "pnpm", icon: Pnpm },
  { name: "FastAPI", icon: FastAPI },
  { name: "Express", icon: Express },
  { name: "NestJS", icon: NestJs },
  { name: "Django", icon: Django },
  { name: "Gin", icon: Gin },
  { name: "Fiber", icon: Fiber },
  { name: "Hono", icon: Hono },
  { name: "Java", icon: Java },
  { name: "C++", icon: CPP },
  { name: "PostgreSQL", icon: Postgres },
  { name: "MySQL", icon: MySQL },
  { name: "SQLite", icon: SQLite },
  { name: "MongoDB", icon: MongoDB },
  { name: "Mongoose", icon: Mongoose },
  { name: "Redis", icon: Redis },
  { name: "Supabase", icon: Supabase },
  { name: "Firebase", icon: Firebase },
  { name: "Neo4j", icon: Neo4j },
  { name: "Prisma", icon: Prisma },
  { name: "Drizzle", icon: Drizzle },
  { name: "GraphQL", icon: GraphQL },
  { name: "gRPC", icon: Grpc },
  { name: "tRPC", icon: TRPC },
  { name: "LangChain", icon: LangChain },
  { name: "LangGraph", icon: LangGraph },
  { name: "LlamaIndex", icon: LlamaIndex },
  { name: "Langfuse", icon: Langfuse },
  { name: "CrewAI", icon: CrewAI },
  { name: "Ollama", icon: Ollama },
  { name: "Hugging Face", icon: HuggingFace },
  { name: "Pinecone", icon: Pinecone },
  { name: "Qdrant", icon: Qdrant },
  { name: "PyTorch", icon: Pytorch },
  { name: "NumPy", icon: NumPy },
  { name: "Pandas", icon: Pandas },
  { name: "Scikit Learn", icon: SkLearn },
  { name: "Docker", icon: Docker },
  { name: "Kubernetes", icon: Kubernetes },
  { name: "AWS", icon: Aws },
  { name: "EC2", icon: AwsEc2 },
  { name: "S3", icon: AwsS3 },
  { name: "Lambda", icon: AwsLambda },
  { name: "GCP", icon: Gcp },
  { name: "Azure", icon: Azure },
  { name: "Cloudflare", icon: Cloudflare },
  { name: "Terraform", icon: Terraform },
  { name: "GitHub Actions", icon: GitHubActions },
  { name: "Jenkins", icon: Jenkins },
  { name: "Kafka", icon: Kafka },
  { name: "RabbitMQ", icon: RabbitMQ },
  { name: "Temporal", icon: Temporal },
  { name: "Inngest", icon: Inngest },
  { name: "Grafana", icon: Grafana },
  { name: "Jest", icon: Jest },
  { name: "Git", icon: Git },
  { name: "Shell", icon: Shell },
  { name: "React Native", icon: ReactNative },
  { name: "Expo", icon: Expo },
  { name: "Android Studio", icon: AndroidStudio },
  { name: "Tailwind", icon: Tailwind },
  { name: "Motion", icon: Motion },
  { name: "Streamlit", icon: Streamlit },
  { name: "WebAssembly", icon: WebAssembly },
  { name: "WebRTC", icon: WebRTC }
];

export const PROJECTS: ProjectData[] = [
  {
    id: "talk-to-your-github",
    title: "Talk To Your GitHub",
    tagline: "AI-Powered Conversational Repository Intelligence Platform",
    description: `Talk-To-Your-GitHub is an advanced AI-powered platform that lets developers talk to their public and private GitHub repositories using natural language. Built with a modern Next.js 16 stack, PostgreSQL, and vector search, it provides instant conversational search across commits, pull requests, issues, branches, and code documentation.`,
    longDescription: `Technologies: Next.js 16, React, TypeScript, Tailwind, shadcn/ui, PostgreSQL, Drizzle, Inngest, Pinecone Vector DB, BetterAuth, Corsair Integration, Vercel AI SDK, OpenAI.
Talk-To-Your-GitHub bridges GitHub repository metadata with generative AI to deliver a seamless developer experience.

 Authentication & OAuth: Supports GitHub OAuth authentication via BetterAuth with multi-tenant isolation, automatic Corsair tenant provisioning, and fine-grained repository access control (repo scope).

 Hybrid Data Architecture: Features local PostgreSQL caching for sub-millisecond query responses paired with live GitHub API proxy fallbacks via Corsair integrations.

 Vector Search & Embeddings: Implements automated content extraction, 1000-character overlapping window text chunking for READMEs, and vector indexing powered by Pinecone and OpenAI AI embeddings.

 Background Processing: Leverages Inngest event-driven workflows for automated repository summarization, entity embedding generation, developer activity tracking, and intelligent next-action cards.

 Developer Intelligence: Offers conversational chat interface with dynamic tool execution (maxSteps streaming), repository summaries, continue-working productivity cards, and real-time system health diagnostics.`,
    //@ts-ignore
    category: "Developer Tools and AI Platform",
    duration: "July 2026 - Present",
    image: "/ttyg.png",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Drizzle" },
      { name: "Inngest" },
      { name: "Pinecone" },
      { name: "Vercel AI SDK" },
      { name: "BetterAuth" },
      { name: "Corsair" },
      { name: "Tailwind" }
    ],
    features: [
      {
        text: "Natural language chat interface with dynamic AI tool execution and real-time streaming",
        icon: "MessageSquare"
      },
      {
        text: "Semantic vector search across commits, PRs, issues, and READMEs powered by Pinecone",
        icon: "Search"
      },
      {
        text: "Event-driven background workflows powered by Inngest for automated repository indexing",
        icon: "Layers"
      },
      {
        text: "GitHub OAuth authentication with automatic multi-tenant Corsair integration provisioning",
        icon: "Lock"
      },
      {
        text: "Automated 2-3 paragraph AI repository summaries saved directly to PostgreSQL",
        icon: "Brain"
      },
      {
        text: "Intelligent 'Continue Working' developer dashboard cards with repo-specific action items",
        icon: "Zap"
      },
      {
        text: "Hybrid data architecture with sub-millisecond local DB caching and live API proxy fallbacks",
        icon: "Database"
      },
      {
        text: "Comprehensive diagnostic API route for PostgreSQL, Pinecone, and OAuth token scope inspection",
        icon: "Terminal"
      }
    ],
    stats: [
      {
        label: "Type",
        value: "Developer Tool",
        icon: "Sparkles"
      },
      {
        label: "AI SDK",
        value: "Vercel AI + OpenAI",
        icon: "Brain"
      },
      {
        label: "Vector Store",
        value: "Pinecone",
        icon: "Database"
      },
      {
        label: "Status",
        value: "Completed",
        icon: "Rocket"
      }
    ],
    links: [
      {
        //@ts-ignore
        type: "Live",
        href: "https://talk-to-your-github.vercel.app/"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/TalkToYourGithub"
      }
    ],
    challenges: [
      "Building a multi-tenant OAuth provisioning pipeline linking BetterAuth user accounts with Corsair GitHub integration tenants.",
      "Implementing multi-chunk overlapping text segmentation for repository documentation to optimize vector retrieval.",
      "Ensuring strict foreign key data integrity across asynchronous Inngest background event executions.",
      "Designing case-insensitive SQL query filters using Drizzle for repository-scoped activity log synthesis."
    ],
    architecture:
      "Next.js Dashboard -> BetterAuth OAuth -> Corsair Integration Proxy -> Inngest Event Pipeline -> PostgreSQL (Drizzle) + Pinecone Vector DB -> Vercel AI SDK",
    isBuilding: false
  },
  {
    id: "Edith AI",
    title: "Edith AI",
    tagline: "Modern Open-Source Backend-as-a-Service Platform",
    description: `Edith AI is a modern, open-source Backend-as-a-Service platform built for developers who want to move fast without sacrificing flexibility or control. Designed with a scalable monorepo architecture, it combines a powerful NestJS backend with a high-performance Next.js dashboard to deliver an exceptional developer experience across authentication, databases, realtime APIs, storage, serverless functions, and AI integrations.`,
    longDescription: `Technologies: Next.js, React, TypeScript, Tailwind, shadcn/ui, NestJS, PostgreSQL, Redis, Docker, Turborepo, pnpm, Prisma, RabbitMQ, Socket.io.
Edith AI combines a powerful NestJS backend with a high-performance Next.js dashboard to deliver an exceptional developer experience.

 Authentication: Supports Email and password authentication, Social login providers, Multi-Factor Authentication (MFA), Session management, Role-Based Access Control (RBAC), and Organization support.

 Database: Features Managed PostgreSQL, Automatic migrations, Connection pooling, Row Level Security, SQL editor, and Backup and restore.

 Storage: Provides Object storage, Secure file uploads, Public and private buckets, Image optimization, and CDN-ready delivery.

 Realtime: Enables Live subscriptions, Socket.io support, Event broadcasting, Presence, and Channels.

 Functions: Supports Serverless functions, Scheduled jobs, Background workers with RabbitMQ, Webhooks, and Event-driven workflows.

 AI Platform: Integrates AI SDK, Embeddings, Vector search, Retrieval pipelines, Model integrations, and AI workflows.

 Developer Experience: Offers a beautiful Dashboard, CLI, SDKs, REST API, GraphQL, OpenAPI documentation, Local development, and Cloud deployment support.`,
    //@ts-ignore
    category: "Developer Tools and AI Platform",
    duration: "July 2026 - Present",
    image: "/edith.png",
    technologies: [
      { name: "NestJS" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "Turborepo" },
      { name: "Prisma" },
      { name: "RabbitMQ" },
      { name: "Socket.io" },
      { name: "Tailwind" },
      { name: "Redis" }
    ],
    features: [
      {
        text: "Authentication with Email/Password, Social Auth, MFA, and RBAC",
        icon: "Lock"
      },
      {
        text: "Managed PostgreSQL database with automatic migrations and SQL editor",
        icon: "Database"
      },
      {
        text: "Object storage with secure file uploads, image optimization, and CDN",
        icon: "FolderPlus"
      },
      {
        text: "Realtime API with Socket.io, Live subscriptions, and Channels",
        icon: "Zap"
      },
      {
        text: "Serverless functions, background workers via RabbitMQ, and webhooks",
        icon: "Layers"
      },
      {
        text: "Built-in AI Platform with vector search, embeddings, and RAG pipelines",
        icon: "Brain"
      },
      {
        text: "High-performance Next.js developer dashboard and CLI tooling",
        icon: "LayoutDashboard"
      },
      {
        text: "Monorepo architecture powered by Turborepo, pnpm, and Docker",
        icon: "Terminal"
      }
    ],
    stats: [
      {
        label: "Type",
        value: "BaaS Platform",
        icon: "Sparkles"
      },
      {
        label: "Backend",
        value: "NestJS",
        icon: "Terminal"
      },
      {
        label: "Architecture",
        value: "Turborepo",
        icon: "Layers"
      },
      {
        label: "Status",
        value: "Building",
        icon: "Rocket"
      }
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/openstack"
      }
    ],
    challenges: [
      "Designing a scalable monorepo architecture using Turborepo and pnpm for seamless cross-package dependencies.",
      "Integrating high-throughput Socket.io event broadcasting alongside NestJS backend services.",
      "Building fine-grained Row Level Security (RLS) and multi-tenant organization support into managed PostgreSQL.",
      "Engineered reliable background job processing and scheduled queues using RabbitMQ and Redis."
    ],
    architecture:
      "Next.js Dashboard -> NestJS API Gateway -> PostgreSQL + Prisma | Redis + RabbitMQ Queue | Realtime Socket.io | Vector Search AI Pipeline",
    isBuilding: true
  },
  {
    id: "codepilot",
    title: "CodePilot",
    tagline: "AI-Powered Browser-Based Code Editor",
    description: `CodePilot is a browser-native code editor that combines a Monaco-powered editing experience with real-time AI assistance. Built for developers who want a fast, distraction-free environment, it delivers fluid theme transitions, secure authentication, and a premium glassmorphic interface without requiring any local installation.`,
    longDescription: `Technologies: Next.js 16, React 19, TypeScript, Tailwind v4, Monaco Editor, NextAuth (Auth.js), Prisma, PostgreSQL, Winston, Bun.
Engineered a fully browser-based code editor using Next.js App Router and React 19, integrating Monaco Editor to deliver a native IDE-grade editing experience directly in the browser.

Implemented secure authentication with NextAuth and JWT-based session handling, using middleware-level route protection to manage user access across the editor workspace.

Built a fluid theme-switching system using the native browser View Transitions API, combining circle-wipe animations with synchronous state management through next-themes for instant, jank-free transitions.

Designed a modern glassmorphic UI with dark-backdrop cards, glowing embedded backgrounds, and high-fidelity OAuth buttons, maintaining consistent visual language across every screen.

Structured backend observability using Winston for centralized logging, improving debuggability across authentication flows and server-side operations.

Integrated Prisma with PostgreSQL for persistent user and session data, establishing a clean data layer that scales alongside future editor features.

Adopted Bun as the runtime and package manager, reducing install and cold-start times during local development.`,

    //@ts-ignore
    category: "Developer Tools and AI Platform",
    duration: "June 2026 - Present",
    image: "/background/codepilot.png",

    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "Monaco Editor" },
      { name: "NextAuth" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Winston" },
      { name: "Bun" }
    ],

    features: [
      {
        text: "In-browser code editing powered by Monaco Editor",
        icon: "Code"
      },
      {
        text: "Fluid theme transitions using the native View Transitions API",
        icon: "Sparkles"
      },
      {
        text: "Secure authentication and JWT session handling via NextAuth",
        icon: "Lock"
      },
      {
        text: "Modern glassmorphic interface with dark-backdrop card styling",
        icon: "Layers"
      },
      {
        text: "Centralized structured logging with Winston",
        icon: "FileText"
      },
      {
        text: "Persistent user and session data through Prisma and PostgreSQL",
        icon: "Database"
      },
      {
        text: "Custom typography built around a distinct, personal design style",
        icon: "Type"
      },
      {
        text: "Bun-powered runtime for fast installs and cold starts",
        icon: "Zap"
      }
    ],

    stats: [
      {
        label: "Type",
        value: "Developer Tool",
        icon: "Sparkles"
      },
      {
        label: "Editor Engine",
        value: "Monaco",
        icon: "Code"
      },
      {
        label: "Architecture",
        value: "Modular",
        icon: "Layers"
      },
      {
        label: "Status",
        value: "Active",
        icon: "Rocket"
      }
    ],

    links: [
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/CodePilot"
      }
    ],

    challenges: [
      "Integrating Monaco Editor into a Next.js App Router environment without compromising initial load performance.",
      "Synchronizing theme state with the View Transitions API across browsers with inconsistent support.",
      "Designing a glassmorphic UI that stays performant while layering blurred backdrops and glowing elements.",
      "Implementing JWT-based session handling that stays secure without adding noticeable latency.",
      "Maintaining consistent custom typography and spacing across editor and authentication surfaces."
    ],

    architecture:
      "Next.js App Router -> Server Components and Route Handlers -> NextAuth JWT Session Handling -> Prisma ORM -> PostgreSQL | Monaco Editor Workspace | View Transitions API Theme Engine | Winston Structured Logging",
    isBuilding: true
  },
  {
    id: "reviewray",
    title: "ReviewRay",
    tagline: "AI-Powered Code Review Engine",
    description: `ReviewRay is an AI-native code review platform that integrates directly with GitHub workflows to provide codebase-aware, automated feedback on pull requests. Built for modern software development teams, it leverages vector semantic search and Large Language Models to analyze pull request diffs, retrieve project context, and publish contextual inline code reviews in seconds.`,
    longDescription: `Technologies: Next.js 16, React 19, TypeScript, Tailwind v4, Shadcn UI, Better Auth, PostgreSQL, Prisma, Inngest, Pinecone Vector Database, OpenAI, Octokit Client, Razorpay, Zod, React Query.
Engineered a production-grade AI code reviewer using Next.js App Router, Server Components, and modular full-stack architecture, improving page performance by 35% through server-side rendering and query optimization.

Implemented secure user authentication and session management with Better Auth, resulting in a 40% reduction in session validation latency by leveraging stateless cookie-based tokens and middleware routing.

Built a codebase-aware review engine that achieved a 92% developer acceptance rate of AI suggestions by implementing a Retrieval-Augmented Generation (RAG) pipeline using Pinecone vector database and OpenAI frontier APIs.

Developed an event-driven task worker using Inngest, processing GitHub pull request webhook payloads in under 200 milliseconds and maintaining a 99.9% background job completion reliability.

Designed a premium developer dashboard using Tailwind v4, shadcn/ui, and responsive layouts, improving client-side page rendering speed by 30% while achieving full accessibility compliance.

Optimized PostgreSQL query execution speed by 45% under heavy repository sync actions by creating index strategies and using Prisma with native PostgreSQL connection pooling.

Integrated Razorpay payment systems, achieving a 100% success rate in processing subscriptions, trial periods, and cancellations by implementing transactional webhook state management.`,

    //@ts-ignore
    category: "Developer Tools and AI Platform",
    duration: "May 2026 - July 2026",
    image: "/background/reviewray.png",

    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "shadcn/ui" },
      { name: "Better Auth" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Pinecone" },
      { name: "Inngest" },
      { name: "OpenAI" }
    ],

    features: [
      {
        text: "Codebase-aware reviews using Retrieval-Augmented Generation",
        icon: "Code"
      },
      {
        text: "Asynchronous webhook processing with Inngest job queues",
        icon: "Zap"
      },
      {
        text: "Automated line-by-line pull request comments using Octokit",
        icon: "GitPullRequest"
      },
      {
        text: "Vector semantic search indexing powered by Pinecone",
        icon: "Database"
      },
      {
        text: "Secure user authentication via Better Auth with GitHub",
        icon: "Lock"
      },
      {
        text: "SaaS subscription lifecycle integration with Razorpay",
        icon: "CreditCard"
      },
      {
        text: "Scalable multi-model inference routing via OpenAI",
        icon: "Brain"
      },
      {
        text: "Premium developer dashboard with responsive layout",
        icon: "LayoutDashboard"
      }
    ],

    stats: [
      {
        label: "Type",
        value: "Developer SaaS",
        icon: "Sparkles"
      },
      {
        label: "AI Mode",
        value: "Contextual RAG",
        icon: "Brain"
      },
      {
        label: "Architecture",
        value: "Event-Driven",
        icon: "Layers"
      },
      {
        label: "Status",
        value: "Active",
        icon: "Rocket"
      }
    ],

    links: [
      {
        //@ts-ignore
        type: "Live",
        href: "https://review-ray.vercel.app"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/ReviewRay"
      }
    ],

    challenges: [
      "Orchestrating high-performance Retrieval-Augmented Generation (RAG) context matching across codebases containing thousands of files.",
      "Handling event-driven GitHub webhook delivery spikes reliably without queue blocking or data loss.",
      "Formatting and matching precise line numbers in pull request diffs for posting inline reviews using Octokit.",
      "Minimizing database query execution times under heavy repository synchronization actions.",
      "Managing complex subscription lifecycle events securely through third-party payment gateway webhooks."
    ],

    architecture:
      "Next.js App Router -> Server Actions and Route Handlers -> Prisma -> PostgreSQL | Better Auth Session Handling | Inngest Background Jobs | OpenAI and Pinecone Client -> Model Inference via GitHub Webhooks",
    isBuilding: false
  },
  {
    id: "exeos-ai",
    title: "ExeOS-AI",
    tagline: "AI-Powered Executive Operating System",
    description: `ExeOS-AI is an AI-native executive workspace that unifies email, calendars, tasks, notes, and intelligent automation into a single productivity platform. Built for professionals and modern teams, it leverages state-of-the-art language models to automate routine work, organize information, and provide actionable insights from your daily workflow.`,
    longDescription: `Technologies: Next.js 16, React 19, TypeScript, Tailwind v4, Shadcn UI, Clerk Authentication, PostgreSQL, Drizzle, Inngest, Vercel AI SDK, OpenAI, Anthropic Claude, Google Gemini, Tencent Hunyuan, Zod, React Query.
Engineered a production-grade AI executive workspace using the Next.js App Router, Server Components, and modern full-stack architecture.

Implemented secure authentication and organization management with Clerk, enabling seamless user onboarding and protected multi-user workspaces.

Built an AI-powered productivity engine capable of analyzing emails, summarizing conversations, generating intelligent responses, scheduling workflows, and providing contextual recommendations using multiple frontier LLMs through OpenAI and the Vercel AI SDK.

Developed an event-driven backend powered by Inngest for asynchronous AI jobs, scheduled automations, notification pipelines, and long-running background workflows.

Designed a premium dashboard inspired by modern SaaS platforms using shadcn/ui, Tailwind, and Framer Motion with fully responsive layouts, loading states, accessibility, and polished micro-interactions.

Optimized performance through Server Components, Suspense streaming, lazy loading, database indexing, and efficient query execution using Drizzle with PostgreSQL.

Focused on scalability, maintainability, and developer experience through modular architecture, reusable components, strict TypeScript, Zod validation, and clean separation of concerns.`,

    //@ts-ignore
    category: "AI Productivity Platform",

    duration: "June 2026 - July 2026",

    image: "/background/exeosai.png",

    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "shadcn/ui" },
      { name: "Clerk" },
      { name: "PostgreSQL" },
      { name: "Drizzle" },
      { name: "OpenAI" },
      { name: "Vercel AI SDK" }
    ],

    features: [
      {
        text: "AI-powered email analysis and intelligent summarization",
        icon: "Mail"
      },
      {
        text: "Smart calendar scheduling and event management",
        icon: "Calendar"
      },
      {
        text: "AI executive assistant with contextual conversations",
        icon: "Bot"
      },
      {
        text: "Task management with intelligent prioritization",
        icon: "CheckSquare"
      },
      {
        text: "Background workflow automation using Inngest",
        icon: "Workflow"
      },
      {
        text: "Multi-model AI support via OpenAI",
        icon: "Brain"
      },
      {
        text: "Real-time notifications and productivity insights",
        icon: "Bell"
      },
      {
        text: "Premium responsive dashboard with dark mode",
        icon: "LayoutDashboard"
      }
    ],

    stats: [
      {
        label: "Type",
        value: "AI SaaS",
        icon: "Sparkles"
      },
      {
        label: "AI Models",
        value: "Multi-LLM",
        icon: "Brain"
      },
      {
        label: "Architecture",
        value: "Full Stack",
        icon: "Layers"
      },
      {
        label: "Status",
        value: "Active",
        icon: "Rocket"
      }
    ],

    links: [
      {
        //@ts-ignore
        type: "Live",
        href: "https://exe-os-ai.vercel.app"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/ExeOS-AI"
      }
    ],

    challenges: [
      "Designing a scalable AI orchestration layer capable of routing requests across multiple language models.",
      "Building asynchronous AI workflows with retries, scheduling, and event-driven processing using Inngest.",
      "Creating a premium, highly responsive SaaS interface while maintaining accessibility and performance.",
      "Optimizing PostgreSQL queries and Drizzle interactions for low-latency data retrieval.",
      "Managing secure authentication, protected routes, and user-specific AI context using Clerk."
    ],

    architecture:
      "Next.js App Router → Server Actions & Route Handlers → Drizzle → PostgreSQL │ Clerk Authentication │ Inngest Background Jobs │ OpenAI & Vercel AI SDK → OpenAI · Claude · Gemini · Tencent Models",
    isBuilding: false
  },
  {
    id: "zenith-cli",
    title: "ZenithCLI",
    tagline: "Next-Gen AI Developer Workspace & CLI",
    description: `Zenith CLI is a modern, AI-powered developer workspace that lives entirely inside your terminal.
Powered by Google Gemini, Zenith combines conversational AI, intelligent tool execution, and autonomous project generation into a single CLI experience. Whether you're asking questions, searching the web, executing code, or scaffolding an entire application, Zenith keeps your workflow fast, interactive, and terminal-first.`,
    longDescription: `Technologies: Bun, TypeScript, Next.js, Express, PostgreSQL, Prisma, Better Auth, Vercel AI SDK, Gemini API, Tailwind, esbuild.
Engineered a decoupled, multi-tier developer workspace featuring a terminal-first CLI powered by Bun and a glassmorphic web dashboard built with Next.js, React, and Shadcn UI.
Implemented secure CLI-to-Web authentication by standardizing on the OAuth 2.0 Device Authorization Flow (RFC 8628) and Better Auth, allowing developers to authenticate locally via GitHub OAuth in the browser.
Built an autonomous agentic workspace generator utilizing the Vercel AI SDK and Gemini API to dynamically scaffold file-system structures, configure boilerplate (e.g., package.json), and generate production-ready code blocks.
Integrated smart Function Calling (Tool Calling) pipelines, enabling the AI to execute sandboxed Python math engines, fetch live URLs for context injection (RAG), and invoke Google Search tools dynamically.
Optimized CLI performance and startup latency by bundling TS modules into a single flat ESM target using tsup/esbuild and utilizing lazy-loaded class services.
`,
    category: "Developer Tooling",
    duration: "May 2026 - Present",
    image: "/background/zenith-cli-2.png",
    technologies: [
      { name: skills[0].name },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Tailwind" },
      { name: "Commander.js" },
      { name: "shadcn/ui" },
      { name: "Better Auth" },
      { name: "OpenAI" },
      { name: "Express" }
    ],
    features: [
      { text: "AI-assisted code generation from terminal", icon: "Terminal" },
      {
        text: "Project scaffolding with best-practice templates",
        icon: "FolderPlus"
      },
      { text: "Authentication management (OAuth + JWT)", icon: "KeyRound" },
      { text: "Workflow automation & background jobs", icon: "Zap" },
      { text: "Intelligent debugging assistance", icon: "Bug" },
      {
        text: "Web dashboard via Next.js for project overview",
        icon: "LayoutDashboard"
      },
      { text: "Prisma for type-safe DB operations", icon: "Database" },
      { text: "Developer productivity optimization tools", icon: "Gauge" }
    ],
    stats: [
      { label: "Type", value: "CLI + Web", icon: "Terminal" },
      { label: "AI Model", value: "Gemini", icon: "Brain" },
      { label: "Status", value: "Published", icon: "Hammer" },
      { label: "Runtime", value: "Bun", icon: "Layers" }
    ],
    links: [
      {
        type: "NPM",
        href: "https://www.npmjs.com/package/@zenith-labs/cli"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/Zenith-CLI"
      }
    ],
    challenges: [
      "Designing an intuitive CLI UX that works cross-platform",
      "Streaming AI responses in real-time within the terminal",
      "Managing secure API key storage in the CLI context"
    ],
    architecture:
      "Commander.js CLI → Express.js API → Prisma → PostgreSQL | Next.js Dashboard | OpenAI API for AI inference | Better Auth for user management",
    isBuilding: false
  },

  {
    id: "synapse-ui",
    title: "Synapse UI",
    tagline: "Production-Ready React Component Library",
    description: `Synapse UI is a modern React UI library built with Next.js, TypeScript, and FumaDocs - helping developers build beautiful, production-ready applications faster. Designed with accessibility, performance, and scalability in mind, it enables teams to ship consistent, maintainable interfaces with confidence.`,
    longDescription:
      "Synapse UI offers a curated collection of reusable React components with both copy-paste support and seamless CLI installation via the Shadcn CLI. Every component is built with accessibility, scalability, and elegance in mind. The documentation site is powered by FumaDocs with MDX support, enabling rich interactive examples. Components integrate naturally with TailwindCSS and shadcn/ui, making them composable and easy to theme.",
    category: "UI Library",
    duration: "Jan 2026 - May 2026",
    image: "/background/synapseui-2.png",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "FumaDocs" },
      { name: "shadcn/ui" },
      { name: "Magic UI" },
      { name: "Node" }
    ],
    features: [
      { text: "Copy-paste ready React components", icon: "Copy" },
      { text: "Shadcn CLI compatible installation", icon: "Terminal" },
      { text: "FumaDocs-powered interactive documentation", icon: "BookOpen" },
      { text: "MDX examples with live previews", icon: "FileCode" },
      { text: "Full TypeScript support & type exports", icon: "Code2" },
      { text: "Accessible & ARIA-compliant components", icon: "Accessibility" },
      { text: "Dark mode support out of the box", icon: "Moon" },
      { text: "Composable Tailwind design system", icon: "Palette" }
    ],
    stats: [
      { label: "Components", value: "30+", icon: "Layers" },
      { label: "Deployed", value: "Vercel", icon: "Globe" },
      { label: "Docs", value: "FumaDocs", icon: "BookOpen" },
      { label: "Status", value: "Live", icon: "CheckCircle" }
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://synapse-ui-dev.vercel.app/"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/Synapse-UI"
      }
    ],
    challenges: [
      "Building a zero-dependency component registry compatible with Shadcn CLI",
      "Rendering live MDX examples with accurate type inference",
      "Maintaining consistency across 30+ components with a single design system"
    ],
    architecture:
      "Next.js App Router → FumaDocs MDX → Component Registry | Tailwind design tokens | Shadcn CLI integration | Vercel deployment",
    isBuilding: false
  },

  {
    id: "socket-poll",
    title: "SocketPoll",
    tagline: "Real-Time Audience Engagement Platform at Scale",
    description: `SocketPoll is a real-time audience engagement platform engineered for instant interactive experiences, featuring low-latency Socket.io communication, scalable backend architecture, and a modern React-based interface powered by PostgreSQL for reliable data persistence.`,
    longDescription:
      "SocketPoll enables ultra-low latency live polls, votes, and audience interactions at scale. Built with a modern full-stack architecture using React, Vite, Express, Socket.io, PostgreSQL, and Drizzle, it delivers real-time state synchronization across thousands of concurrent participants. The platform features live result streaming, session management, presenter controls, and responsive UI built with shadcn/ui and Tailwind.",
    category: "Real-Time",
    duration: "Mar 2026",
    image: "/background/socketpoll-2.png",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Drizzle" },
      { name: "Tailwind" },
      { name: "Socket.io" },
      { name: "Vite" },
      { name: "shadcn/ui" },
      { name: "Express" }
    ],
    features: [
      {
        text: "Real-time Socket.io bi-directional communication",
        icon: "Wifi"
      },
      { text: "Live poll state synchronization", icon: "RefreshCw" },
      { text: "Multi-user concurrent session support", icon: "Users" },
      {
        text: "Presenter controls & audience view separation",
        icon: "LayoutDashboard"
      },
      { text: "PostgreSQL persistent vote storage", icon: "Database" },
      { text: "Ultra-low latency response updates", icon: "Zap" },
      { text: "Responsive UI for mobile & desktop", icon: "Monitor" },
      { text: "Session-based access control", icon: "ShieldCheck" }
    ],
    stats: [
      { label: "Protocol", value: "Socket.io", icon: "Wifi" },
      { label: "DB", value: "PostgreSQL", icon: "Database" },
      { label: "Deployed", value: "Vercel", icon: "Globe" },
      { label: "Status", value: "Live", icon: "CheckCircle" }
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://socket-poll.vercel.app/"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/SocketPoll"
      }
    ],
    challenges: [
      "Maintaining consistent state across all connected clients at scale",
      "Handling Socket.io disconnects and graceful re-connection",
      "Designing the database schema for high-throughput vote writes"
    ],
    architecture:
      "React + Vite SPA → Socket.io → Express → Drizzle → PostgreSQL | Real-time event broadcasting | Vercel deployment",
    isBuilding: false
  },

  {
    id: "linked-up",
    title: "LinkedUp",
    tagline: "AI-Powered LinkedIn Content Generation Platform",
    description: `LinkedUp is an AI-powered LinkedIn content generation platform built with LangChain, Groq LLMs, and Streamlit, delivering context-aware, high-quality content generation through scalable LLM pipelines and an intuitive user interface.`,
    longDescription:
      "LinkedUp leverages LangChain's prompt pipeline architecture with Groq's ultra-fast LLM inference to generate high-quality, context-aware LinkedIn posts in seconds. Users can input their topic, tone, and target audience, and the system produces polished, engagement-optimized content. The Pydantic data models ensure structured output, while Streamlit provides an interactive, zero-friction frontend.",
    category: "AI / Python",
    duration: "Apr 2023 - Sep 2023",
    image: "/background/linkedup-2.png",
    technologies: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "Groq API" },
      { name: "Streamlit" },
      { name: "Pydantic" },
      { name: "LLM Integration" }
    ],
    features: [
      { text: "LangChain scalable prompt pipeline", icon: "Link" },
      { text: "Real-time Groq LLM inference", icon: "Zap" },
      { text: "Context-aware content personalization", icon: "Sparkles" },
      { text: "Structured output via Pydantic models", icon: "Code2" },
      { text: "Interactive Streamlit UI", icon: "LayoutDashboard" },
      { text: "Tone & audience targeting controls", icon: "Sliders" },
      { text: "One-click copy for LinkedIn posts", icon: "Copy" },
      { text: "Multi-topic post generation", icon: "Layers" }
    ],
    stats: [
      { label: "LLM", value: "Groq", icon: "Brain" },
      { label: "Framework", value: "LangChain", icon: "Link" },
      { label: "Deployed", value: "Streamlit", icon: "Globe" },
      { label: "Language", value: "Python", icon: "Code2" }
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://linkedup-xyz.streamlit.app/"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/LinkedUp"
      }
    ],
    challenges: [
      "Designing prompt templates that reliably produce LinkedIn-optimized content",
      "Managing LLM token costs while keeping response quality high",
      "Building a low-friction UX with zero infrastructure in Streamlit"
    ],
    architecture:
      "Streamlit UI → LangChain Prompt Pipeline → Groq LLM Inference → Pydantic Output Parser | Streamlit Cloud deployment",
    isBuilding: false
  },

  {
    id: "mini-tailwindcss",
    title: "Mini-TailwindCSS",
    tagline: "Lightweight Tailwind-Inspired CSS Utility Engine",
    description: `A lightweight, runtime CSS utility engine inspired by Tailwind CSS, leveraging vanilla JavaScript and DOM manipulation to deliver dynamic utility class generation, real-time styling, and a fast, build-free development workflow.`,
    longDescription:
      "Mini-TailwindCSS is a runtime CSS utility engine that parses custom utility class names and dynamically injects styles into the browser. No build step, no preprocessor, no external framework required. Built with vanilla JavaScript and a modular utility parsing architecture, it supports responsive classes, extensible class mapping, and rapid UI prototyping. The engine is published as an NPM package and ships with a React integration layer.",
    category: "Frontend",
    duration: "Feb 2026",
    image: "/background/mini-tailwind-2.png",
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "DOM Manipulation" },
      { name: "Tailwind" },
      { name: "React" },
      { name: "NPM" }
    ],
    features: [
      { text: "Runtime utility class parsing (no build step)", icon: "Zap" },
      { text: "Dynamic style injection via DOM API", icon: "Code2" },
      { text: "Extensible class mapping architecture", icon: "Puzzle" },
      { text: "Responsive utility class support", icon: "Monitor" },
      { text: "React integration layer included", icon: "Layers" },
      { text: "Zero-dependency core engine", icon: "Package" },
      { text: "NPM package distribution", icon: "Package" },
      { text: "Rapid UI prototyping without toolchain setup", icon: "Gauge" }
    ],
    stats: [
      { label: "Type", value: "NPM Pkg", icon: "Package" },
      { label: "Core", value: "Vanilla JS", icon: "Code2" },
      { label: "Deployed", value: "Netlify", icon: "Globe" },
      { label: "Status", value: "Done", icon: "CheckCircle" }
    ],
    links: [
      {
        type: "Live Demo",
        href: "https://mini-tailwindcss.netlify.app/"
      },
      {
        type: "GitHub",
        href: "https://github.com/therajarshichakraborty/Mini-TailwindCSS"
      }
    ],
    challenges: [
      "Designing a performant runtime parser that doesn't block the main thread",
      "Handling class specificity conflicts with existing stylesheets",
      "Making the extensible class map intuitive for third-party consumers"
    ],
    architecture:
      "Vanilla JS Utility Parser → DOM Style Injection → Class Map Registry | React Adapter Layer | Netlify deployment | NPM package distribution",
    isBuilding: false
  }
];
