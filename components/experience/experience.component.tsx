"use client";
import { experiences } from "./experience.constant";
import { WorkExperience } from "./experience.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";

export const Experience = () => {
  return (
    <MainLayout title={wordbook.experience.title}>
      <Slider<WorkExperience>
        values={experiences}
        render={(selectedExperience) => (
          <div className="w-full">
            <span className="text-sm raleway-regular text-slate-600">
              {selectedExperience?.startDate} - {selectedExperience?.endDate}
            </span>
            <h3 className="raleway-bold text-2xl  py-1 text-slate-800">
              {selectedExperience?.position}
            </h3>
            <h4 className="raleway-regular text-slate-600">
              - {selectedExperience?.company}
            </h4>
            <ul className="list-disc ml-3 mt-3">
              {selectedExperience?.workHighlights.map((highlight) => (
                <li className="text-sm raleway-regular text-slate-600 mt-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </MainLayout>
  );
};
