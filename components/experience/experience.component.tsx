"use client";
import { WorkExperience } from "./experience.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";
import { useRef, useState } from "react";
import { supabase } from "@/lib";
import { LoadingContainer } from "@/components";
import { useOnVisible } from "@/hooks";

export const Experience = () => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);

  const componentRef = useRef(null);

  const fetchExperiencesWithHighlights = async () => {
    const { data, error } = await supabase.from("experiences").select(`
        id, 
        startDate, 
        endDate, 
        position, 
        company,
        workHighlights (
          id, 
          description
        )
      `);

    if (error) {
      console.error("Error fetching experiences with highlights:", error);
      setExperiences([]);
    } else {
      setExperiences(data);
    }
    setLoading(false);
  };

  useOnVisible<WorkExperience[]>({
    callback: fetchExperiencesWithHighlights,
    ref: componentRef,
    values: experiences,
  });

  return (
    <MainLayout hash="experiences" title={wordbook.experience.title}>
      <div ref={componentRef}>
        <LoadingContainer loading={loading}>
          <Slider<WorkExperience>
            values={experiences}
            render={(selectedExperience) => (
              <div className="w-full  transition-all duration-300 ease-in-out">
                <span className="text-sm raleway-regular text-slate-600">
                  {selectedExperience?.startDate} -{" "}
                  {selectedExperience?.endDate}
                </span>
                <h3 className="raleway-bold text-2xl  py-1 text-slate-800">
                  {selectedExperience?.position}
                </h3>
                <h4 className="raleway-regular text-slate-600">
                  - {selectedExperience?.company}
                </h4>
                <ul className="list-disc ml-3 mt-3">
                  {selectedExperience?.workHighlights.map(
                    ({ id, description }) => (
                      <li
                        className="text-sm raleway-regular text-slate-600 mt-3"
                        key={id}
                      >
                        {description}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          />
        </LoadingContainer>
      </div>
    </MainLayout>
  );
};
