"use client";
import { ProjectItem } from "./project.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";
import { LoadingContainer } from "../loading-container";

export const Project = () => {
  const projects = [
    {
      id: "1",
      startDate: "14 April 2022",
      endDate: "Currently",
      title: "Iran Locations API",
      link: "https://www.iran-locations-api.ir",
      description:
        "This project provides an API for retrieving information about cities and states. It allows users to query data based on region, state, or city names, returning relevant details like population, coordinates, and administrative divisions. The API is designed for seamless integration into web or mobile applications, offering fast and reliable geographical data.",
      technologies: [
        { id: "1", title: "nextjs" },
        { id: "2", title: "nodejs" },
      ],
    },

    {
      id: "2",
      startDate: "Apr 28 - 2026",
      endDate: "Jun 7, 2026",
      title: "Keyboom",
      link: "https://github.com/hamidrezaramzani/keyboom",
      description:
        "An open-source project focused on keyboard utilities and productivity tools. The project explores modern frontend architecture and reusable component design using JavaScript/TypeScript.",
      technologies: [
        { id: "1", title: "javascript" },
        { id: "2", title: "typescript" },
        { id: "3", title: "github" },
      ],
    },

    {
      id: "3",
      startDate: "Oct 15, 2025",
      endDate: "Feb 11, 2026",
      title: "IntelliMeeting",
      link: "https://github.com/hamidrezaramzani/intelli-meeting",
      description:
        "AI-powered meeting scheduling system that analyzes calendar events and suggests optimal meeting times based on availability and priority scoring algorithms.",
      technologies: [
        { id: "1", title: "nodejs" },
        { id: "2", title: "ai" },
        { id: "3", title: "calendar-api" },
      ],
    },
  ];

  return (
    <MainLayout hash="projects" title={wordbook.project.title}>
      <div>
        <LoadingContainer>
          <Slider<ProjectItem>
            values={projects}
            render={(selectedProject) => (
              <a
                href={selectedProject?.link}
                target="_blank"
                className="duration-300 ease-in-out w-full"
              >
                <span className="text-sm  dark:text-white raleway-regular text-slate-600">
                  {selectedProject?.startDate} - {selectedProject?.endDate}
                </span>
                <h3 className="raleway-bold text-2xl dark:text-violet-500 py-1 text-slate-800">
                  {selectedProject?.title}
                </h3>
                <h4 className="raleway-regular dark:text-gray-300 text-slate-600">
                  - {selectedProject?.description}
                </h4>
                <div className="flex gap-3 mt-3">
                  {selectedProject?.technologies.map(({ id, title }) => (
                    <span
                      key={id}
                      className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium dark:bg-zinc-800 dark:text-violet-50 text-violet-500 ring-1 ring-inset dark:ring-0 ring-violet-700/10"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </a>
            )}
          />
        </LoadingContainer>
      </div>
    </MainLayout>
  );
};
