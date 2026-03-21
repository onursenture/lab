import { getProjects } from "@/lib/projects";
import Link from "next/link";

export default function HomePage() {
  const projects = getProjects();

  return (
    <main>
      <header>
        <h1>Lab</h1>
        <p className="subtitle">
          Experiments and side projects by Onur Senture.
        </p>
      </header>

      <section className="projects">
        {projects.map((project) => (
          <article key={project.slug} className="project-item">
            <Link href={`/projects/${project.slug}`}>
              <h2>{project.name}</h2>
            </Link>
            <p className="project-description">{project.description}</p>
            <time dateTime={project.date}>
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </section>
    </main>
  );
}
