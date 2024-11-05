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
    <div className="flex justify-between items-center text-0 flex-wrap gap-8">
      <div>
        {prevProject && (
          <ButtonPrev href={`${locale}/projects/${prevProject.slug}`} />
        )}
      </div>
      <div>
        {nextProject && (
          <ButtonNext href={`${locale}/projects/${nextProject.slug}`} />
        )}
      </div>
    </div>
  );
}
