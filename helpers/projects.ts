import imageAngusFarm from "../public/data/angus-farm/thumbnail.jpg";
import imageAnnaVonLipa from "../public/data/anna-von-lipa/thumbnail.jpg";
import imageSawsane from "../public/data/sawsane/thumbnail.jpg";
import imageTrezor from "../public/data/trezor/thumbnail.jpg";
import imageWereNext from "../public/data/were-next/thumbnail.jpg";

import imageAnnaVonLipaScreen01 from "../public/data/anna-von-lipa/screens/01.jpg";
import imageAnnaVonLipaScreen02 from "../public/data/anna-von-lipa/screens/02.jpg";
import imageAnnaVonLipaScreen03 from "../public/data/anna-von-lipa/screens/03.jpg";
import imageAnnaVonLipaScreen04 from "../public/data/anna-von-lipa/screens/04.jpg";
import imageAnnaVonLipaScreen05 from "../public/data/anna-von-lipa/screens/05.jpg";
import imageAnnaVonLipaScreen06 from "../public/data/anna-von-lipa/screens/06.jpg";
import imageAnnaVonLipaScreen07 from "../public/data/anna-von-lipa/screens/07.jpg";
import imageAnnaVonLipaScreen08 from "../public/data/anna-von-lipa/screens/08.jpg";
import imageAnnaVonLipaScreen09 from "../public/data/anna-von-lipa/screens/09.jpg";

import imageTrezorScreen01 from "../public/data/trezor/screens/01.jpg";
import imageTrezorScreen02 from "../public/data/trezor/screens/02.jpg";
import imageTrezorScreen03 from "../public/data/trezor/screens/03.jpg";

import imageKlausTimberScreen01 from "../public/data/klaus-timber/screens/01.jpg";
import imageKlausTimberScreen02 from "../public/data/klaus-timber/screens/02.jpg";
import imageKlausTimberScreen03 from "../public/data/klaus-timber/screens/03.jpg";
import imageKlausTimberScreen04 from "../public/data/klaus-timber/screens/04.jpg";
import imageKlausTimberScreen05 from "../public/data/klaus-timber/screens/05.jpg";
import imageKlausTimberScreen06 from "../public/data/klaus-timber/screens/06.jpg";
import imageKlausTimberScreen07 from "../public/data/klaus-timber/screens/07.jpg";
import imageKlausTimberScreen08 from "../public/data/klaus-timber/screens/08.jpg";
import imageKlausTimberScreen09 from "../public/data/klaus-timber/screens/09.jpg";

import imageWereNextScreen01 from "../public/data/were-next/screens/01.jpg";
import imageWereNextScreen02 from "../public/data/were-next/screens/02.jpg";
import imageWereNextScreen03 from "../public/data/were-next/screens/03.jpg";
import imageWereNextScreen04 from "../public/data/were-next/screens/04.jpg";
import imageWereNextScreen05 from "../public/data/were-next/screens/05.jpg";
import imageWereNextScreen06 from "../public/data/were-next/screens/06.jpg";
import imageWereNextScreen07 from "../public/data/were-next/screens/07.jpg";
import imageWereNextScreen08 from "../public/data/were-next/screens/08.jpg";
import imageWereNextScreen09 from "../public/data/were-next/screens/09.jpg";

import imageAngusFarmScreen01 from "../public/data/angus-farm/screens/01.jpg";
import imageAngusFarmScreen02 from "../public/data/angus-farm/screens/02.jpg";
import imageAngusFarmScreen03 from "../public/data/angus-farm/screens/03.jpg";
import imageAngusFarmScreen04 from "../public/data/angus-farm/screens/04.jpg";
import imageAngusFarmScreen05 from "../public/data/angus-farm/screens/05.jpg";
import imageAngusFarmScreen06 from "../public/data/angus-farm/screens/06.jpg";
import imageAngusFarmScreen07 from "../public/data/angus-farm/screens/07.jpg";
import imageAngusFarmScreen08 from "../public/data/angus-farm/screens/08.jpg";
import imageAngusFarmScreen09 from "../public/data/angus-farm/screens/09.jpg";

import imageSawsaneScreen01 from "../public/data/sawsane/screens/01.jpg";
import imageSawsaneScreen02 from "../public/data/sawsane/screens/02.jpg";
import imageSawsaneScreen03 from "../public/data/sawsane/screens/03.jpg";
import imageSawsaneScreen04 from "../public/data/sawsane/screens/04.jpg";
import imageSawsaneScreen05 from "../public/data/sawsane/screens/05.jpg";
import imageSawsaneScreen06 from "../public/data/sawsane/screens/06.jpg";
import imageSawsaneScreen07 from "../public/data/sawsane/screens/07.jpg";
import imageSawsaneScreen08 from "../public/data/sawsane/screens/08.jpg";
import imageSawsaneScreen09 from "../public/data/sawsane/screens/09.jpg";

import gif1AF from "../public/data/angus-farm/gifs/gif1-AF.gif";
import gif2AF from "../public/data/angus-farm/gifs/gif2-AF.gif";
import gif3AF from "../public/data/angus-farm/gifs/gif3-AF.gif";
import gif4AF from "../public/data/angus-farm/gifs/gif4-AF.gif";

import type { StaticImageData } from "next/image";
import gif1 from "../public/data/were-next/gifs/gif1.gif";
import gif2 from "../public/data/were-next/gifs/gif2.gif";
import gif3 from "../public/data/were-next/gifs/gif3.gif";

