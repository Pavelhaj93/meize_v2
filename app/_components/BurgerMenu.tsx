"use client";

import { links } from "@/helpers/nav";
import { socialIcons } from "@/helpers/socialIcons";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "use-intl";

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
	const locale = useLocale();
	const pathname = usePathname();

	const getLocalizedPath = (currentPath: string, targetLocale: string) => {
		const pathSegments = currentPath.split("/").filter(Boolean); // Split and remove empty segments
		if (locales.includes(pathSegments[0] as "cs" | "en")) {
			// Replace existing locale
			pathSegments[0] = targetLocale;
		} else {
			// Add locale to the beginning if not present
			pathSegments.unshift(targetLocale);
		}
		return `/${pathSegments.join("/")}`;
	};

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 h-full z-10 transition-all duration-300 overflow-hidden",
				className,
				{
					"w-full sm:w-[300px] shadow-white  shadow-xl": active,
					"w-0": !active,
				},
			)}
			{...rest}
		>
			<section className="flex bg-black flex-col justify-between relative px-8 pt-40 pb-40 lg:pb-20 lg:px-12 h-full">
				<div className="flex flex-col gap-8">
					{allLinks.map(({ id, href, title }, key) => {
						return (
							<Link
								href={href}
								key={`BurgerMenu: ${id}`}
								className={`font-light text-4xl text-white transition-all text-center sm:text-left duration-300 hover:text-gray-400 ${
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
				<div className="flex flex-col gap-8">
					<div
						className={
							"mt-10 flex items-center text-2xl justify-center md:justify-start gap-10"
						}
					>
						<Link
							href={getLocalizedPath(pathname, locale === "en" ? "cs" : "en")}
							locale={false}
							key={`NavLang: ${locale}`}
							onClick={() => {
								handleClickLink();
							}}
						>
							<span className="text-white hover:text-gray-500 transition-colors">
								{locale === "en" ? "CZ" : "EN"}
							</span>
						</Link>
					</div>
					<div className="flex gap-4 justify-center md:justify-start">
						{socialIcons.map((icon) => {
							const Icon = icon.icon;
							return (
								<Link href={icon.href} key={icon.id}>
									<Icon
										className="text-white hover:text-gray-500 transition-colors size-8"
										size="custom"
									/>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</nav>
	);
}
