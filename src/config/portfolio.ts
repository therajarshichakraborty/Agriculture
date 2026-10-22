// ============================================================
// PORTFOLIO CONFIG: Rajarshi Chakraborty
// ============================================================

export const portfolio = {
  // ----------------------------------------------------------
  // Personal Info
  // ----------------------------------------------------------
  name: "Rajarshi Chakraborty",
  initials: "RC",
  role: "Full-Stack TypeScript Developer & AI Engineer",
  location: "Kolkata, West Bengal, India",
  bio: "Software Engineer at Brand Voy and Computer Science undergrad at Techno Main Salt Lake (Class of 2027). Focused on designing and developing scalable, production-grade applications with clean architecture, high performance, and strong System Design principles, with deep enthusiasm for Gen & Agentic AI.",
  shortBio:
    "Full-Stack TypeScript Developer & AI Engineer with a strong focus on building scalable, production-grade applications.",
  avatar: "https://github.com/therajarshichakraborty.png", // Direct link to GitHub avatar, with fallback in UI
  available: true, // "Available for work" badge

  // ----------------------------------------------------------
  // Contact & Social
  // ----------------------------------------------------------
  email: "rajarshichakraborty20000@gmail.com",
  github: "https://github.com/therajarshichakraborty",
  githubHandle: "@therajarshichakraborty",
  linkedin: "https://www.linkedin.com/in/rajarshi-c-06a3402b7/",
  linkedinHandle: "in/rajarshi-c-06a3402b7",
  twitter: "https://x.com/IamRajarshi_Dev",
  twitterHandle: "@IamRajarshi_Dev",
  kofi: "https://hashnode.com/@Rajarshi2005",
  blog: "https://hashnode.com/@Rajarshi2005",
  phone: "+91 8001950250",
  website: "https://rajarshis-portfolio.vercel.app",

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Go",
    "FastAPI",
    "Express",
    "NestJS",
    "Hono",
    "Java",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "Prisma",
    "Drizzle",
    "GraphQL",
    "gRPC",
    "tRPC",
    "LangChain",
    "Langfuse",
    "Pinecone",
    "Qdrant",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit Learn",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Terraform",
    "GitHub Actions",
    "Jenkins",
    "Kafka",
    "RabbitMQ",
    "Firebase",
    "Neo4j",
    "Grafana",
    "Jest",
    "Git",
    "Shell",
    "React Native",
    "Expo",
    "Android Studio",
    "Tailwind CSS"
  ],

  // Tech stack logos shown in the animated strip
  techStack: [
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "React" },
    { name: "Python" },
    { name: "Go" },
    { name: "NestJS" },
    { name: "FastAPI" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "LangChain" },
    { name: "PyTorch" },
    { name: "AWS" },
    { name: "Tailwind CSS" },
    { name: "Git" }
  ],

  // ----------------------------------------------------------
  // Projects
  // ----------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "OpenStack",
      description:
        "A modern, open-source Backend-as-a-Service platform built for developers who want to move fast without sacrificing flexibility or control. Built with a scalable monorepo architecture combining NestJS backend and Next.js dashboard, delivering Authentication, Managed PostgreSQL, Object Storage, Realtime APIs, Serverless Functions, Background Workers, and AI Vector Search.",
      image: "/background/openstack.png",
      tech: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Turborepo",
        "Prisma",
        "RabbitMQ",
        "Socket.io"
      ],
      github: "https://github.com/therajarshichakraborty/openstack",
      live: "https://github.com/therajarshichakraborty/openstack",
      category: "Open Source",
      featured: true
    },
    {
      id: 2,
      title: "ApexZero",
      description:
        "A cross-platform AI-powered Gmail client built with Next.js, TypeScript, and Corsair AI SDK, designed to simplify email management and enhance productivity. Leverages advanced AI capabilities to help users prioritize, organize, and respond to emails efficiently with intelligent inbox management.",
      image: "/background/apex-zero.png",
      tech: [
        "Next.js",
        "TypeScript",
        "Corsair AI SDK",
        "PostgreSQL",
        "Drizzle",
        "Tailwind CSS",
        "Shadcn UI",
        "OpenAI",
        "Better-auth"
      ],
      github: "https://github.com/therajarshichakraborty/ApexZero",
      live: "https://github.com/therajarshichakraborty/ApexZero",
      category: "AI",
      featured: true
    },
    {
      id: 3,
      title: "ZenithCLI",
      description:
        "An AI-powered developer-focused command-line platform inspired by modern AI coding assistants like Claude Code. Enables developers to interact with intelligent coding workflows directly from the terminal, offering AI-assisted code generation, project scaffolding, workflow automation, and debugging support.",
      image: "/background/zenith-cli.png",
      tech: [
        "TypeScript",
        "Commander.js",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
        "Tailwind CSS",
        "Express"
      ],
      github: "https://github.com/therajarshichakraborty/Zenith-CLI",
      live: "https://github.com/therajarshichakraborty/Zenith-CLI",
      category: "AI",
      featured: true
    },
    {
      id: 4,
      title: "Synapse UI",
      description:
        "A modern React UI library built with Next.js, TypeScript, and FumaDocs, designed to help developers build beautiful, production-ready applications faster. Offers reusable components with copy-paste support and seamless CLI installation through Shadcn CLI for a flexible developer experience.",
      image: "/synapseuipng.png",
      tech: [
        "Next.js",
        "TypeScript",
        "React",
        "FumaDocs",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI"
      ],
      github: "https://github.com/therajarshichakraborty/Synapse-UI",
      live: "https://synapse-ui-dev.vercel.app/",
      category: "UI",
      featured: true
    },
    {
      id: 5,
      title: "SocketPoll",
      description:
        "A real-time audience engagement and decision intelligence platform engineered for instant interactive experiences at scale. Built with a full-stack architecture using React, Express.js, WebSockets, PostgreSQL, and Drizzle ORM, enabling ultra-low latency live state synchronization and dynamic voting sessions.",
      image: "/socketpollpng.png",
      tech: [
        "React",
        "TypeScript",
        "Express",
        "Socket.io",
        "PostgreSQL",
        "Drizzle",
        "Tailwind CSS",
        "Vite"
      ],
      github: "https://github.com/therajarshichakraborty/SocketPoll",
      live: "https://socket-poll.vercel.app/",
      category: "Web",
      featured: false
    },
    {
      id: 6,
      title: "LinkedUp",
      description:
        "An AI-powered LinkedIn content generation platform using Streamlit, LangChain, and Groq LLMs, enabling intelligent post creation through scalable prompt pipelines, real-time AI inference, and interactive user workflows with dynamic content personalization and context-aware generation.",
      image: "/linkedapppng.png",
      tech: [
        "Python",
        "LangChain",
        "Groq API",
        "Streamlit",
        "Pydantic",
        "LLM Integration"
      ],
      github: "https://github.com/therajarshichakraborty/LinkedUp",
      live: "https://linkedup-xyz.streamlit.app/",
      category: "AI",
      featured: false
    },
    {
      id: 7,
      title: "Mini-TailwindCSS",
      description:
        "A lightweight Tailwind-inspired CSS utility engine built using vanilla JavaScript and DOM manipulation that dynamically converts custom utility classes into real-time browser styling without external frameworks or build pipelines, featuring modular parsing architecture.",
      image: "/background/mini-tailwind.png",
      tech: [
        "JavaScript",
        "TypeScript",
        "DOM Manipulation",
        "Tailwind CSS",
        "Express",
        "NPM"
      ],
      github: "https://github.com/therajarshichakraborty/Mini-TailwindCSS",
      live: "https://mini-tailwindcss.netlify.app/",
      category: "Open Source",
      featured: false
    }
  ],

  // ----------------------------------------------------------
  // Experience
  // ----------------------------------------------------------
  experience: [
    {
      company: "Brand Voy",
      role: "Software Engineer",
      period: "Aug 2026 - Present",
      location: "London, United Kingdom (Remote)",
      description:
        "Develop and maintain scalable, reliable, and user-focused web applications for live production environments. Work extensively with high-volume sports data, primarily covering cricket and football, to build data-driven sports technology projects serving international clients across English and Vietnamese markets with real-time statistics, matches, fixtures, and localization.",
      tech: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Real-Time Data",
        "High-Volume Data",
        "REST APIs",
        "Localization"
      ]
    },
    {
      company: "Techno Main Salt Lake",
      role: "Undergrad Engineering Fellow",
      period: "June 2023 - Present",
      location: "Kolkata, West Bengal, India",
      description:
        "STEM fellow in Computer Science and Engineering actively exploring emerging technologies in Software Development, Artificial Intelligence, and Data Science. Co-authored IEEE-published research on Deep Learning Enabled Fruit Quality Assessment with Hyper-Spectral Feature Fusion (CIACON 2026).",
      tech: [
        "Deep Learning",
        "Python",
        "Algorithms",
        "Data Structures",
        "System Design",
        "PostgreSQL"
      ]
    }
  ],

  // ----------------------------------------------------------
  // Education
  // ----------------------------------------------------------
  education: [
    {
      institution: "Techno Main Salt Lake",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 - Present",
      description:
        "Academic Progress: GPA 8.136 / 10. Comprehensive coursework covering Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Machine Learning, Cryptography & Network Security, and System Design. Published IEEE researcher at CIACON 2026."
    },
    {
      institution: "West Bengal Council of Higher Secondary Education",
      degree: "Higher Secondary (XII), Pure Science",
      period: "2020 - 2023",
      description:
        "Grade: A+ (81.2% marks in +2 examination). Captain of the School Cricket Team, leading the team in inter-school tournaments. Rigorous foundation in Mathematics, Physics, Chemistry, and Biology combined with leadership and strategic discipline."
    }
  ],

  // ----------------------------------------------------------
  // Project filter categories
  // ----------------------------------------------------------
  categories: ["All", "AI", "Open Source", "UI", "Web"]
} as const;

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experience)[number];
export type Education = (typeof portfolio.education)[number];
