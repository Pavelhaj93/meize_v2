import Container from "@/app/_components/Container";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import {
	getProjectById,
	getProjectBySlug,
} from "../../../../../helpers/projects";

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
	title: "We're Next",
	description: "We're Next project page",
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
			<Container first className="flex flex-col gap-12">
				<header>
					<PageTitle title={project.title} />
				</header>

				{project.videos?.vimeoId && (
					<div className="relative w-full aspect-square max-h-[90vh] my-10">
						<iframe
							src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
							allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
							title={project.title}
							className="absolute w-full h-full top-0 left-0"
						/>
					</div>
				)}

				<GridComponent gifs={project.gifs ?? []} />

				<ScreenGrabs images={project.screens ?? []} />

				<ProjectButtons prevProject={prevProject} nextProject={nextProject} />
			</Container>
		</article>
	);
}
