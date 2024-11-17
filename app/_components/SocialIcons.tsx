import { FacebookIcon, InstagramIcon, VimeoIcon, YoutubeIcon } from "../_icons";

const icons = [
	{
		id: 1,
		name: "Vimeo",
		icon: VimeoIcon,
	},
	{
		id: 2,
		name: "Facebook",
		icon: FacebookIcon,
	},
	{
		id: 3,
		name: "Youtube",
		icon: YoutubeIcon,
	},
	{
		id: 4,
		name: "Instagram",
		icon: InstagramIcon,
	},
];

const SocialIcons = () => (
	<div className="gap-4 sm:flex hidden">
		{icons.map((icon) => {
			const Icon = icon.icon;
			return (
				<Icon
					key={icon.id}
					className="dark:text-white dark:hover:text-gray-500 text-black hover:text-black/50 transition-colors"
				/>
			);
		})}
	</div>
);

export default SocialIcons;
