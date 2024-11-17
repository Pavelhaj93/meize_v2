import { useLocale } from "next-intl";
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
  const locale = useLocale();

  return (
    <div className="flex justify-between items-center text-0 flex-wrap gap-8 mb-10">
      <div>{prevProject && <ButtonPrev href={`${prevProject.slug}`} />}</div>
      <div>{nextProject && <ButtonNext href={`${nextProject.slug}`} />}</div>
    </div>
  );
}
