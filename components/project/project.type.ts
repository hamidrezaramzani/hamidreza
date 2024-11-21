export type ProjectItem = {
  link: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  technologies: { id: string; title: string }[];
};
