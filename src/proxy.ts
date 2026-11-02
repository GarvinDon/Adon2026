import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, hasAccess } from "@/lib/access";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname === "/login") return NextResponse.next();

  if (!hasAccess(request.cookies.get(ACCESS_COOKIE)?.value)) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", pathname + search);
    const response = NextResponse.redirect(login);
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static/|favicon.ico$).*)"],
};
