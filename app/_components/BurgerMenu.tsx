"use client";

import { links } from "@/helpers/nav";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { useTranslations } from "use-intl";
import Button from "./Button";
import Container from "./Container";
import SvgFlag from "./svg/SvgFlag";

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

  return (
    <nav
      className={`fixed top-0 left-0 h-full z-10 transition-all duration-300 ${
        active ? "w-full sm:w-[500px] shadow-white  shadow-xl" : "w-0 "
      } overflow-hidden`}
      {...rest}
    >
      <Container className="flex bg-black flex-col justify-between relative py-40 h-full">
        <div className="flex flex-col gap-8">
          {allLinks.map(({ href, title }, key) => {
            return (
              <Link
                href={href}
                key={`BurgerMenu: ${key}`}
                className={`font-light text-6xl text-white tracking-tighter transition-all text-center md:text-left duration-300 hover:text-gray-400 ${
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
          {locales.map((localeItem, key) => {
            return (
              <Link
                href={"/"}
                locale={localeItem}
                key={`NavLang: ${localeItem}`}
                className={`flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-200 ${
                  !active ? "opacity-0" : "opacity-100"
                }`}
                onClick={() => {
                  handleClickLink();
                }}
                style={{
                  transitionDelay: active
                    ? `${(allLinks.length + 2 + key) * 0.15}s`
                    : "0s",
                }}
              >
                <span className="w-10 rounded-full overflow-hidden">
                  <SvgFlag country={localeItem} />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
