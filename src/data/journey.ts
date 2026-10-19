export interface JourneyItem {
  year: string;
  title: string;
  organization: string;
  location?: string;
  type: string;
  description: string;
  skills: string[];
  icon: string;
  color: string;
  stats?: {
    leetcode: string;
    gfg: string;
  };
  projects?: string[];
}

export const JOURNEY_DATA: JourneyItem[] = [
  {
    year: "2023",
    title: "Started B.Tech in Computer Science & Engineering",
    organization: "Techno Main Salt Lake",
    location: "Kolkata, India",
    type: "education",
    description:
      "Began my undergraduate journey in Computer Science & Engineering with a specialization in IoT. Started exploring programming, data structures, web development, and software engineering fundamentals while building a strong technical foundation.",
    skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Git"],
    icon: "GraduationCap",
    color: "blue"
  },
  {
    year: "2023",
    title: "Built My First Full-Stack Projects",
    organization: "Personal Projects",
    type: "project",
    description:
      "Started building real-world applications using the MERN stack, learning frontend architecture, backend APIs, authentication, and database design while transitioning from academic programming to practical software development.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS"
    ],
    icon: "Code2",
    color: "green"
  },
  {
    year: "2024",
    title: "Academic Excellence",
    organization: "Techno Main Salt Lake",
    type: "achievement",
    description:
      "Achieved an 8.8 GPA in my first semester, one of the highest GPAs in the department, demonstrating strong academic performance alongside continuous self-learning.",
    skills: ["Problem Solving", "Algorithms", "Computer Science"],
    icon: "Award",
    color: "yellow"
  },
  {
    year: "2024",
    title: "Competitive Programming Journey",
    organization: "LeetCode • GeeksforGeeks • CodeChef",
    type: "achievement",
    description:
      "Dedicated significant time to mastering Data Structures and Algorithms, solving over 650+ coding problems across multiple competitive programming platforms while regularly participating in coding contests.",
    stats: {
      leetcode: "300+",
      gfg: "350+"
    },
    skills: ["DSA", "Algorithms", "Competitive Programming", "Problem Solving"],
    icon: "Brain",
    color: "purple"
  },
  {
    year: "2024",
    title: "Joined Technical Communities",
    organization: "Geekonix • SAMARTH TMSL",
    type: "leadership",
    description:
      "Became an active member of the college technical ecosystem by contributing to Geekonix as Management Staff and working with Gyan Darpan as a Content Writer and Marketing Assistant.",
    skills: [
      "Leadership",
      "Content Writing",
      "Community Management",
      "Event Management"
    ],
    icon: "Users",
    color: "orange"
  },
  {
    year: "2025",
    title: "Open Source Contributor",
    organization: "SSoC • SWoC • Hacktoberfest",
    type: "open-source",
    description:
      "Expanded into open source by contributing to multiple programs, collaborating with developers worldwide, improving real-world projects, and strengthening software engineering best practices.",
    skills: ["Git", "GitHub", "Open Source", "Code Review", "Collaboration"],
    icon: "Github",
    color: "gray"
  },
  {
    year: "2025",
    title: "Shifted Towards AI Engineering",
    organization: "Personal Learning",
    type: "learning",
    description:
      "Started integrating Large Language Models, AI workflows, and machine learning into modern applications, exploring LangChain, prompt engineering, and AI-powered developer tools.",
    skills: [
      "Generative AI",
      "LangChain",
      "LLMs",
      "Prompt Engineering",
      "Machine Learning"
    ],
    icon: "Sparkles",
    color: "pink"
  },
  {
    year: "2026",
    title: "Building Developer Products",
    organization: "Independent",
    type: "startup",
    description:
      "Focused on creating production-ready developer tools, AI products, and scalable applications with modern architectures, emphasizing clean code, performance, and exceptional user experience.",
    projects: [
      "Zenith CLI",
      "Synapse UI",
      "ReviewRay",
      "LinkedUp",
      "SocketPoll",
      "MiniJ CSS"
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "System Design",
      "AI Integration"
    ],
    icon: "Rocket",
    color: "cyan"
  },
  {
    year: "2026",
    title: "Growing as a Software Engineer",
    organization: "Today",
    type: "current",
    description:
      "Currently focused on building scalable full-stack applications, AI-powered developer experiences, reusable UI libraries, and open-source software while continuously learning distributed systems, backend engineering, and machine learning.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AI",
      "System Design"
    ],
    icon: "Target",
    color: "emerald"
  }
];
