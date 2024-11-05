"use client";

import { useCallback, useEffect, useState } from "react";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoLink from "./LogoLink";
import NavLink from "./NavLink";
import { useLocale, useTranslations } from "next-intl";
import { links } from "@/helpers/nav";
import { getScrolledFromTop } from "@/helpers/scroll";

const Nav = ({ theme = "black", className = "" }) => {
  const t = useTranslations();

  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(
    theme === "black" || scrolled
  );

  const themeClasses = theme === "white" ? "text-white" : "text-black";

  const handleScroll = () => setScrolled(getScrolledFromTop() > 50);

  const handleBurgerClick = () => setBurgerActive(!burgerActive);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 640 && burgerActive) {
      setBurgerActive(false);
    }
  }, [burgerActive]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setShowNavBackground(theme === "black" || scrolled);
  }, [burgerActive, scrolled, theme]);

  const locale = useLocale();

  return (
    <header>
      <nav className={`fixed top-0 left-0 w-full z-30 ${className}`}>
        <div
          className={`absolute shadow-2xl top-0 left-0 w-full bg-white transition-all duration-500 ${
            showNavBackground && !burgerActive ? "h-full" : "h-0"
          }`}
        />

        <Container className="relative flex items-center justify-between sm:py-1">
          <div className="flex-1 hidden sm:flex items-center gap-16">
            {links.left.map(({ href, title }, key) => {
              return (
                <NavLink
                  key={`NavLinksRight:${key}`}
                  href={href}
                  className={showNavBackground ? "text-black" : themeClasses}
                >
                  {t(title)}
                </NavLink>
              );
            })}
          </div>
          <div
            className={`flex-1 sm:flex-none text-center sm:text-left transition-colors duration-300 ${
              showNavBackground || burgerActive ? "text-black" : themeClasses
            }`}
          >
            <LogoLink
            // logoColor={showNavBackground || burgerActive ? "black" : "white"}
            />
          </div>

          <div className="flex-1 hidden sm:flex  items-center gap-16 justify-end">
            {links.right.map(({ href, title }, key) => {
              return (
                <NavLink
                  key={`NavLinksRight:${key}`}
                  href={href}
                  className={showNavBackground ? "text-black" : themeClasses}
                >
                  {t(title)}
                </NavLink>
              );
            })}

            <LanguageSwitcher
              className={showNavBackground ? "text-black" : themeClasses}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 block sm:hidden text-right text-0">
            <BurgerButton
              onClick={handleBurgerClick}
              active={burgerActive}
              theme={theme}
              scrolled={scrolled}
            />
          </div>
        </Container>
      </nav>
      <BurgerMenu active={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  );
};

export default Nav;
