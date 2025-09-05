"use client";
import { WorkExperience } from "./experience.type";
import { MainLayout } from "../main-layout";
import { Slider } from "../slider/slider.component";
import { wordbook } from "@/utils";
import { LoadingContainer } from "@/components";

export const Experience = () => {
  const experiences = [
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
        {
          id: "3",
          description:
            "Collaborated regularly with backend developers to integrate APIs and ensure smooth data flow between frontend and backend.",
        },
      ],
    },
  ];

  return (
    <MainLayout hash="experiences" title={wordbook.experience.title}>
      <div>
        <LoadingContainer>
          <Slider<WorkExperience>
            values={experiences}
            render={(selectedExperience) => (
              <div className="w-full  transition-all duration-300 ease-in-out">
                <span className="text-sm raleway-regular dark:text-white text-slate-600">
                  {selectedExperience?.startDate} -{" "}
                  {selectedExperience?.endDate}
                </span>
                <h3 className="raleway-bold text-2xl dark:text-violet-500 py-1 text-slate-800">
                  {selectedExperience?.position}
                </h3>
                <h4 className="raleway-regular text-slate-600 dark:text-white">
                  - {selectedExperience?.company}
                </h4>
                <ul className="list-disc ml-3 mt-3">
                  {selectedExperience?.workHighlights.map(
                    ({ id, description }) => (
                      <li
                        className="text-sm raleway-regular dark:text-gray-300 text-slate-600 mt-3"
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
