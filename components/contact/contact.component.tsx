"use client";
import { wordbook } from "@/utils";
import { MainLayout } from "../main-layout";
import { contacts } from "./contact.constant";

export const Contact = () => {
  return (
    <MainLayout title={wordbook.contact.title}>
      <div className="flex flex-col -ml-8 md:ml-0 justify-start gap-2  items-end w-full">
        {contacts.map(({ icon: Icon, link, label }) => (
          <div className="inline md:flex md:items-center md:gap-3 border-b mt-8 w-full">
            <div>
              <Icon fontSize={33} />
            </div>
            <div>
              <a href={link}>{label}</a>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
