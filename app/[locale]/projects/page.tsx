import Container from "@/app/_components/Container";
import MasonryGallery from "@/app/_components/MasonryGallery";
import Navbar from "@/app/_components/Navbar";
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
      <main className="max-md:pt-14">
        <Container first>
          <MasonryGallery items={projects} />
        </Container>
      </main>
    </div>
  );
}
