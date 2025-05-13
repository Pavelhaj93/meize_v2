import { Metadata } from "next";

interface PageMetadata {
    title?: string;
    description?: string;
    image?: string;
}

export const APP_TITLE = "Meize";
export const APP_URL = "https://www.meize.cz/";
export const APP_COLOR = '#000';

const APP_DESCRIPTION = {
    'cs': '',
    'en': ''
}

export const getDefaultMetadata = (locale: 'cs' | 'en' = 'cs') => {
    const description = APP_DESCRIPTION[locale] || APP_DESCRIPTION['en'];

    return {
        metadataBase: new URL(APP_URL),
        title: formatTitle(APP_TITLE, locale),
        description: description,
        applicationName: APP_TITLE,
        icons: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        manifest: "/site.webmanifest",
        other: {
            "apple-mobile-web-app-title": APP_TITLE,
            "msapplication-TileColor": APP_COLOR,
        },
        openGraph: {
            title: formatTitle(APP_TITLE, locale),
            siteName: APP_TITLE,
            url: APP_URL,
            description: description,
            type: "website",
            images: [{
                url: "/images/og-image.jpg",
            }]
        },
        twitter: {
            card: "summary_large_image",
            title: formatTitle(APP_TITLE, locale),
            description: description,
            images: ["/images/og-image.jpg"],
        }
    }
};

function getTitleSuffix(locale = 'cs') {
    return locale === 'cs' ? "Kreativní produkční studio Meize" : "Creative Production Studio Meize";
}

function formatTitle(title = '', locale = 'cs') {
    const titleSuffix = getTitleSuffix(locale);

    if (title === '' || title === titleSuffix) {
        return titleSuffix;
    }

    return `${title} | ${titleSuffix}`;
}

export function generatePageMetadata(data: PageMetadata, locale = 'cs'): Metadata {
    const { title, description, image } = data;

    const defaultData = getDefaultMetadata(locale as 'cs' | 'en');

    return {
        ...defaultData,
        title: title ? formatTitle(title, locale) : defaultData.title,
        description: description || defaultData.description,
        openGraph: {
            ...defaultData.openGraph,
            title: title ? formatTitle(title, locale) : defaultData.openGraph?.title,
            description: description || defaultData.openGraph?.description,
            images: image ? [{ url: image }] : defaultData.openGraph?.images,
        },
        twitter: {
            ...defaultData.twitter,
            title: title ? formatTitle(title, locale) : defaultData.twitter?.title,
            description: description || defaultData.twitter?.description,
            images: image ? [image] : defaultData.twitter?.images,
        },
    };
}