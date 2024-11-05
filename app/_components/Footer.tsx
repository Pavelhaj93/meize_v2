"use client";

import Container from "./Container";
import Button from "./Button";
import { contacts, socials } from "@/helpers/contacts";
import { useRouter } from "next/router";
import FormNewsletter from "./FormNewsletter";
import { useTranslations } from "next-intl";

export default function Footer() {
  // const lang = getLocaleStrings(useRouter().locale, "common");
  const t = useTranslations("common");

  return (
    <footer className="pt-24 pb-6">
      <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-20">
        <div className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:justify-center lg:justify-between items-center md:items-stretch lg:items-center xl:items-stretch gap-4">
          <Button
            href={contacts.email.href}
            theme="primary"
            size="custom"
            textSize="big"
            padding="custom"
            className="p-2.5 max-w-none md:max-w-[300px] lg:max-w-none xl:max-w-[300px]"
          >
            {t("ctaButton")}
          </Button>
          {/*<div className="flex-1 w-full">*/}
          {/*    <FormNewsletter/>*/}
          {/*</div>*/}
        </div>

        {/*<div*/}
        {/*    className="flex flex-wrap lg:flex-nowrap justify-center sm:justify-start items-center gap-y-4 gap-x-10 md:gap-4 xl:gap-10">*/}
        {/*    {socials.map(({href, title}, key) => {*/}
        {/*        return (*/}
        {/*            <a href={href}*/}
        {/*               target="_blank"*/}
        {/*               rel="nofollow noreferrer"*/}
        {/*               className="uppercase font-extrabold tracking-tight2 text-lg mouse-hover:text-primary transition-colors duration-300"*/}
        {/*               key={`FooterSocial: ${key}`}*/}
        {/*            >*/}
        {/*                {title}*/}
        {/*            </a>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</div>*/}
      </Container>
    </footer>
  );
}
