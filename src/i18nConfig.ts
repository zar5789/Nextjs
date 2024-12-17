import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import thTranslation from "./locales/th/translation.json";
import enTranslation from "./locales/en/translation.json";

// i18n configuration
i18n
  .use(initReactI18next) // Use the i18next-react binding
  .init({
    lng: "en", // default language
    fallbackLng: "en",
    supportedLngs: ["en", "th"],
    resources: {
      en: {
        translation: enTranslation,
      },
      th: {
        translation: thTranslation,
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
