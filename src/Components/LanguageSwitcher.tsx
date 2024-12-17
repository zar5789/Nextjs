"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Change language programmatically
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button> /
      <button onClick={() => handleLanguageChange("th")}>ไทย</button>
    </div>
  );
}
