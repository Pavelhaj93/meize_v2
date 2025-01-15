"use client";

import Link from "next/link";
import SvgLogo from "./svg/SvgLogo";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LogoLink({ ...rest }) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}`} {...rest}>
      {/* <SvgLogo className="dark:fill-white h-20 w-24 dark:hover:text-gray-500 fill-black hover:fill-gray-500 transition-colors" /> */}
      <Image
        src="/images/MEIZE_silver.png"
        width={120}
        height={120}
        alt="Meize Logo"
      />
    </Link>
  );
}
