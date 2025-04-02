import Container from "@/app/_components/Container";
import MasonryGallery from "@/app/_components/MasonryGallery";
import { generatePageMetadata } from "@/helpers/metadata";
import { getAllProjects } from "@/helpers/projects";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; }> }) {
	const { locale } = await params;

	const t = await getTranslations({ locale, namespace: 'projects.metaData' });

	return generatePageMetadata({
		title: t('title')
	}, locale);
}

export default function ProjectsPage() {
	const projects = getAllProjects();

	return (
		<Container first>
			<div className="max-md:pt-14 pb-20">
				<MasonryGallery items={projects} />
			</div>
		</Container>
	);
}
