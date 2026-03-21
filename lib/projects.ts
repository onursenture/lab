import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "example-project",
    name: "Example Project",
    description: "A starter example to demonstrate the lab structure.",
    date: "2026-03-21",
    tags: ["demo"],
    status: "active",
  },
];

export function getProjects(): Project[] {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
