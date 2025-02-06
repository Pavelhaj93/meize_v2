import Container from "@/app/_components/Container";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "Sawsane",
	description: "Sawsane project page",
};

export default async function SawsanePage() {
	const project = getProjectBySlug("sawsane");

	// Handle not found case
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
				<div className="w-full h-[500px] xl:h-[600px] 2xl:h-[850px]">
					<iframe
						height="100%"
						width="100%"
						src="https://www.youtube.com/embed/NHLzTpb8DeM?si=SZplCsBb5X0Y_cDt"
						title={project.title}
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
