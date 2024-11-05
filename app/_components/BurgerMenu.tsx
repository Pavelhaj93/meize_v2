"use client";

import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import { links } from "@/helpers/nav";
import SvgFlag from "./svg/SvgFlag";
import { useTranslations } from "use-intl";
import { routing } from "@/i18n/routing";

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
      className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-all duration-500 ${
        active ? "" : "-translate-y-full"
      } ${className}`}
      {...rest}
    >
      <Container className="flex flex-col justify-center items-center gap-8 h-full">
        {allLinks.map(({ href, title }, key) => {
          return (
            <Link
              href={href}
              key={`BurgerMenu: ${key}`}
              className={`uppercase font-bold text-3xl tracking-wider mouse-hover:text-primary ${
                !active ? "opacity-0 -translate-y-1/2" : ""
              }`}
              style={{
                transition: active
                  ? `opacity 0.3s ease ${
                      (key + 1) * 0.15
                    }s, transform 0.3s ease ${
                      (key + 1) * 0.15
                    }s, color 0.3s ease`
                  : "opacity 0.3s ease, transform 0s ease 0.3s",
              }}
              onClick={handleClickLink}
            >
              {t(title)}
            </Link>
          );
        })}
        <div className="mt-10 w-full">
          <Button
            href="/contact"
            theme="primary"
            size="custom"
            textSize="big"
            padding="custom"
            className={`p-2.5 ${!active ? "opacity-0 -translate-y-1/2" : ""}`}
            style={{
              transition: active
                ? `opacity 0.3s ease ${
                    (allLinks.length + 1) * 0.15
                  }s, transform 0.3s ease ${
                    (allLinks.length + 1) * 0.15
                  }s, color 0.3s ease, background 0.3s ease`
                : "opacity 0.3s ease, transform 0s ease 0.3s",
            }}
            onClick={handleClickLink}
          >
            Get In Touch
          </Button>
        </div>
        <div className={`mt-10 flex items-center gap-10`}>
          {locales.map((localeItem, key) => {
            return (
              <Link
                // href={asPath}
                href={"/"}
                locale={localeItem}
                key={`NavLang: ${localeItem}`}
                className={`flex items-center gap-2 text-white hover:text-white/60 transition-colors duration-200 ${
                  !active ? "opacity-0 -translate-y-1/2" : ""
                }`}
                onClick={() => {
                  // setLocaleCookies(localeItem);
                  handleClickLink();
                }}
                style={{
                  transition: active
                    ? `opacity 0.3s ease ${
                        (allLinks.length + 2 + key) * 0.15
                      }s, transform 0.3s ease ${
                        (allLinks.length + 2 + key) * 0.15
                      }s, color 0.3s ease, background 0.3s ease`
                    : "opacity 0.3s ease, transform 0s ease 0.3s",
                }}
              >
                <span className="w-12 rounded-full overflow-hidden">
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
