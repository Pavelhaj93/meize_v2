import Container from "@/app/_components/Container";
import MasonryGallery from "@/app/_components/MasonryGallery";
import { getAllProjects } from "@/helpers/projects";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ProjectsPage() {
	const t = useTranslations("projects");

	const projects = useMemo(() => {
		return getAllProjects();
	}, []);

	return (
		<Container first>
			<div className="max-md:pt-14 pb-20">
				<MasonryGallery items={projects} />
			</div>
		</Container>
	);
}
