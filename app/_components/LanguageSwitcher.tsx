import { routing } from "@/i18n/routing";
import Link from "next/link";

export default function LanguageSwitcher({ className = "" }) {
	return (
		<div
			className={`relative cursor-pointer transition-all uppercase font-bold 
       `}
		>
			{/* {locales.map((localeItem, index) => {
        return (
          <Link
            href={asPath}
            locale={localeItem}
            key={`NavLang: ${localeItem}`}
            className={`${className}`}
            onClick={() => setLocaleCookies(localeItem)}
          >
            <span className="hover:text-primary transition-colors duration-200">
              {lang.common[localeItem]}
            </span>
            {index < 1 && <span className="mx-1"> / </span>}
          </Link>
        );
      })} */}
		</div>
	);
}
