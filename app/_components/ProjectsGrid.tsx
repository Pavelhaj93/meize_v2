import type { Project } from "@/helpers/projects";
import PreviewTile from "./PreviewTile";

interface ProjectsGridProps {
	projects: Project[];
	className?: string;
}

export default function ProjectsGrid({
	className = "",
	projects,
	...rest
}: ProjectsGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{projects.map((project, key) => {
				return (
					<PreviewTile {...project} key={`PreviewTile: ${key}-${project.id}`} />
				);
			})}
		</div>
	);
}
