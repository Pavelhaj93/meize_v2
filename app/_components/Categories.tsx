import { getLocaleStrings } from "@/helpers/languages";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Categories({ active = "all" }) {
  const categories = getLocaleStrings(useRouter().locale, "categories");
  const t = useTranslations("categories");

  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {/* {Object.keys(categories).map((slug) => {
        return (
          <Link
            href={slug === "all" ? "/projects" : "/projects/category/" + slug}
            key={`Category: ${slug}`}
            className={`inline-flex font-extrabold uppercase border-b-2 ${
              active === slug
                ? "border-current"
                : "border-transparent mouse-hover:text-primary transition-all duration-300"
            }`}
          >
            {categories[slug]}
          </Link>
        );
      })} */}
    </div>
  );
}
