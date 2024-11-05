import { notFound } from "next/navigation";
import Container from "@/app/_components/Container";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const locale = params.locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(params.locale);

  const parsedSlug = params.slug.replace(/%2F/g, "/");

  console.log("parsedSlug", parsedSlug);

  // Fetch project data based on slug
  const project = getProjectBySlug(parsedSlug);

  if (!project) {
    notFound();
  }

  const prevProject = getProjectById(project.id - 1) || undefined;
  const nextProject = getProjectById(project.id + 1) || undefined;

  return (
    <article>
      <Container className="first-container flex flex-col gap-4">
        <header className="text-center">
          <h1 className="title-big">{project.title}</h1>
        </header>
      </Container>

      <Container className="md:px-14 px-4">
        {project.videos.vimeoId && (
          <iframe
            src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ANGUSFARM"
            className="w-full h-[56.25vw] md:h-[56.25vw] lg:h-[56.25vw] xl:h-[56.25vw]"
          />
        )}

        <div className="pt-20 gap-12 flex flex-col">
          <ScreenGrabs images={project.screens} />
          <ProjectButtons prevProject={prevProject} nextProject={nextProject} />
        </div>
      </Container>
    </article>
  );
}
