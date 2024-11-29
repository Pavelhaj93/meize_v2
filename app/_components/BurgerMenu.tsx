"use client";

import { links } from "@/helpers/nav";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { useLocale, useTranslations } from "use-intl";
import { usePathname } from "next/navigation";

const allLinks = [...links.left, ...links.right];

interface BurgerMenuProps {
  className?: string;
  active: boolean;
  setBurgerActive: (active: boolean) => void;
}

export default function BurgerMenu({
  className = "",
  active,
  setBurgerActive,
  ...rest
}: BurgerMenuProps) {
  const handleClickLink = () => setBurgerActive(false);
  const t = useTranslations();
  const locales = routing.locales;
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (currentPath: string, targetLocale: string) => {
    const pathSegments = currentPath.split("/").filter(Boolean); // Split and remove empty segments
    if (locales.includes(pathSegments[0] as "cs" | "en")) {
      // Replace existing locale
      pathSegments[0] = targetLocale;
    } else {
      // Add locale to the beginning if not present
      pathSegments.unshift(targetLocale);
    }
    return `/${pathSegments.join("/")}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-full z-10 transition-all duration-300 ${
        active ? "w-full sm:w-[300px] shadow-white  shadow-xl" : "w-0 "
      } overflow-hidden`}
      {...rest}
    >
      <section className="flex bg-black flex-col justify-between relative px-8 py-40 lg:px-12 h-full">
        <div className="flex flex-col gap-8">
          {allLinks.map(({ id, href, title }, key) => {
            return (
              <Link
                href={href}
                key={`BurgerMenu: ${id}`}
                className={`font-light text-4xl text-white transition-all text-center sm:text-left duration-300 hover:text-gray-400 ${
                  !active ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  transitionDelay: active ? `${(key + 2) * 0.05}s` : "0s",
                }}
                onClick={handleClickLink}
              >
                {t(title)}
              </Link>
            );
          })}
        </div>
        <div
          className={
            "mt-10 flex items-center justify-center md:justify-start gap-10"
          }
        >
          <Link
            href={getLocalizedPath(pathname, locale === "en" ? "cs" : "en")}
            locale={false}
            key={`NavLang: ${locale}`}
            onClick={() => {
              handleClickLink();
            }}
          >
            <span className="text-white hover:text-gray-500 transition-colors">
              {locale === "en" ? "CZ" : "EN"}
            </span>
          </Link>
        </div>
      </section>
    </nav>
  );
}
