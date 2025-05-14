import Container from "@/app/_components/Container";
import FormContact from "@/app/_components/FormContact";
import SocialIcons from "@/app/_components/SocialIcons";
import { type Contacts, contacts } from "@/helpers/contacts";
import { generatePageMetadata } from "@/helpers/metadata";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	const t = await getTranslations({ locale, namespace: "contact.metaData" });

	return generatePageMetadata(
		{
			title: t("title"),
		},
		locale,
	);
}

export default function Contact() {
	const t = useTranslations("contact");

	return (
		<Container
			first
			className="dark flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 md:pb-20"
		>
			<div className="flex-1">
				<video autoPlay loop muted className="w-full max-w-[550px] mx-auto">
					<source src="/videos/meize_cup.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="flex-1 flex flex-col gap-12">
				<section className="flex flex-col items-start gap-4">
					<header>
						<h2 className="font-medium tracking-tighter text-3xl lg:text-4xl dark:text-white">
							{t("general")}
						</h2>
					</header>
					<div className="flex flex-col items-start gap-2">
						{Object.keys(contacts).map((type) => {
							const contactType = type as keyof Contacts; // Explicitly cast to keyof Contacts
							return (
								<div
									key={`Contacts: ${contactType}`}
									className="flex gap-2 text-lg"
								>
									<p className="dark:text-white/50">{t(contactType)}:</p>
									<a
										href={contacts[contactType].href}
										className="text-black dark:text-white hover:underline transition-colors"
									>
										{contacts[contactType].title}
									</a>
								</div>
							);
						})}
					</div>
					<SocialIcons />
				</section>

				<section className="flex flex-col items-start gap-4">
					<header>
						<h3 className="font-medium tracking-tighter text-3xl lg:text-4xl dark:text-white">
							{t("message")}
						</h3>
					</header>
					<div className="w-full">
						<FormContact />
					</div>
				</section>
			</div>
		</Container>
	);
}
