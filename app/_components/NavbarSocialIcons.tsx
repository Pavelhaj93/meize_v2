import { socialIcons } from "@/helpers/socialIcons";
import Link from "next/link";

const NavbarSocialIcons = () => (
  <div className="gap-4 sm:flex hidden">
    {socialIcons.map((icon) => {
      const Icon = icon.icon;
      return (
        <Link href={icon.href} key={icon.id}>
          <Icon className="dark:text-white dark:hover:text-gray-500 text-black hover:text-black/50 transition-colors" />
        </Link>
      );
    })}
  </div>
);

export default NavbarSocialIcons;
