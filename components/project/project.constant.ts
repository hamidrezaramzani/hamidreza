import { ProjectItem } from "./project.type";

export const projects: ProjectItem[] = [
  {
    title: "Iran Location api",
    description:
      "This project provides an API for retrieving information about cities and states. It allows users to query data based on region, state, or city names, returning relevant details like population, coordinates, and administrative divisions. The API is designed for seamless integration into web or mobile applications, offering fast and reliable geographical data.",
    startDate: "14 April 2022",
    endDate: "Currently under development",
    technologies: ["nextjs", "nodejs"],
    link: "https://github.com/hamidrezaramzani/iran-locations-api",
  },
  {
    title: "Personal Website",
    description: `Your personal resume website is a sleek, Next.js-powered platform showcasing your skills, projects, and professional experience. It provides an interactive and visually appealing way for potential employers or collaborators to explore your background, featuring sections for your bio, work history, technical expertise, and portfolio. The site is fully responsive and optimized for performance, ensuring a smooth user experience across all devices.`,
    startDate: "9 December 2021",
    endDate: "Currently under development",
    technologies: ["nextjs", "nodejs", "mongodb"],
    link: "https://github.com/hamidrezaramzani/iamhamidreza",
  },
];
