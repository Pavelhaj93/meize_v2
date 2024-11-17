import Container from "@/app/_components/Container";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, getProjectBySlug } from "../../../../helpers/projects";

const GridComponent = ({ gifs }: { gifs: StaticImageData[] }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-5 lg:gap-10">
      {gifs.map((gif, index) => (
        <div
          key={gif.src}
          className={`relative ${index === 1 ? "sm:mt-40" : ""} ${
            index === 2 ? "sm:-mt-40" : ""
          }`}
        >
          <Image src={gif} alt="Gif" width={768} height={432} />
        </div>
      ))}
    </div>
  );
};

export const metadata: Metadata = {
  title: "Were Next",
  description: "Were Next project page",
};

export default async function WereNextPage() {
  const project = getProjectBySlug("were-next");

  if (!project) {
    notFound();
  }

  const prevProject = getProjectById(project.id - 1) || undefined;
  const nextProject = getProjectById(project.id + 1) || undefined;

  return (
    <article>
      <Container className="mt-20 xl:mt-40">
        <header>
          <PageTitle title={project.title} />
        </header>
      </Container>

      <Container>
        {project.videos.vimeoId && (
          <div className="w-full aspect-video mx-auto my-10">
            <iframe
              className="w-full h-full"
              src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title={project.title}
            />
          </div>
        )}

        <GridComponent gifs={project.gifs ?? []} />

        <div className="pt-20 gap-12 flex flex-col">
          <ScreenGrabs images={project.screens} />
          <ProjectButtons prevProject={prevProject} nextProject={nextProject} />
        </div>
      </Container>
    </article>
  );
}
