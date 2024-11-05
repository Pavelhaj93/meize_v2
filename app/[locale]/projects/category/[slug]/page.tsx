import Categories from "@/app/_components/Categories";
import Container from "@/app/_components/Container";
import ProjectsGrid from "@/app/_components/ProjectsGrid";
import { getProjectsByCategory } from "@/helpers/projects";
import { useTranslations } from "next-intl";

export default function CategoryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const t = useTranslations();
  const categorySlug = params.slug;
  const projects = getProjectsByCategory(categorySlug);

  const title = `${t(`categories.${categorySlug}`)} - ${t(
    `projects.${categorySlug}`
  )}`;

  return (
    <>
      <Container className="first-container text-center">
        <h1 className="text-0">{title}</h1>
        <Categories active={categorySlug} />
      </Container>
      <Container>
        <ProjectsGrid projects={projects} className="py-4" />
      </Container>
    </>
  );
}
