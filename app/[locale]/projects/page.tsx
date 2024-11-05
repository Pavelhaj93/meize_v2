import Container from "@/app/_components/Container";
import ProjectsGrid from "@/app/_components/ProjectsGrid";
import { getAllProjects } from "@/helpers/projects";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  const projects = useMemo(() => {
    return getAllProjects();
  }, []);

  console.log("projects", projects);

  return (
    <>
      <h1 className="text-0">{t("title")}</h1>

      <Container className="first-container">
        <ProjectsGrid projects={projects} className="pb-4" />
      </Container>
    </>
  );
}
