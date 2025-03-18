"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import imageLogoWhite from "@/public/images/logo_white.png";
import imageLogoSilver from "@/public/images/logo_silver.png";

interface LogoLinkProps {
  theme?: "dark" | "light";
  className?: string;
}

export default function LogoLink({ theme = "light", className, ...props }: LogoLinkProps) {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}`}
      className={cn('inline-flex p-3', className)}
      {...props}
    >
      <div className="relative w-[100px]">
        <Image
          src={imageLogoWhite} alt="Meize Logo"
          className={cn('transition-opacity duration-300', { 'opacity-0': theme === "light" })}
        />
        <Image
          aria-hidden
          src={imageLogoSilver} alt="Meize Logo"
          className={cn('absolute top-0 left-0 w-full transition-opacity duration-300', { 'opacity-0': theme === "dark" })}
        />
      </div>
    </Link>
  );
}
