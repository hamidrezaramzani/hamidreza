"use client";
import { wordbook } from "@/utils";
import { MainLayout } from "../main-layout";
import { contacts } from "./contact.constant";
import Image from "next/image";

export const Contact = () => {
  return (
    <MainLayout title={wordbook.contact.title}>
      <div className="flex gap-10 -ml-8 md:ml-0 justify-start  items-end w-full">
        <Image
          src="/alien.png"
          className="hidden md:flex"
          width={250}
          alt="Alien"
          height={250}
        />
        <div className="flex flex-col">
          {contacts.map(({ icon: Icon, link, label, id, title }) => (
            <div
              key={id}
              className="inline dark:text-white text-slate-600 md:flex md:items-center md:gap-3 mt-8 w-full"
            >
              <div>
                <Icon className="text-violet-500" fontSize={33} />
              </div>
              <div>
                <span className="text-bold">{title}</span> <br />
                <a
                  href={link}
                  className="text-sm dark:text-gray-300 text-gray-500"
                >
                  {label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
