// Main page.tsx

import { getAllProjects } from "@/helpers/projects";
import Nav from "../_components/Navbar";
import Reel from "../_components/Reel";
import ReelScroll from "../_components/ReelScroll";
import NoScroll from "../_components/NoScroll";

const images = [
  "/images/hayden.jpg",
  "/images/hayden2.jpg",
  "/images/hayden3.jpg",
  "/images/hayden4.jpg",
];

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col overflow-y-hidden max-h-screen">
      <Nav theme="dark" />
      {/* <NoScroll /> */}
      <main className="">
        <div className="block lg:hidden">
          {/* <ReelCarousel reels={projects} /> */}
          <ReelScroll projects={projects} />
        </div>
        <div className="lg:block hidden">
          <Reel projects={projects} images={images} />
        </div>
      </main>
    </div>
  );
}
