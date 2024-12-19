import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import fs from "fs";
import path from "path";

type Locale = typeof routing.locales extends (infer U)[] ? U : never;

// Define the types for translations
type Translations = {
  [key: string]: Record<string, string>; // dynamic keys, and values are objects with string keys and values
};

const loadTranslations = async (locale: string): Promise<Translations> => {
  // Explicitly typing translations as Translations
  const translations: Translations = {}; // This is the change: explicit type for translations

  const localesDir = path.resolve("src","locales", locale);

  // Load common translations
  const commonFilePath = path.join(localesDir, "common.json");
  if (fs.existsSync(commonFilePath)) {
    translations["common"] = JSON.parse(
      fs.readFileSync(commonFilePath, "utf-8")
    );
  }

  // Load page-specific translations (you can expand this logic)
  const pageFilePath = path.join(localesDir, "home.json");
  if (fs.existsSync(pageFilePath)) {
    translations["home"] = JSON.parse(fs.readFileSync(pageFilePath, "utf-8"));
  }
  console.log(translations);
  return translations;
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string | undefined = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = "en"; // Default to "en" if locale is undefined or not valid
  }

  const messages = await loadTranslations(locale); // Load multiple files

  return {
    locale,
    messages,
  };
});
