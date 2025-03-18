"use client";

import Hamburger from "hamburger-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import LogoLink from "./LogoLink";
import { cn } from "@/lib/utils";
import { usePathname } from "@/i18n/routing";

interface NavbarProps {
  theme?: "dark";
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const t = useTranslations();
  const pathname = usePathname();

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [burgerActive, setBurgerActive] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);


  const handleBurgerClick = () => setBurgerActive(!burgerActive);

  useEffect(() => {
    setShowNavBackground(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setVisible(false);
      } else {
        // Scrolling up, show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const lightPaths = ["/projects"];

    setTheme(lightPaths.includes(pathname) ? "light" : "dark");
  }, [pathname]);

  return (
    <header className={theme === "dark" ? "dark" : ""}>
      <nav
        className={cn('fixed top-0 left-0 w-full z-30 transition-all duration-500', {
          '-translate-y-full': !visible && !burgerActive,
        }, className)}
      >
        <div className={cn('relative shadow-2xl top-0 left-0 w-full transition-all duration-500', {
          'h-full': showNavBackground && !burgerActive,
          'h-0': !showNavBackground || burgerActive,
        })} />

        <div className="relative flex items-center justify-between sm:py-1 px-5 lg:px-10">
          <Hamburger
            toggle={handleBurgerClick}
            toggled={burgerActive}
            label={burgerActive ? "close nav" : "open nav"}
            color={(theme === "dark" || burgerActive) ? "white" : "black"}
          />
          <LogoLink theme={theme} />
          <div className="w-12 sm:w-auto" />
        </div>
      </nav>
      <BurgerMenu active={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  );
};

export default Navbar;
