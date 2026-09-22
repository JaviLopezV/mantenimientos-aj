import { NextResponse } from "next/server";
import { defaultLocale, locales, pageKeys } from "./config/seo";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  if (locales.includes(segments[0])) return NextResponse.next();

  // Only redirect known unprefixed pages; unknown URLs must remain 404s.
  const path = segments.join("/");
  if (Object.hasOwn(pageKeys, path)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${path ? `/${path}` : ""}`;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
