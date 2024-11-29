import Container from "@/app/_components/Container";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: `${project.title} project page`,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = await params;

  generateMetadata({ params });

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "cs" | "en")) {
    notFound();
  }

  const parsedSlug = slug.replace(/%2F/g, "/");

  // Fetch project data based on slug
  const project = getProjectBySlug(parsedSlug);

  if (!project) {
    notFound();
  }

  const prevProject = getProjectById(project.id - 1) || undefined;
  const nextProject = getProjectById(project.id + 1) || undefined;

  return (
    <article>
      <Container first>
        <header>
          <PageTitle title={project.title} />
        </header>
      </Container>

      <Container>
        {project.videos.vimeoId && (
          <div className="relative w-full" style={{ paddingTop: "45.25%" }}>
            <iframe
              src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;controls=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={project.title}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        )}

        <div className="md:pt-20 gap-12 flex flex-col">
          <ScreenGrabs images={project.screens} />
          <ProjectButtons prevProject={prevProject} nextProject={nextProject} />
        </div>
      </Container>
    </article>
  );
}
