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

export const DATA = {
  name: "Rajarshi Chakraborty",
  initials: "RC",
  url: "https://rajarshis-portfolio.vercel.app",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description: `Full-Stack TypeScript Developer & AI Engineer with a strong focus on building scalable, production-grade applications.`,
  summary: `**Hello :)** I’m **Rajarshi Chakraborty**, a Software Engineer at Brand Voy and a **Computer Science** undergrad at Techno Main Salt Lake ( Class of 2027 ), passionate about building scalable **software and intelligent systems**.

I’m a **Full-Stack TypeScript Developer** & **AI Engineer** focused on designing and developing production-grade applications with clean **architecture**, **high performance**, **scalability**, and strong **System Design** principles.

Beyond traditional engineering, I’m deeply interested in **Gen** & **Agentic AI**. I enjoy building AI-powered systems that combine **intelligent automation** with **real-world data** to **solve complex problems** and **create meaningful impact**. I’m driven by continuous learning, engineering excellence, and turning challenging ideas into reliable, practical products.`,

  avatarUrl: "RajarshiImage.jpg",
  skills: [
    { name: "React", icon: React },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: JavaScript },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Node", icon: Nodejs },
    //{ name: "Bun", icon: Bun },
    //{ name: "pnpm", icon: Pnpm },
    { name: "FastAPI", icon: FastAPI },
    { name: "Express", icon: Express },
    { name: "NestJS", icon: NestJs },
    //{ name: "Django", icon: Django },
    //{ name: "Gin", icon: Gin },
    //{ name: "Fiber", icon: Fiber },
    { name: "Hono", icon: Hono },
    { name: "Java", icon: Java },
    { name: "C++", icon: CPP },
    { name: "PostgreSQL", icon: Postgres },
    //{ name: "MySQL", icon: MySQL },
    { name: "SQLite", icon: SQLite },
    { name: "MongoDB", icon: MongoDB },
    { name: "Mongoose", icon: Mongoose },
    { name: "Redis", icon: Redis },
    //{ name: "Supabase", icon: Supabase },
    { name: "Firebase", icon: Firebase },
    { name: "Neo4j", icon: Neo4j },
    { name: "Prisma", icon: Prisma },
    { name: "Drizzle", icon: Drizzle },
    { name: "GraphQL", icon: GraphQL },
    { name: "gRPC", icon: Grpc },
    { name: "tRPC", icon: TRPC },
    { name: "LangChain", icon: LangChain },
    //{ name: "LangGraph", icon: LangGraph },
    //{ name: "LlamaIndex", icon: LlamaIndex },
    { name: "Langfuse", icon: Langfuse },
    //{ name: "CrewAI", icon: CrewAI },
    //{ name: "Ollama", icon: Ollama },
    //{ name: "Hugging Face", icon: HuggingFace },
    { name: "Pinecone", icon: Pinecone },
    { name: "Qdrant", icon: Qdrant },
    { name: "PyTorch", icon: Pytorch },
    { name: "NumPy", icon: NumPy },
    { name: "Pandas", icon: Pandas },
    { name: "Scikit Learn", icon: SkLearn },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AWS", icon: Aws },
    //{ name: "EC2", icon: AwsEc2 },
    //{ name: "S3", icon: AwsS3 },
    //{ name: "Lambda", icon: AwsLambda },
    { name: "GCP", icon: Gcp },
    //{ name: "Azure", icon: Azure },
    { name: "Cloudflare", icon: Cloudflare },
    { name: "Terraform", icon: Terraform },
    { name: "GitHub Actions", icon: GitHubActions },
    { name: "Jenkins", icon: Jenkins },
    { name: "Kafka", icon: Kafka },
    { name: "RabbitMQ", icon: RabbitMQ },
    //{ name: "Temporal", icon: Temporal },
    //{ name: "Inngest", icon: Inngest },
    { name: "Grafana", icon: Grafana },
    { name: "Jest", icon: Jest },
    { name: "Git", icon: Git },
    { name: "Shell", icon: Shell },
    { name: "React Native", icon: ReactNative },
    { name: "Expo", icon: Expo },
    { name: "Android Studio", icon: AndroidStudio },
    { name: "Tailwind", icon: Tailwind }
    //{ name: "Motion", icon: Motion },
    //{ name: "Streamlit", icon: Streamlit },
    //{ name: "WebAssembly", icon: WebAssembly },
    //{ name: "WebRTC", icon: WebRTC }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://hashnode.com/@Rajarshi2005",
      icon: NotebookIcon,
      label: "Blog"
    },
    { href: "/projects", icon: Code, label: "Projects" }
  ],
  contact: {
    email: "rajarshichakraborty20000@gmail.com",
    tel: "+91 8001950250",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/therajarshichakraborty",
        icon: Icons.github,
        navbar: true
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajarshi-c-06a3402b7/",
        icon: Icons.linkedin,

        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/IamRajarshi_Dev",
        icon: Icons.x,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=rajarshichakraborty2005@gmail.com",
        icon: Icons.email,
        navbar: true
      }
    }
  },

  work: [
    {
      company: "Brand Voy",
      href: "https://brandvoy.co/",
      badges: [],
      location: "London, United Kingdom",
      title: "Software Engineer",
      logoUrl: "/brandvoy.png",
      start: "Aug 2026",
      end: "Present",
      description: `As a Software Engineer at Brand Voy, I contribute to the development and maintenance of scalable, production-ready software solutions and live digital platforms. My role involves working across the software development lifecycle, from feature development and system improvements to debugging, performance optimization, testing, and production support.

• Develop and maintain scalable, reliable, and user-focused web applications for live production environments.
• Work extensively with high-volume sports data, primarily covering cricket and football, to build and support data-driven digital experiences.
• Contribute to sports technology projects serving international clients across English and Vietnamese markets, with a strong focus on localization, usability, and consistent user experiences.
• Work with complex sports data and real-time information to support live sports experiences, including matches, fixtures, scores, statistics, and related content.
• Optimize application workflows and data handling processes to support high-volume workloads and responsive user experiences.
• Contribute to the complete software development lifecycle, including requirement analysis, development, testing, deployment, monitoring, maintenance, and enhancement.

This experience has strengthened my expertise in software development, scalable web applications, sports technology, high-volume data processing, real-time sports platforms, multilingual applications, production systems, and modern software engineering practices.`
    },
    {
      company: "Techno Main Salt Lake",
      href: "https://atomic.finance",
      badges: [],
      location: "Kolkata, West Bengal",
      title: "Undergrad Engineering Fellow",
      logoUrl: "/techno.jpg",
      start: "June 2023",
      end: "Present",
      description: `
Actively exploring and mastering new skills and emerging technologies in the dynamic field of Computer Science and Engineering.

As a STEM major in Computer Science, I am an aspiring Software Developer with a strong enthusiasm for **Artificial Intelligence** and **Data Science**.

I thrive on continuous learning, innovation, and practical application to solve real-world challenges.
`
    }
  ],
  education: [
    //     {
    //       school: "NYU Stern School of Business",
    //       href: "https://www.stern.nyu.edu/",
    //       badges: ["MBA", "4.0/4.0"],
    //       location: "New York, NY, USA",
    //       title: "Master of Business Administration",
    //       degree: "Master of Business Administration",
    //       logoUrl: "/nyu-stern.png",
    //       start: "Aug 2027",
    //       end: "May 2029",
    //       description: `GPA - 4.0/4.0

    // Pursuing an Master's Degree in Business Administration , specializing in Artificial Intelligence, Tech Product Management, and Strategy. Co-President of the Stern Technology Association ( 2026-27 ) and AVP of Treks ( 2025-26 ). President of the Finance Club. Recipient of the NYU Stern MBA JP Eggers Fellowship ( Full Tuition ) and The Richman Family Scholarship ( $10,000 ).

    // Specializations:
    // Artificial Intelligence
    // Tech Product Management
    // Strategy
    // Finance
    // Accounting & Reporting
    // Management of Organizations
    // Statistics & Data Analysis
    // The Global Economy
    // Marketing
    // Operations Management

    // Activities & Leadership:
    //   Co-President, Stern Technology Association (2026-27)
    //   AVP of Treks, Stern Technology Association (2025-26)
    //   President, Finance Club
    //   Member, FinTech Association
    //   Member, South Asian Business Association
    //   Member, Games & E-Sports Association
    //   Member, Stern Adventures

    // Scholarships:
    //   JP Eggers Fellowship ( Full Tuition )

    // Coursework:
    // COR1-GB.1306: Financial Accounting & Reporting
    // COR1-GB.1305: Statistics & Data Analysis
    // COR1-GB.1302: Leadership in Organizations
    // COR1-GB.2103: Strategic Communication
    // COR1-GB.2104: Strategy I
    // COR1-GB.2105: Strategy II
    // COR1-GB.1303: Firms & Markets
    // COR1-GB.2311: Foundations of Finance
    // COR1-GB.2310: Marketing
    // COR1-GB.2314: Operations Management
    // COR1-GB.2303: The Global Economy
    // TECH-GB.2346: Business Analytics
    // TECH-GB.3335: Data Science for Business - Technical
    // TECH-GB.2335: Data Science for Business - Managerial
    // COR1-GB.3101: Professional Responsibility
    // BSPA-GB.2101: Ethical & Legal Challenges of the Modern Corporation`
    //     },
    //     {
    //       school: "Indira Gandhi National Open University (IGNOU)",
    //       href: "http://www.ignou.ac.in/",
    //       badges: ["MA Economics", "8.86/10"],
    //       location: "New Delhi, India",
    //       title: "Master of Arts in Economics",
    //       degree: "Master of Arts in Economics",
    //       logoUrl: "/",
    //       start: "July 2027",
    //       end: "June 2029",
    //       description: `GPA - 8.86/10

    // Pursued Master of Arts in Economics with a focus on advanced macroeconomic policy, quantitative methods, econometrics, and financial market modeling. Developed deep quantitative and analytical rigor to model socioeconomic systems, public finance decisions, and international monetary frameworks alongside computing and engineering systems.

    // Specializations:
    // • Econometric Modeling & Quantitative Analysis
    // • Financial Institutions & Capital Markets
    // • Macroeconomic Policy & Development Economics

    // Coursework:
    // MEC-101: Microeconomic Analysis
    // MEC-102: Macroeconomic Analysis
    // MEC-103: Quantitative Methods
    // MEC-104: Economics of Growth and Development
    // MEC-105: Indian Economic Policy
    // MEC-106: Public Economics
    // MEC-107: International Trade and Finance
    // MEC-108: Econometric Methods
    // MEC-109: Research Methods in Economics
    // MECE-001: Econometric Methods
    // MECE-003: Actuarial Economics: Theory and Practice
    // MECE-004: Financial Institutions and Markets
    // MEDSE-046: Development Issues and Perspectives
    // MECP-001: Project Work and Dissertation`
    //     },
    {
      school: "Techno Main Salt Lake",
      title: "Undergrad Engineering Fellow",
      href: "https://www.ticollege.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/tmsl2.png",
      start: " June 2023",
      end: "Present",
      description: `GPA - 8.136/10 (Academic Progress till Semester 6th)

Computer Science and Engineering professional with a strong foundation in Software Development, Artificial Intelligence, and Machine Learning. Experienced in building scalable, reliable, and high-performance software solutions using modern technologies and engineering practices. Strong problem-solving and analytical skills with a focus on designing efficient systems, developing practical solutions, and applying emerging technologies to real-world challenges. Committed to continuous learning, technical excellence, and delivering impactful software solutions.


Undergrad Coursework :
BEE101/BEE191: Basic Electrical Engineering
BSM101: Engineering Mathematics IA
BSM201: Engineering Mathematics IIA
ESCS301: Analog & Digital Electronics
PCCCS301: Data Structures & Algorithms
PCCCS302: Computer Organization
BSCICB301: Linear Algebra
PCCCS401: Discrete Mathematics
PCCICB401: Data Communication & Networks
PCCCS403: Formal Language & Automata Theory 
PCCCS404: Design & Analysis of Algorithms
PCCCS502: Operating Systems
PCCCS503: Object Oriented Programming 
PCCICB501: IoT Application & Design 
PCCICB502: Wireless Sensor Networks
PECICB501-B: Internet Technology
PCCICB601: Cryptography & Network Security 
PCCCS601: Database Management System 
PCCCS602: Ethical Hacking 
PECICB601-D: Software Engineering 
OECICB601-A: Human Resource Development & Organizational Behavior
PROJICB681: Project I
PECICB701-A: Blockchain and Cryptocurrency
PECICB702-A: Machine Learning
OECICB701-A: Soft skill and Interpersonal Communication
HSMC701: Project Management and Entrepreneurship
PROJICB781: Project II
`
    },
    {
      school: "West Bengal Council of Higher Secondary Education",
      href: "https://wbchse.wb.gov.in/",
      title: "High School Education",
      degree: "High Schooling",
      logoUrl: "/West_Bengal_Council_of_Higher_Secondary_Education_Logo.png",
      start: "April 2020",
      end: "Mar 2023",
      description: `Grade: A+ | Scored Overall 81.2 % Marks in +2 Examination

Activities and societies: Cricket Team
Completed XII from WBCHSE (West Bengal Council of Higher Secondary Education).

Demonstrated excellence both in academics and extracurricular pursuits. Served as the Captain of the School Cricket Team, leading the team to several inter-school tournaments while nurturing team spirit, leadership, and strategic decision-making. Acknowledged as a dedicated and consistent school-level cricket player.

These experiences collectively strengthened my leadership, organizational, and collaborative capabilities, enabling me to balance academic rigor with active participation in co-curricular forums.

Coursework:
Bengali
English
Physics
Chemistry
Mathematics
Biology`
    }
  ],
  testScores: [
    {
      title: "Graduate Aptitude Test in Engineering",
      tag: "Data Science & Artificial Intelligence (GATE-DA)",
      score: "AIR 1",
      date: "2026",
      sections: [
        { label: "Math & Statistics", score: "100% Accuracy" },
        { label: "Machine Learning", score: "100% Accuracy" },
        { label: "AI & Algorithms", score: "100% Accuracy" },
        { label: "DBMS & DSA", score: "100% Accuracy" }
      ],
      description:
        "Secured All India Rank 1 (AIR 1) with a perfect 1000/1000 GATE score in Data Science & Artificial Intelligence."
    },
    {
      title: "Common Admission Test",
      tag: "CAT 2027 • Indian Institutes of Management",
      score: "100 %ile",
      date: "Nov 2027",
      sections: [
        { label: "Quantitative Aptitude", score: "100.00 %ile" },
        { label: "DILR", score: "100.00 %ile" },
        { label: "VARC", score: "99.98 %ile" }
      ],
      description:
        "Achieved overall 100.00 percentile with 100 percentile in Quantitative Aptitude and DILR sections."
    },
    {
      title: "Graduate Management Admission Test",
      tag: "GMAT Focus Edition • GMAC",
      score: "805 / 805",
      date: "2026",
      sections: [
        { label: "Quantitative", score: "90 / 90 (100th %ile)" },
        { label: "Verbal", score: "90 / 90 (100th %ile)" },
        { label: "Data Insights", score: "90 / 90 (100th %ile)" }
      ],
      description:
        "Attained the highest possible maximum score of 805/805 (100th percentile) on the GMAT Focus Edition."
    },
    {
      title: "Graduate Record Examination",
      tag: "GRE General Test • ETS",
      score: "340 / 340",
      date: "2026",
      sections: [
        { label: "Quantitative", score: "170 / 170" },
        { label: "Verbal", score: "170 / 170" },
        { label: "Analytical Writing", score: "5.5 / 6.0" }
      ],
      description:
        "Achieved a perfect 340/340 score with 170 in Quantitative Reasoning and 170 in Verbal Reasoning."
    },
    {
      title: "Common Admission Test",
      tag: "CAT 2026 • Indian Institutes of Management",
      score: "99.99 %ile",
      date: "Nov 2026",
      sections: [
        { label: "Quantitative Aptitude", score: "100.00 %ile" },
        { label: "DILR", score: "99.99 %ile" },
        { label: "VARC", score: "99.95 %ile" }
      ],
      description:
        "Secured 99.99 overall percentile in CAT 2026 with consistent sectional mastery across all divisions."
    },
    {
      title: "Xavier Aptitude Test",
      tag: "XAT 2026 • XLRI Jamshedpur",
      score: "99.99 %ile",
      date: "Jan 2026",
      sections: [
        { label: "Decision Making", score: "99.95 %ile" },
        { label: "QA & DI", score: "100.00 %ile" },
        { label: "VALR", score: "99.92 %ile" }
      ],
      description:
        "Scored 99.99 percentile in XAT 2026 with 100 percentile in Quantitative Ability & Data Interpretation."
    },
    {
      title: "Test of English as a Foreign Language",
      tag: "TOEFL iBT • ETS",
      score: "120 / 120",
      date: "2026",
      sections: [
        { label: "Reading", score: "30 / 30" },
        { label: "Listening", score: "30 / 30" },
        { label: "Speaking", score: "30 / 30" },
        { label: "Writing", score: "30 / 30" }
      ],
      description:
        "Attained a flawless 120/120 maximum possible score across all four components in TOEFL iBT."
    },
    {
      title: "West Bengal Joint Entrance Examination",
      tag: "WBJEE • Engineering & Technology",
      score: "Top Ranker",
      date: "2023",
      sections: [
        { label: "Mathematics", score: "99.9+ %ile" },
        { label: "Physics & Chemistry", score: "99.8+ %ile" }
      ],
      description:
        "State top percentile ranker in WBJEE for admission to Computer Science and Engineering."
    }
  ],
  projects: [
    {
      title: "OpenStack",
      href: "https://github.com/therajarshichakraborty/openstack",
      dates: "July 2026 - Present",
      active: true,
      isBuilding: true,
      description: `OpenStack is a modern, open-source Backend-as-a-Service platform built for developers who want to move fast without sacrificing flexibility or control. Designed with a scalable monorepo architecture, OpenStack combines a powerful NestJS backend with a high-performance Next.js dashboard to deliver a complete backend foundation including Authentication, Managed PostgreSQL, Object Storage, Realtime APIs, Serverless Functions, Background Workers, and AI Vector Search.`,
      technologies: [
        "NestJS",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Turborepo",
        "Prisma",
        "RabbitMQ",
        "Socket.io",
        "Tailwind"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/openstack",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/background/openstack.png"
    },
    {
      title: "ApexZero",
      href: "",
      dates: "June 2026 - Present",
      active: true,
      isBuilding: true,
      description: `ApexZero is a cross-platform AI-powered Gmail client built with Next.js, TypeScript, and Corsair AI SDK, designed to simplify email management and enhance productivity. It leverages advanced AI capabilities to help users prioritize, organize, and respond to emails more efficiently. With an intuitive interface and powerful features, ApexZero transforms the way users interact with their inbox, making email management effortless and intelligent.`,
      technologies: [
        "Next.js",
        "Typescript",
        "Corsair AI SDK",
        "PostgreSQL",
        "Drizzle",
        "Tailwind",
        "Shadcn UI",
        "Better-auth",
        "OpenAI",
        "Node"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/ApexZero",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/background/apex-zero.png"
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "ZenithCLI",
      href: "",
      dates: "May 2026 - Present",
      active: true,
      isBuilding: true,
      description: `ZenithCLI is an AI-powered developer-focused command-line platform inspired by modern AI coding assistants like Claude Code. It enables developers to interact with intelligent coding workflows directly from the terminal, offering features such as AI-assisted code generation, project scaffolding, authentication management, workflow automation, debugging support, and developer productivity optimization.
`,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Tailwind",
        "Commander.js",
        "Shadcn UI",
        "Better-auth",
        "OpenAI",
        "Express"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/Zenith-CLI",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/background/zenith-cli.png"
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Synapse UI",
      href: "https://synapse-ui-dev.vercel.app/",
      dates: "Jan 2026 - May 2026",
      active: true,
      description:
        "Synapse UI is a modern React UI library built with Next.js, TypeScript, and FumaDocs, designed to help developers build beautiful, production-ready applications faster. It offers reusable components with both copy-paste support and seamless CLI installation through Shadcn CLI for a flexible developer experience. Built with a strong focus on developer productivity, accessibility, scalability, and elegant design systems for modern web applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "FumaDocs",
        "React",
        "Tailwind",
        "Node",
        "Shadcn UI",
        "Magic UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://synapse-ui-dev.vercel.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/Synapse-UI",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/synapseuipng.png",
      video: ""
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "SocketPoll",
      href: "https://socket-poll.vercel.app/",
      dates: "Mar 2026 - Mar 2026",
      active: true,
      description: `SocketPoll is a real-time audience engagement and decision intelligence platform engineered for instant interactive experiences at scale. Built with a modern full-stack architecture using React, Express.js, WebSockets, PostgreSQL, and Drizzle ORM, the platform enables ultra-low latency communication, live state synchronization, and seamless multi-user participation in dynamic voting sessions.`,
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "Tailwind",
        "Vite",
        "Shadcn UI",
        "Socket.io",
        "Express"
      ],
      links: [
        {
          type: "Website",
          href: "https://socket-poll.vercel.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/SocketPoll",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/socketpollpng.png"
      //video: ""
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "LinkedUp",
      href: "https://linkedup-xyz.streamlit.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Built an AI-powered LinkedIn content generation platform using Streamlit, LangChain, and Groq LLMs, enabling intelligent post creation through scalable prompt pipelines, real-time AI inference, and interactive user workflows. Integrated dynamic content personalization, context-aware generation, and responsive UI features to enhance user engagement and content quality.",
      technologies: [
        "LangChain",
        "Python",
        "Pydantic",
        "Groq API",
        "Streamlit",
        "LLM Integration"
      ],
      links: [
        {
          type: "Website",
          href: "https://linkedup-xyz.streamlit.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/LinkedUp",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/linkedapppng.png"
      //video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Mini-TailwindCSS",
      href: "https://mini-tailwindcss.netlify.app/",
      dates: "Feb 2026 - Feb 2026",
      active: true,
      description:
        "Built a lightweight Tailwind-inspired CSS utility engine using vanilla JavaScript and DOM manipulation that dynamically converts custom utility classes into real-time browser styling without external frameworks or build pipelines, enabling rapid UI prototyping, runtime style generation, and optimized developer-centric frontend workflows.Implemented a modular utility parsing architecture with extensible class mapping and responsive styling support.",
      technologies: [
        "JavaScript",
        "Typescript",
        "Express",
        "DOM Manipulation",
        "Tailwind",
        "React",
        "NPM"
      ],
      links: [
        {
          type: "Website",
          href: "https://mini-tailwindcss.netlify.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/therajarshichakraborty/Mini-TailwindCSS",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/background/mini-tailwind.png"
      //video:
      //  "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    }
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: []
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends"
        }
      ]
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint"
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning"
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet"
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server"
        }
      ]
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet"
        }
      ]
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017"
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient"
        }
      ]
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip"
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/"
        }
      ]
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend"
        }
      ]
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/"
        }
      ]
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: []
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis"
        }
      ]
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a"
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native"
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native"
        }
      ]
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: []
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native"
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native"
        }
      ]
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch"
        }
      ]
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes"
        }
      ]
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic"
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails"
        }
      ]
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native"
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails"
        }
      ]
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11"
        }
      ]
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark"
        }
      ]
    }
  ],
  publications: [
    {
      title:
        "Deep Learning Enabled Fruit Quality Assessment with Hyper-Spectral Feature Fusion",
      authors: [
        "Rajarshi Chakraborty* [ UnderGrad Researcher, Techno Main Salt Lake | Kolkata ]",
        "Dr. Subhankar Chatterjee [ Professor, Techno Main Salt Lake | Kolkata ]",
        "Aditi Nandi Tokder [ Assistant Professor, Techno Main Salt Lake | Kolkata ]",
        "Dr. Anirban Bose [ Assistant Professor, Dr. B. C. Roy Engineering College | Durgapur ]"
      ],
      conference: "CIACON 2026",
      conferenceFullName:
        "International Conference on Control, Instrumentation, Energy & Communication",
      status: "Published",
      paperId: "2074",
      date: "July 2026",
      description:
        "Proposes a novel deep learning framework that integrates hyper-spectral features using a fusion network to assess fruit quality with high precision, combining external appearance defects with internal chemical composition data.",
      ieeeUrl: "https://ieeexplore.ieee.org/document/11688352",
      pdfUrl: "/pdfs/research-paper.pdf",
      isbn: {
        electronic: "979-8-3315-5231-2",
        pod: "979-8-3315-5232-9"
      },
      links: [
        {
          name: "IEEE Xplore",
          href: "https://ieeexplore.ieee.org/document/11688352",
          icon: "external"
        }
      ]
    }
  ]
} as const;