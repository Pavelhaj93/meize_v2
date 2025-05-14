import Container from "@/app/_components/Container";
import PageTitle from "@/app/_components/PageTitle";
import ProjectButtons from "@/app/_components/ProjectButtons";
import ScreenGrabs from "@/app/_components/ScreenGrabs";
import { generatePageMetadata } from "@/helpers/metadata";
import { getProjectById, getProjectBySlug } from "@/helpers/projects";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string; locale: string }> }) {
	const { slug, locale } = await params;

	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return generatePageMetadata(
		{
			title: project.title,
		},
		locale,
	);
}

export default async function ProjectDetail({
	params,
}: { params: { slug: string; locale: string } }) {
	const { slug, locale } = await params;

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
			<Container first className="flex flex-col gap-12">
				<header>
					<PageTitle title={project.title} />
				</header>

				{project?.videos?.vimeoId && (
					<div className="relative w-full aspect-video">
						<iframe
							src={`https://player.vimeo.com/video/${project.videos.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;controls=0&amp;app_id=58479`}
							allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
							title={project.title}
							className="absolute top-0 left-0 w-full h-full"
						/>
					</div>
				)}
				{project?.videos?.youtube?.map((video) => (
					<div
						key={video.id}
						className="relative w-full md:mb-12"
						style={{ paddingTop: "45.25%" }}
					>
						<iframe
							src={video.url}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							title={project.title}
							className="absolute top-0 left-0 w-full h-full"
						/>
					</div>
				))}

				<ScreenGrabs images={project?.screens ?? []} />

				<ProjectButtons prevProject={prevProject} nextProject={nextProject} />
			</Container>
		</article>
	);
}
