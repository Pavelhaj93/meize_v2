import Container from "./Container";

import Button from "./Button";
import ProjectsGrid from "./ProjectsGrid";
import { getFeaturedProjects } from "@/helpers/projects";

interface FeaturedProjectsProps {
  projects: ReturnType<typeof getFeaturedProjects>;
  className?: string;
}

export default function FeaturedProjects({
  projects,
  className = "",
  ...rest
}: FeaturedProjectsProps) {
  return (
    <Container mobileFull={true} className={className} {...rest}>
      <ProjectsGrid projects={projects ?? []} />

      <div className="text-center mt-10">
        <Button theme="ghost" size="big" padding="big" href="/projects">
          {/* {lang.seeAllWork} */}See all work
          {/* TODO: localize text */}
        </Button>
      </div>
    </Container>
  );
}
