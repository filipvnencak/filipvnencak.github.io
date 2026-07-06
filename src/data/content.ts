export const profile = {
  name: "Filip Vnenčák",
  role: "Full-Stack Developer",
  tagline: "From backend logic to frontend delight — making the web better.",
  location: "Poprad, Slovakia",
  email: "vnencak.filip@gmail.com",
  github: "https://github.com/filipvnencak",
  linkedin: "https://www.linkedin.com/in/filip-vnencak-224093118/",
  photo: "/img/filip.jpg",
  about: [
    "Passionate full-stack web developer with 5+ years of hands-on experience building modern web applications with React, Next.js and Node.js.",
    "After several years in a fast-paced startup environment, I've grown into a problem-solver who enjoys simplifying complexity and building tools that make people's lives easier.",
    "I care about clean code, thoughtful UX, and products that genuinely help users — whether it's backend APIs, frontend UI, or the glue in between.",
  ],
};

export const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "6", label: "Companies & teams" },
  { value: "∞", label: "Coffees debugging" },
];

export type Job = {
  role: string;
  company: string;
  detail?: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export const jobs: Job[] = [
  {
    role: "Frontend Developer",
    company: "Ynput",
    detail: "Creators of AYON",
    period: "Aug 2025 – Present",
    location: "Prague",
    current: true,
    points: [
      "Contributor to AYON, a large open-source production application built with React, TypeScript and Redux Toolkit Query.",
      "Build and maintain complex data-grid / table UI — inline cell editing, clipboard paste handling, sorting and focus-restoration — in an international team.",
    ],
    stack: ["React", "TypeScript", "RTK Query", "Redux"],
  },
  {
    role: "Full-Stack Developer",
    company: "Zooza",
    period: "Jan 2023 – Present",
    location: "Bratislava",
    current: true,
    points: [
      "Develop and maintain a Slovak activities-management SaaS across the full stack — React frontend and Node.js backend.",
      "Built an MCP integration for timetables, class scheduling and customer communications; contributed to reporting and attendance tooling.",
    ],
    stack: ["React", "Node.js", "MCP", "PHP"],
  },
  {
    role: "Frontend Developer",
    company: "FRINX",
    period: "Mar 2022 – Aug 2022",
    location: "Slovakia",
    points: [
      "Developed frontend features with React for a network-automation platform.",
    ],
    stack: ["React", "TypeScript"],
  },
  {
    role: "Technical Specialist / Developer",
    company: "SKICONTROL S.K.A.",
    period: "Sep 2020 – Mar 2022",
    location: "Poland",
    points: [
      "Built a ski-pass and access-control application with a Node.js backend to support ski-resort operations — my first hands-on web development role.",
    ],
    stack: ["Node.js", "JavaScript"],
  },
  {
    role: "Technical Specialist",
    company: "V.I.A.C. o.z.",
    period: "Aug 2018 – Jul 2020",
    location: "Trstená",
    points: [
      "Youth support and development — technical delivery, tooling and hands-on problem solving before moving full-time into software.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status?: string;
};

export const projects: Project[] = [
  {
    name: "open-resi",
    tagline: "Property-management & HOA (SVB) SaaS platform",
    description:
      "A multi-tenant control plane for property and homeowners-association management, running on AWS with live customer installs.",
    highlights: [
      "Multi-tenant control plane architecture",
      "TTLock smart-lock integration with offline Bluetooth",
      "Companion React Native mobile app",
      "Running on AWS with live customer installs",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "React Native",
      "AWS",
    ],
    status: "Live",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "RTK Query"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "PHP",
      "Python",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
      "Stripe",
    ],
  },
  {
    title: "Infra & Tooling",
    skills: ["AWS", "Docker", "Caddy", "Cloudflare", "GitHub Actions"],
  },
  {
    title: "AI",
    skills: ["MCP servers", "Spec-driven dev"],
  },
];

export const languages = [
  { name: "Slovak", level: "Native", value: 100 },
  { name: "English", level: "B1 – B2", value: 65 },
  { name: "Polish", level: "Conversational", value: 55 },
];
