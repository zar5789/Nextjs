"use client";
import { Button } from "antd";
import Appheader from "@/Components/AppHeader";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div>
      <Appheader></Appheader>
      <div>
        <div>
          <div className="container mx-auto mt-5 " style={{ width: "50%" }}>
            <div className="p-10 space-y-8 border-2 rounded-lg shadow-md">
              <h1 className="text-lime-500 font-extrabold text-2xl">
                {t("title")}
              </h1>
              <p className="italic font-serif text-sm">{t("description")}</p>
              <div>
                <nav className="flex justify-evenly w-full">
                  <Button
                    type="primary"
                    className="text-2xl font-semibold py-8 px-8 rounded-2xl"
                    href=""
                  >
                    {t("spaceX")}
                  </Button>
                  <Button
                    type="primary"
                    className="text-2xl font-semibold py-8 px-8 rounded-2xl"
                    href=""
                  >
                    {t("starwar")}
                  </Button>
                </nav>
              </div>
            </div>
          </div>
          <div
            className="container mx-auto border-2 shadow-lg p-10 space-y-8 rounded-md"
            style={{ width: "50%" }}
          >
            <p className="italic font-serif text-sm">{t("notice")}</p>
            <nav className="flex justify-evenly pt-5 w-full">
              <Link href="/SpaceX" className=" text-blue-500">
                {t("linkSpaceX")}
              </Link>
              <Link href="/starwar" className=" text-blue-500">
                {t("linkStarwar")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
