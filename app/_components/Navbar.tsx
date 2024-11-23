"use client";

import { getScrolledFromTop } from "@/helpers/scroll";
import Hamburger from "hamburger-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import LogoLink from "./LogoLink";
import SocialIcons from "./SocialIcons";

const Navbar = ({ theme = "black", className = "" }) => {
  const t = useTranslations();

  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [showNavBackground, setShowNavBackground] = useState(
    theme === "black" || scrolled
  );

  // const handleScroll = () => setScrolled(getScrolledFromTop() > 50);

  const handleBurgerClick = () => setBurgerActive(!burgerActive);

  useEffect(() => {
    setShowNavBackground(theme === "black" || scrolled);
  }, [burgerActive, scrolled, theme]);

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
          <LogoLink />
          <div className="w-12 sm:w-auto">
            <SocialIcons />
          </div>
        </div>
      </nav>
      <BurgerMenu active={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  );
};

export default Navbar;
