"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
  theme?: "dark";
}

export default function LogoLink({ theme, ...props }: LogoLinkProps) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}`} {...props}>
      {/* <SvgLogo className="dark:fill-white h-20 w-24 dark:hover:text-gray-500 fill-black hover:fill-gray-500 transition-colors" /> */}
      <Image
        src={`/images/MEIZE_${theme === "dark" ? "white" : "silver"}.png`}
        width={120}
        height={120}
        alt="Meize Logo"
      />
    </Link>
  );
}
