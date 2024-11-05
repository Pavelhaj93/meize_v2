import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import { notFound } from "next/navigation";
import Container from "@/app/_components/Container";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import ProjectButtons from "@/app/_components/ProjectButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sawsane",
  description: "Sawsane project page",
};

export default async function SawsanePage() {
  // Fetch the specific project data for "angus-farm"
  const project = getProjectBySlug("sawsane");

  console.log("project", project?.screens);

  // Handle not found case
  if (!project) {
    notFound();
  }

  const prevProject = getProjectById(project.id - 1) || undefined;
  const nextProject = getProjectById(project.id + 1) || undefined;

  return (
    <article>
      <Container className="first-container flex flex-col gap-4">
        <header>
          <h1 className="title-big">{project.title}</h1>
        </header>
      </Container>

      <Container className="md:px-14 px-4 mx-0 my-auto flex flex-col justify-center items-center">
        <div className="w-full h-[500px] xl:h-[600px] 2xl:h-[850px]">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/NHLzTpb8DeM?si=SZplCsBb5X0Y_cDt"
            title="Vimeo video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="pt-20 gap-12 flex flex-col">
          <ScreenGrabs images={project.screens ?? []} />
          <ProjectButtons prevProject={prevProject} nextProject={nextProject} />
        </div>
      </Container>
    </article>
  );
}
