"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
  theme?: "dark";
  className?: string;
}

export default function LogoLink({ theme, className, ...props }: LogoLinkProps) {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}`}
      className={cn('inline-flex p-3', className)}
      {...props}
    >
      <Image
        src={`/images/logo_${theme === "dark" ? "white" : "silver"}.png`}
        width={90}
        height={90}
        alt="Meize Logo"
      />
    </Link>
  );
}
