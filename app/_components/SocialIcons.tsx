import { socialIcons } from "@/helpers/socialIcons";
import Link from "next/link";

const SocialIcons = () => (
	<div className="gap-4 flex">
		{socialIcons.map((icon) => {
			const Icon = icon.icon;
			return (
				<Link href={icon.href} key={icon.id}>
					<Icon className="dark:text-white text-black hover:opacity-60 transition-opacity duration-300 size-6" />
				</Link>
			);
		})}
	</div>
);

export default SocialIcons;
