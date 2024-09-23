"use client";
import { projects } from "./project.constant";
import { ProjectItem } from "./project.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";

export const Project = () => {
  return (
    <MainLayout hash="projects" title={wordbook.project.title}>
      <Slider<ProjectItem>
        values={projects}
        render={(selectedProject) => (
          <a
            href={selectedProject?.link}
            target="_blank"
            className="duration-300 ease-in-out w-full"
          >
            <span className="text-sm raleway-regular text-slate-600">
              {selectedProject?.startDate} - {selectedProject?.endDate}
            </span>
            <h3 className="raleway-bold text-2xl  py-1 text-slate-800">
              {selectedProject?.title}
            </h3>
            <h4 className="raleway-regular text-slate-600">
              - {selectedProject?.description}
            </h4>
            <div className="flex gap-3 mt-3">
              {selectedProject?.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                >
                  {technology}
                </span>
              ))}
            </div>
          </a>
        )}
      />
    </MainLayout>
  );
};
