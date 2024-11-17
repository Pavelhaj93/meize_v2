import localized from "../../meize/locale/locales";

export const getLocaleStrings = (locale, key) => {
	const lang = localized[locale];

	if (!key) return lang;

	return lang[key] ?? null;
};
