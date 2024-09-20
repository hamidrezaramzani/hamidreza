"use client";
import Image from "next/image";
import { wordbook } from "@/utils";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <div className="section w-full flex justify-center align-middle h-screen">
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col w-1/2 gap-5 align-middle">
          <div className="flex align-middle justify-center gap-6">
            <Image src="/alien.png" width={400} alt="Alien" height={400} />
            <div className="flex flex-col justify-center">
              <TypeAnimation
                className="raleway-bold text-5xl mb-5"
                sequence={[wordbook.about.fullName]}
                repeat={3}
              />
              <p className="raleway-regular mt-1">
                {wordbook.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
