"use client";

import Hamburger from "hamburger-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import LogoLink from "./LogoLink";
import SocialIcons from "./SocialIcons";
import NavbarSocialIcons from "./SocialIcons";

interface NavbarProps {
  theme?: "dark";
  className?: string;
}

const Navbar = ({ theme, className = "" }: NavbarProps) => {
  const t = useTranslations();

  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(
    theme === "dark" || scrolled
  );

  const handleBurgerClick = () => setBurgerActive(!burgerActive);

  useEffect(() => {
    setShowNavBackground(theme === "dark" || scrolled);
  }, [scrolled, theme]);

  return (
    <header className={theme === "dark" ? "dark" : ""}>
      <nav className={`fixed top-0 left-0 w-full z-30 ${className}`}>
        <div
          className={`relative shadow-2xl top-0 left-0 w-full transition-all duration-500 ${
            showNavBackground && !burgerActive ? "h-full" : "h-0"
          }`}
        />

        <div className="relative flex items-center justify-between sm:py-1 px-5 lg:px-10">
          <Hamburger
            toggle={handleBurgerClick}
            toggled={burgerActive}
            label={burgerActive ? "close nav" : "open nav"}
            color={theme === "dark" || burgerActive ? "white" : "black"}
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
