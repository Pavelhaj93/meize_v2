// TODO: maybe add links here
export type NavLink = {
  title: string;
  href: string;
};

export type NavLinks = {
  left: NavLink[];
  right: NavLink[];
};

export const links: NavLinks = {
  left: [
    {
      title: "pages.projects",
      href: "/projects",
    },
  ],
  right: [
    {
      title: "pages.contact",
      href: "/contact",
    },
  ],
};
