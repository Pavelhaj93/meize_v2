import Image from "next/image";
import { getProjectById, getProjectBySlug } from "../../../../helpers/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Container from "@/app/_components/Container";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import ProjectButtons from "@/app/_components/ProjectButtons";

const GridComponent = ({ gifs }: { gifs: string[] }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-5 lg:gap-10">
      {gifs.map((gif, index) => (
        <div
          key={gif}
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
      <Container className="first-container flex flex-col gap-4">
        <header className="text-center">
          <h1 className="title-big">{project.title}</h1>
        </header>
      </Container>

      <Container className="md:px-14 px-4 gap-5 sm:gap-10">
        {project.videos.vimeoId && (
          <div className="w-full aspect-video mx-auto my-10">
            <iframe
              className="w-full h-full"
              src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="WERE NEXT"
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
