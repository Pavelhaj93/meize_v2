"use client";

import { socials } from "@/helpers/contacts";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Container from "./Container";
import { InstagramIcon, VimeoIcon } from "../_icons";
import { socialIcons } from "@/helpers/socialIcons";
import Link from "next/link";

export default function Footer() {
  // const lang = getLocaleStrings(useRouter().locale, "common");
  const t = useTranslations("common");

  return (
    <footer className="py-4 bg-black text-white">
      <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="text-center w-1/3 lg:text-left">
          <h2 className="text-xl font-bold">Meize Production</h2>
          <address className="not-italic mt-2">
            Hálkova 1406/2,
            <br />
            120 00 Praha, Nové Město
          </address>
        </div>

        {/* Center Section */}
        <div className="text-center w-1/3">
          <p>info@meize.cz</p>
          <p>+ 420 602 687 255</p>
          <p>+ 420 776 132 630</p>
        </div>

        {/* Right Section */}
        <div className="flex lg:justify-end justify-center w-1/3 gap-4 text-2xl">
          {socialIcons.map((icon) => {
            const Icon = icon.icon;
            return (
              <Link
                href={icon.href}
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
              >
                <Icon className="hover:text-gray-400" />
              </Link>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
