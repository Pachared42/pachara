import type { ReactNode } from "react";

export type ProjectCategory =
  | "All"
  | "Web"
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Desktop";

export type StackIcon = {
  src: string;
  alt: string;
  className: string;
};

export type Project = {
  id: number;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  image: string;
  githubLink: string;
  stackIcons?: StackIcon[];
};

export type SkillIconItem = {
  skill?: ReactNode;
  tool?: ReactNode;
  database?: ReactNode;
  cloud?: ReactNode;
  name: string;
  experience: string;
};

export type SkillCategory = {
  title: string;
  data: SkillIconItem[];
  extractItems: (_item: SkillIconItem) => ReactNode[];
};
