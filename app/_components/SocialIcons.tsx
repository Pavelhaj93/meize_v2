import Link from "next/link";
import { FacebookIcon, InstagramIcon, VimeoIcon, YoutubeIcon } from "../_icons";

const icons = [
  {
    id: 1,
    name: "Vimeo",
    icon: VimeoIcon,
    href: "https://vimeo.com/user205581551",
  },
  //   {
  //     id: 2,
  //     name: "Facebook",
  //     icon: FacebookIcon,
  // 	href
  //   },
  //   {
  //     id: 3,
  //     name: "Youtube",
  //     icon: YoutubeIcon,
  //   },
  {
    id: 4,
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/meizeproduction?igsh=aXpuMTRjazBlcjM=",
  },
];

const SocialIcons = () => (
  <div className="gap-4 sm:flex hidden">
    {icons.map((icon) => {
      const Icon = icon.icon;
      return (
        <Link href={icon.href} key={icon.id}>
          <Icon className="dark:text-white dark:hover:text-gray-500 text-black hover:text-black/50 transition-colors" />
        </Link>
      );
    })}
  </div>
);

export default SocialIcons;
