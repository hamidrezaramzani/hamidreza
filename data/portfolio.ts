export const siteConfig = {
  name: "Hamidreza Ramzani",
  shortName: "Hamidreza",
  title: "Hamidreza Ramzani — Frontend Developer",
  description:
    "I'm Hamidreza, a 23-year-old web developer with a strong passion for technology and coding.",
  url: "https://www.thehamidreza.ir",
  locale: "en_US",
  github: "https://github.com/hamidrezaramzani",
  role: "Frontend Developer",
  focus: "Building polished web interfaces with React and Next.js",
  yearsStarted: 2022,
};

export const about = {
  fullName: "Hamidreza Ramzani",
  headline: "Frontend Developer",
  description: "I'm Hamidreza, a 23-year-old web developer",
  extendedDescription:
    "I'm Hamidreza, a 23-year-old web developer with a strong passion for technology and coding.",
  highlights: [
    {
      label: "Experience",
      value: "Since 2022",
    },
    {
      label: "Focus",
      value: "Frontend",
    },
    {
      label: "Specialty",
      value: "React & Next.js",
    },
  ],
};

export const experiences = [
  {
    id: "1",
    startDate: "22 July 2022",
    endDate: "Currently",
    position: "Frontend Developer",
    company: "Poroshat Filter",
    workHighlights: [
      {
        id: "1",
        description:
          "Built dynamic user interfaces using React.js to improve user experience in the company's web applications.",
      },
      {
        id: "2",
        description:
          "Implemented responsive designs with JavaScript, ensuring seamless application functionality across all devices.",
      },
    ],
  },
];

export const projects = [
  {
    id: "1",
    startDate: "14 April 2022",
    endDate: "Currently",
    title: "Iran Locations API",
    description:
      "This project provides an API for retrieving information about cities and states. It allows users to query data based on region, state, or city names, returning relevant details like population, coordinates, and administrative divisions. The API is designed for seamless integration into web or mobile applications, offering fast and reliable geographical data.",
    technologies: ["Next.js", "Node.js"],
    demo: "https://www.iran-locations-api.ir",
    github: "https://github.com/hamidrezaramzani/iran-locations-api",
    accent: "from-indigo-500/20 via-indigo-400/10 to-transparent",
  },
  {
    id: "2",
    startDate: "Apr 28, 2026",
    endDate: "Jun 7, 2026",
    title: "Keyboom",
    description:
      "A web application designed for managing, tracking, and analyzing organizational software subscriptions. Keyboom helps teams maintain visibility over subscription costs, renewal dates, license usage, and vendor information through a centralized management platform.",
    technologies: ["JavaScript", "TypeScript"],
    demo: null,
    github: "https://github.com/hamidrezaramzani/keyboom",
    accent: "from-zinc-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "3",
    startDate: "Oct 15, 2025",
    endDate: "Feb 11, 2026",
    title: "IntelliMeeting",
    description:
      "An AI-powered meeting assistant that records meetings, converts speech to text, and provides tools for transcript editing, analysis, and information extraction. The platform helps teams organize meeting notes, identify key discussion points, and improve collaboration through intelligent transcript management.",
    technologies: ["Node.js", "AI", "Calendar API"],
    demo: null,
    github: "https://github.com/hamidrezaramzani/intelli-meeting",
    accent: "from-indigo-600/20 via-slate-500/10 to-transparent",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["ReactJS", "NextJS"],
  },
  {
    category: "Backend",
    items: ["NestJs", "ExpressJS"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Typescript"],
  },
  {
    category: "DevOps",
    items: ["Linux", "Docker"],
  },
];

export const contacts = [
  {
    id: "email",
    title: "Email",
    link: "mailto:hamidrezaramzani80@gmail.com",
    label: "hamidrezaramzani80@gmail.com",
  },
  {
    id: "telegram",
    title: "Telegram",
    link: "https://t.me/hamidrezaramzani",
    label: "t.me/hamidrezaramzani",
  },
  {
    id: "instagram",
    title: "Instagram",
    link: "https://instagram.com/hamidrezaramzani_",
    label: "instagram.com/hamidrezaramzani",
  },
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/hamidrezaramzani",
    label: "github.com/hamidrezaramzani",
  },
];

export const navItems = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];
