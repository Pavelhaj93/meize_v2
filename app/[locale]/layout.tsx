// Main layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";

export interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
      <body className={`${poppins.className} relative no-scroll`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col">
            {children}
            {/* <Footer /> TODO: add footer with link to my page */}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
