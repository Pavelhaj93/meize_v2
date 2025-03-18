"use client";

import { socials } from "@/helpers/contacts";
import { socialIcons } from "@/helpers/socialIcons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { InstagramIcon, VimeoIcon } from "../_icons";
import Container from "./Container";
import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
	const pathname = usePathname();
	const [theme, setTheme] = useState<"dark" | "light">("light");
	const t = useTranslations("common");

	useEffect(() => {
		const darkPaths = ["/projects"];
		setTheme(darkPaths.includes(pathname) ? "dark" : "light");
	}, [pathname]);

	return (
		<footer className={cn('py-10 text-sm text-center md:text-left', {
			'bg-black text-white': theme === "dark",
			'bg-white text-black': theme === "light"
		})}>
			<Container className="flex flex-col md:flex-row md:justify-between items-center gap-10 lg:gap-20">
				<div className="order-1 flex-1 flex flex-col items-center md:items-start gap-1">
					<h2 className="text-lg font-bold">Meize Production</h2>

					<address className="not-italic">
						Hálkova 1406/2,<br />
						120 00 Praha, Nové Město
					</address>
				</div>

				<div className="order-3 md:order-2 flex-1 flex justify-center gap-4">
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
								<Icon className="hover:opacity-60 transition-opacity duration-300" />
							</Link>
						);
					})}
				</div>

				<div className="order-2 md:order-3 flex-1 flex flex-col items-center md:items-end gap-0.5">
					<a href="mailto:info@meize.cz" className="hover:underline">info@meize.cz</a>
					<a href="tel:+420602687255" className="hover:underline">+420 602 687 255</a>
					<a href="tel:+420776132630" className="hover:underline">+420 776 132 630</a>
				</div>
			</Container>
		</footer>
	);
}
