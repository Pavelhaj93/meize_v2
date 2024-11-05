import { getFeaturedProjects, getProjectsInReel } from "@/helpers/projects";
import ReelCarousel from "../_components/ReelCarousel";
import FeaturedProjects from "../_components/FeaturedProjects";
import Reel from "../_components/Reel";
import { useTranslations } from "next-intl";

const images = [
  "/images/hayden.jpg",
  "/images/hayden2.jpg",
  "/images/hayden3.jpg",
  "/images/hayden4.jpg",
];

const reels = getProjectsInReel();

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  const projects = getFeaturedProjects();
  const t = useTranslations();
  return (
    <>
      <div className="block lg:hidden">
        <ReelCarousel reels={reels} />
      </div>
      <div className="hidden lg:block">
        <Reel reels={reels} images={images} />
      </div>

      <FeaturedProjects projects={projects} className="py-4" />
    </>
  );
}
