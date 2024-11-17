import Container from "@/app/_components/Container";
import GifGrid from "@/app/_components/GifGrid";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Angus Farm",
  description: "Angus Farm project page",
};

export default async function AngusFarmPage() {
  const project = getProjectBySlug("angus-farm");

  // Handle not found case
  if (!project) {
    notFound();
  }

  const prevProject = getProjectById(project.id - 1) || undefined;
  const nextProject = getProjectById(project.id + 1) || undefined;

  return (
    <article>
      <Container className="mt-10 md:mt-14 xl:mt-40">
        <header>
          <PageTitle title={project.title} />
        </header>
      </Container>

      <Container>
        {project.videos.vimeoId1 && (
          <iframe
            src={`https://player.vimeo.com/video/${project.videos.vimeoId1}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ANGUSFARM"
            className="w-full h-[56.25vw] md:h-[56.25vw] lg:h-[56.25vw] xl:h-[40.25vw]"
          />
        )}

        <GifGrid gifs={project.gifs ?? []} bottom={0} top={2} />

        {project.videos.vimeoId2 && (
          <iframe
            src={`https://player.vimeo.com/video/${project.videos.vimeoId2}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ANGUSFARM"
            className="w-full h-[56.25vw] md:h-[56.25vw] lg:h-[56.25vw] xl:h-[40.25vw]"
          />
        )}

        <GifGrid gifs={project.gifs ?? []} bottom={2} top={4} revert />

        {project.videos.vimeoId3 && (
          <iframe
            src={`https://player.vimeo.com/video/${project.videos.vimeoId3}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ANGUSFARM"
            className="w-full h-[56.25vw] md:h-[56.25vw] lg:h-[56.25vw] xl:h-[40.25vw]"
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
