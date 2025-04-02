import type { Metadata, Viewport } from "next";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { APP_COLOR, APP_TITLE, APP_URL, getDefaultMetadata } from "@/helpers/metadata";

export interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export const viewport: Viewport = {
	themeColor: APP_COLOR,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;

	return getDefaultMetadata(locale);
}

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default async function RootLocaleLayout({
	children,
	params,
}: Readonly<RootLayoutProps>) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as "cs" | "en")) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content={APP_TITLE} />
				<link rel="manifest" href="/site.webmanifest" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": APP_TITLE,
							"url": APP_URL,
							"logo": `${APP_URL}images/favicon.png`,
						})
					}}
				/>
			</head>
			<body className={`${poppins.className} relative flex flex-col min-h-screen bg-black`}>
				<NextIntlClientProvider messages={messages}>
					<Navbar />

					<main className="flex-1">
						{children}
					</main>

					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
