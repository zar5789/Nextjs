import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default async function middleware(req: NextRequest) {
  const res = createMiddleware(routing)(req); // ใช้ next-intl middleware ที่มีอยู่

  // ถ้าไม่มี locale ใน URL (เช่น `/`, `/about` หรือเส้นทางอื่น ๆ ที่ไม่ได้ระบุ locale)
  if (
    !req.nextUrl.pathname.startsWith("/en") &&
    !req.nextUrl.pathname.startsWith("/th")
  ) {
    // ทำการ redirect ไปที่ /en โดยอัตโนมัติ
    return NextResponse.redirect(
      new URL("/en" + req.nextUrl.pathname, req.url)
    );
  }

  return res; // ถ้า URL มี locale อยู่แล้ว ให้ดำเนินการตามปกติ
}

export const config = {
  matcher: ["/", "/(th|en)/:path*"],
};