export type Project = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  thumbnailNext: StaticImageData;
  videos: {
    short: string;
    full: string | null;
    vimeoId?: string;
    vimeoId1?: string;
    vimeoId2?: string;
    vimeoId3?: string;
  };
  categories: string[];
  screens: string[] | StaticImageData[];
  gifs?: StaticImageData[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Anna von Lipa",
    slug: "anna-von-lipa",
    thumbnail: "/data/anna-von-lipa/thumbnail.jpg",
    thumbnailNext: imageAnnaVonLipa,
    videos: {
      short: "/data/anna-von-lipa/anna-von-lipa_short.mp4",
      full: "/data/anna-von-lipa/anna-von-lipa_full.mp4",
      vimeoId: "891018959",
    },
    categories: ["creative"],
    screens: [
      imageAnnaVonLipaScreen01,
      imageAnnaVonLipaScreen02,
      imageAnnaVonLipaScreen03,
      imageAnnaVonLipaScreen04,
      imageAnnaVonLipaScreen05,
      imageAnnaVonLipaScreen06,
      imageAnnaVonLipaScreen07,
      imageAnnaVonLipaScreen08,
      imageAnnaVonLipaScreen09,
    ],
  },
  {
    id: 2,
    title: "Sawsane",
    slug: "sawsane",
    thumbnail: "/data/sawsane/thumbnail.jpg",
    thumbnailNext: imageSawsane,
    videos: {
      short: "/data/sawsane/sawsane_short.mp4",
      full: null,
    },
    categories: ["creative", "commercial"],
    screens: [
      imageSawsaneScreen01,
      imageSawsaneScreen02,
      imageSawsaneScreen03,
      imageSawsaneScreen04,
      imageSawsaneScreen05,
      imageSawsaneScreen06,
      imageSawsaneScreen07,
      imageSawsaneScreen08,
      imageSawsaneScreen09,
    ],
  },
  {
    id: 3,
    title: "Trezor",
    slug: "trezor",
    thumbnail: "/data/trezor/thumbnail.jpg",
    thumbnailNext: imageTrezor,
    videos: {
      short: "/data/trezor/trezor_short.mp4",
      full: "/data/trezor/trezor_full.mp4",
      vimeoId: "892186319",
    },
    categories: ["production", "postproduction"],
    screens: [imageTrezorScreen01, imageTrezorScreen02, imageTrezorScreen03],
  },
  {
    id: 4,
    title: "Angus Farm",
    slug: "angus-farm",
    thumbnail: "/data/angus-farm/thumbnail.jpg",
    thumbnailNext: imageAngusFarm,
    videos: {
      short: "/data/angus-farm/angus-farm_short.mp4",
      full: "/data/angus-farm/angus-farm_full.mp4",
      vimeoId1: "891063117",
      vimeoId2: "887333055",
      vimeoId3: "891028950",
    },
    categories: ["creative", "commercial"],
    screens: [
      imageAngusFarmScreen01,
      imageAngusFarmScreen02,
      imageAngusFarmScreen03,
      imageAngusFarmScreen04,
      imageAngusFarmScreen05,
      imageAngusFarmScreen06,
      imageAngusFarmScreen07,
      imageAngusFarmScreen08,
      imageAngusFarmScreen09,
    ],
    gifs: [gif1AF, gif2AF, gif3AF, gif4AF],
  },
  {
    id: 5,
    title: "Klaus Timber",
    slug: "klaus-timber",
    thumbnail: "/data/klaus-timber/screens/05.jpg",
    thumbnailNext: imageKlausTimberScreen05,
    videos: {
      short: "/data/klaus-timber/klaus-timber_short.mp4",
      full: "/data/klaus-timber/klaus-timber_full.mp4",
      vimeoId: "892875702",
    },
    categories: ["commercial"],
    screens: [
      imageKlausTimberScreen01,
      imageKlausTimberScreen02,
      imageKlausTimberScreen03,
      imageKlausTimberScreen04,
      imageKlausTimberScreen05,
      imageKlausTimberScreen06,
      imageKlausTimberScreen07,
      imageKlausTimberScreen08,
      imageKlausTimberScreen09,
    ],
  },
  {
    id: 6,
    title: "We're Next",
    slug: "were-next",
    thumbnail: "/data/were-next/thumbnail.jpg",
    thumbnailNext: imageWereNext,
    videos: {
      short: "/data/were-next/were-next_short.mp4",
      full: "/data/were-next/were-next_full.mp4",
      vimeoId: "892197628",
    },
    categories: ["production", "postproduction"],
    screens: [
      imageWereNextScreen01,
      imageWereNextScreen02,
      imageWereNextScreen03,
      imageWereNextScreen04,
      imageWereNextScreen05,
      imageWereNextScreen06,
      imageWereNextScreen07,
      imageWereNextScreen08,
      imageWereNextScreen09,
    ],
    gifs: [gif1, gif2, gif3],
  },
];

export const getAllProjectsForDynamicRoutes = () => {
  return projects.filter(
    (project) =>
      project.slug !== "angus-farm" &&
      project.slug !== "were-next" &&
      project.slug !== "sawsane"
  );
};

export const getAllProjects = () => {
  return projects;
};

export const getFeaturedProjects = () => {
  return projects.slice(0, 3);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects
    .filter((project) => project.categories.includes(category))
    .reverse();
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectByIds = (ids: number[]): Project[] => {
  return ids.map((id) => getProjectById(id) as Project);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsInReel = () => {
  return getProjectByIds([1, 3, 4]);
};

export const getAllCategories = () => {
  const categories: string[] = [];
  for (const project of projects) {
    for (const category of project.categories) {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    }
  }
  return categories;
};
