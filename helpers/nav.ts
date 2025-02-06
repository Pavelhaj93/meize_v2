// TODO: maybe add links here
export type NavLink = {
	id: number;
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
			id: 1,
			title: "pages.projects",
			href: "/projects",
		},
	],
	right: [
		{
			id: 2,
			title: "pages.contact",
			href: "/contact",
		},
	],
};
