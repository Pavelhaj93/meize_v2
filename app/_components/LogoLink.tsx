"use client";

import Link from "next/link";
import SvgLogo from "./svg/SvgLogo";
import { useLocale } from "next-intl";

export default function LogoLink({ ...rest }) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}`} {...rest}>
      <SvgLogo className="dark:fill-white h-20 w-24 dark:hover:text-gray-500 fill-black hover:fill-gray-500 transition-colors" />
    </Link>
  );
}
