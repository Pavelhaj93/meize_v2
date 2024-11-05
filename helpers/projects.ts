export type Project = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  videos: {
    short: string;
    full: string | null;
    vimeoId?: string;
    vimeoId1?: string;
    vimeoId2?: string;
    vimeoId3?: string;
  };
  categories: string[];
  screens: string[];
  gifs?: string[];
};

const projects = [
  {
    id: 1,
    title: "Anna von Lipa",
    slug: "anna-von-lipa",
    thumbnail: "/projects/anna-von-lipa/thumbnail.jpg",
    videos: {
      short: "/projects/anna-von-lipa/anna-von-lipa_short.mp4",
      full: "/projects/anna-von-lipa/anna-von-lipa_full.mp4",
      vimeoId: "891018959",
    },
    categories: ["creative"],
    screens: [
      "/projects/anna-von-lipa/screens/01.jpg",
      "/projects/anna-von-lipa/screens/02.jpg",
      "/projects/anna-von-lipa/screens/03.jpg",
      "/projects/anna-von-lipa/screens/04.jpg",
      "/projects/anna-von-lipa/screens/05.jpg",
      "/projects/anna-von-lipa/screens/06.jpg",
      "/projects/anna-von-lipa/screens/07.jpg",
      "/projects/anna-von-lipa/screens/08.jpg",
      "/projects/anna-von-lipa/screens/09.jpg",
    ],
  },
  {
    id: 2,
    title: "Sawsane",
    slug: "sawsane",
    thumbnail: "/projects/sawsane/thumbnail.jpg",
    videos: {
      short: "/projects/sawsane/sawsane_short.mp4",
      full: null,
    },
    categories: ["creative", "commercial"],
    screens: [
      "/projects/sawsane/screens/01.jpg",
      "/projects/sawsane/screens/02.jpg",
      "/projects/sawsane/screens/03.jpg",
      "/projects/sawsane/screens/04.jpg",
      "/projects/sawsane/screens/05.jpg",
      "/projects/sawsane/screens/06.jpg",
      "/projects/sawsane/screens/07.jpg",
      "/projects/sawsane/screens/08.jpg",
      "/projects/sawsane/screens/09.jpg",
    ],
  },
  {
    id: 3,
    title: "Trezor",
    slug: "trezor",
    thumbnail: "/projects/trezor/thumbnail.jpg",
    videos: {
      short: "/projects/trezor/trezor_short.mp4",
      full: "/projects/trezor/trezor_full.mp4",
      vimeoId: "892186319",
    },
    categories: ["production", "postproduction"],
    screens: [
      "/projects/trezor/screens/01.jpg",
      "/projects/trezor/screens/02.jpg",
      "/projects/trezor/screens/03.jpg",
    ],
  },
  {
    id: 4,
    title: "Angus Farm",
    slug: "angus-farm",
    thumbnail: "/projects/angus-farm/thumbnail.jpg",
    videos: {
      short: "/projects/angus-farm/angus-farm_short.mp4",
      full: "/projects/angus-farm/angus-farm_full.mp4",
      vimeoId1: "891063117",
      vimeoId2: "887333055",
      vimeoId3: "891028950",
    },
    categories: ["creative", "commercial"],
    screens: [
      "/projects/angus-farm/screens/01.jpg",
      "/projects/angus-farm/screens/02.jpg",
      "/projects/angus-farm/screens/03.jpg",
      "/projects/angus-farm/screens/04.jpg",
      "/projects/angus-farm/screens/05.jpg",
      "/projects/angus-farm/screens/06.jpg",
      "/projects/angus-farm/screens/07.jpg",
      "/projects/angus-farm/screens/08.jpg",
      "/projects/angus-farm/screens/09.jpg",
    ],
    gifs: [
      "/projects/angus-farm/gifs/gif1-AF.gif",
      "/projects/angus-farm/gifs/gif2-AF.gif",
      "/projects/angus-farm/gifs/gif3-AF.gif",
      "/projects/angus-farm/gifs/gif4-AF.gif",
    ],
  },
  {
    id: 5,
    title: "Klaus Timber",
    slug: "klaus-timber",
    thumbnail: "/projects/klaus-timber/thumbnail.jpg",
    videos: {
      short: "/projects/klaus-timber/klaus-timber_short.mp4",
      full: "/projects/klaus-timber/klaus-timber_full.mp4",
      vimeoId: "892875702",
    },
    categories: ["commercial"],
    screens: [
      "/projects/klaus-timber/screens/01.jpg",
      "/projects/klaus-timber/screens/02.jpg",
      "/projects/klaus-timber/screens/03.jpg",
      "/projects/klaus-timber/screens/04.jpg",
      "/projects/klaus-timber/screens/05.jpg",
      "/projects/klaus-timber/screens/06.jpg",
      "/projects/klaus-timber/screens/07.jpg",
      "/projects/klaus-timber/screens/08.jpg",
      "/projects/klaus-timber/screens/09.jpg",
    ],
  },
  {
    id: 6,
    title: "We're Next",
    slug: "were-next",
    thumbnail: "/projects/were-next/thumbnail.jpg",
    videos: {
      short: "/projects/were-next/were-next_short.mp4",
      full: "/projects/were-next/were-next_full.mp4",
      vimeoId: "892197628",
    },
    categories: ["production", "postproduction"],
    screens: [
      "/projects/were-next/screens/01.jpg",
      "/projects/were-next/screens/02.jpg",
      "/projects/were-next/screens/03.jpg",
      "/projects/were-next/screens/04.jpg",
      "/projects/were-next/screens/05.jpg",
      "/projects/were-next/screens/06.jpg",
      "/projects/were-next/screens/07.jpg",
      "/projects/were-next/screens/08.jpg",
      "/projects/were-next/screens/09.jpg",
    ],
    gifs: [
      "/projects/were-next/gifs/gif1.gif",
      "/projects/were-next/gifs/gif2.gif",
      "/projects/were-next/gifs/gif3.gif",
    ],
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
  projects.forEach((project) => {
    project.categories.forEach((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  });
  return categories;
};
