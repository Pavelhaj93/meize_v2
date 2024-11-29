import { socialIcons } from "@/helpers/socialIcons";
import Link from "next/link";

const SocialIcons = () => (
  <div className="gap-4 flex">
    {socialIcons.map((icon) => {
      const Icon = icon.icon;
      return (
        <Link href={icon.href} key={icon.id}>
          <Icon className="dark:text-white dark:hover:text-gray-500 text-black hover:text-black/50 transition-colors size-9" />
        </Link>
      );
    })}
  </div>
);

export default SocialIcons;
