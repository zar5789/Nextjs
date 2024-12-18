import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Ensure that routing.locales is correctly typed as an array of string literals
type Locale = typeof routing.locales extends (infer U)[] ? U : never;

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` returns `string | undefined`, but `locale` must be `Locale | undefined`
  let locale: string | undefined = await requestLocale;

  // If locale is undefined or not valid, set it to "en"
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = "en"; // Default to "en" if locale is undefined or not valid
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
