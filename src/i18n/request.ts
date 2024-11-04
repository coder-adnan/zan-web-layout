import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define a type for the valid locales
type LocaleType = "en" | "ar"; // or use typeof routing.locales[number] if routing.locales is defined

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale: LocaleType | undefined = (await requestLocale) as
    | LocaleType
    | undefined;

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as LocaleType; // Ensure default locale matches type
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? import("../../messages/en.json")
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
