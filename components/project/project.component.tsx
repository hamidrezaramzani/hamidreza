"use client";
import { ProjectItem } from "./project.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";
import { useRef, useState } from "react";
import { supabase } from "@/lib";
import { LoadingContainer } from "../loading-container";
import { useOnVisible } from "@/hooks";

export const Project = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  const componentRef = useRef(null);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select(`
        id, 
        startDate, 
        endDate, 
        title, 
        description,
        technologies (
          id, 
          title
        )
      `);

    if (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } else {
      setProjects(data as unknown as ProjectItem[]);
    }
    setLoading(false);
  };

  useOnVisible<ProjectItem[]>({
    callback: fetchProjects,
    ref: componentRef,
    values: projects,
  });

  return (
    <MainLayout hash="projects" title={wordbook.project.title}>
      <div ref={componentRef}>
        <LoadingContainer loading={loading}>
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
                  {selectedProject?.technologies.map(({ id, title }) => (
                    <span
                      key={id}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
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
