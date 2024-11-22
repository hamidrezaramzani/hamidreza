"use client";
import Image from "next/image";
import { wordbook } from "@/utils";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <div className="section w-full flex justify-center align-middle h-screen">
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col w-1/2 gap-5 align-middle">
          <div className="flex flex-col justify-center items-center">
            <Image src="/alien.png" width={250} alt="Alien" height={250} />
            <div className="flex flex-col text-center">
              <div className="raleway-bold text-2xl mt-3 mb-1 text-slate-900 dark:text-violet-600 ">
                <TypeAnimation
                  className="text-2xl"
                  sequence={[wordbook.about.fullName]}
                  repeat={3}
                />
              </div>
              <p className="raleway-regular text-slate-900 dark:text-white">
                {wordbook.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
