import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import createMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: Request) {
	const negotiationHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => {
		negotiationHeaders[key] = value;
	});

	const languages = new Negotiator({ headers: negotiationHeaders }).languages();

	const locales = routing.locales;
	const defaultLocale = routing.defaultLocale;

	try {
		return matchLocale(languages, locales, defaultLocale);
	} catch (e) {
		return defaultLocale;
	}
}

export async function middleware(request: NextRequest) {
	const nextIntlMiddleware = createMiddleware({
		// A list of all locales that are supported
		locales: routing.locales,
		// Used when no locale matches
		defaultLocale: routing.defaultLocale,
	});

	const { pathname } = request.nextUrl;

	const cookieStore = await cookies();

	const prefferedLanguage = cookieStore.get("NEXT_LOCALE")?.value || "cs";

	// Localisation: 1. Check if there is any supported locale in the pathname
	if (
		routing.locales.some(
			(locale) =>
				pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
		)
	) {
		// If the locale is supported, continue to the next middleware
		const requestHeaders = new Headers(request.headers);
		requestHeaders.set("x-pathname", request.nextUrl.pathname);

		const nextRequest = new NextRequest(request.nextUrl, {
			headers: requestHeaders,
		});

		return nextIntlMiddleware(nextRequest);
	}

	// Localisation: 2. Get supported locale from the request headers
	const locale = getLocale(request) || routing.defaultLocale;

	// Localisation: 3. Redirect to the supported locale
	const response = NextResponse.redirect(
		new URL(`/${prefferedLanguage}/${pathname}`, request.nextUrl),
	);

	// Set the x-pathname header to the original pathname for later use in server components
	response.headers.set("x-pathname", request.nextUrl.pathname);
	return response;
}

export const config = {
	matcher: [
		"/",
		"/(cs|en)/:path*",
		// Matcher ignoring `/_next` and `icons` directories and more
		"/((?!api|_next|icons|public|data|assets|images|favicon.ico|robots.txt|sitemap.xml).*)",
		// Optional: only run on root (/) URL
	],
};
