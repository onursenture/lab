import { getProjectBySlug, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <a href="https://onursenture.com" className="back-link">
        &larr; Back to onursenture.com
      </a>
      <h1>{project.name}</h1>
      <p className="project-description">{project.description}</p>
      <time dateTime={project.date}>
        {new Date(project.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </main>
  );
}
