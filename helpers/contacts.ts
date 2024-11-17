export type Contacts = {
	email: Contact;
	phone: Contact;
};

export type Contact = {
	href: string;
	title: string;
};

export type Social = {
	title: string;
	href: string;
};

export const contacts: Contacts = {
	email: {
		href: "mailto:info@meize.cz",
		title: "info@meize.cz",
	},
	phone: {
		href: "tel:+420776132630",
		title: "+420 776 132 630",
	},
};

export const socials: Social[] = [
	{
		title: "Instagram",
		href: "https://instagram.com",
	},
	{
		title: "Vimeo",
		href: "https://vimeo.com",
	},
	{
		title: "Facebook",
		href: "https://facebook.com",
	},
	{
		title: "LinkedIn",
		href: "https://linkedin.com",
	},
	{
		title: "TikTok",
		href: "https://tiktok.com",
	},
];
