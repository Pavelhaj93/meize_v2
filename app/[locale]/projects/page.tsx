import Container from "@/app/_components/Container";
import MasonryGallery from "@/app/_components/MasonryGallery";
import PageTitle from "@/app/_components/PageTitle";
import { getAllProjects } from "@/helpers/projects";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  const projects = useMemo(() => {
    return getAllProjects();
  }, []);

  return (
    <Container className="mt-10 md:mt-24 xl:mt-40 pb-10">
      <PageTitle title={t("title")} />
      <MasonryGallery items={projects} />
    </Container>
  );
}
