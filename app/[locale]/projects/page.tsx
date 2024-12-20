import Container from "@/app/_components/Container";
import MasonryGallery from "@/app/_components/MasonryGallery";
import Navbar from "@/app/_components/Navbar";
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
    <div className="">
      <Navbar />
      <main>
        <Container first>
          <PageTitle title={t("title")} />
          <MasonryGallery items={projects} />
        </Container>
      </main>
    </div>
  );
}
