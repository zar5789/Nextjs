"use client";

import { usePathname } from "@/i18n/routing";
import { redirect } from "@/i18n/routing";

const LocaleSwitcher = () => {
  const pathname = usePathname(); // Get current pathname

  const pathAfterLocale = pathname?.split("/").slice(2).join("/") || "";
  // Function to handle language change
  const handleLocaleChange = (locale: string) => {
    redirect({ href: `/${pathAfterLocale}`, locale: `${locale}` });
  };

  return (
    <div>
      <button onClick={() => handleLocaleChange("en")}>English</button> /
      <button onClick={() => handleLocaleChange("th")}>ไทย</button> /
      <button onClick={() => handleLocaleChange("jp")}>日本</button>
    </div>
  );
};

export default LocaleSwitcher;
