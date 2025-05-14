import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";

interface Project {
	slug: string;
}

interface ProjectButtonsProps {
	prevProject?: Project;
	nextProject?: Project;
}

export default function ProjectButtons({
	prevProject,
	nextProject,
}: ProjectButtonsProps) {
	return (
		<div className="flex justify-between items-center text-0 flex-wrap gap-8 xl:mt-10 mb-20">
			<div>{prevProject && <ButtonPrev href={`${prevProject.slug}`} />}</div>
			<div>{nextProject && <ButtonNext href={`${nextProject.slug}`} />}</div>
		</div>
	);
}
