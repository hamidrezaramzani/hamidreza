import MainLayout from "@/components/MainLayout/main-layout.component";
import { wordBook } from "@/constants/wordBook";
import { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <MainLayout title={wordBook.view.home.bio.en}>
      <div className="w-1/3">
        <img src="/" alt="This is test" />
        <h3>Project Title</h3>
        <p>This is project description</p>
      </div>
    </MainLayout>
  );
}

export const metadata: Metadata = {
  title: wordBook.view.projects.title.en,
  description: "These are my projects that are made...",
};
