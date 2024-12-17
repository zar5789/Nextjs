"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18nConfig"; // Import the i18n configuration

interface TranslationsProviderProps {
  children: ReactNode;
}

export default function TranslationsProvider({
  children,
}: TranslationsProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
