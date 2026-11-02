import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ACCESS_COOKIE = "adon-portfolio-access";
const SESSION_DURATION = 12 * 60 * 60 * 1000;

function password() {
  return process.env.PORTFOLIO_PASSWORD || "Adon";
}

function sign(value: string) {
  const secret = process.env.PORTFOLIO_SESSION_SECRET || `adon-portfolio:${password()}`;
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function matchesPassword(value: string) {
  const actual = createHmac("sha256", "password-check").update(value).digest();
  const expected = createHmac("sha256", "password-check").update(password()).digest();
  return timingSafeEqual(actual, expected);
}

export function createAccessToken() {
  const expires = String(Date.now() + SESSION_DURATION);
  return `${expires}.${sign(expires)}`;
}

export function hasAccess(token: string | undefined) {
  if (!token) return false;
  const [expires, signature, extra] = token.split(".");
  if (extra !== undefined || !/^\d+$/.test(expires) || !/^[a-f0-9]{64}$/.test(signature || "")) return false;
  if (Number(expires) <= Date.now()) return false;
  return timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(sign(expires), "hex"));
}

export function safeReturnPath(value: string) {
  if (!value.startsWith("/") || value.startsWith("//") || /[\\\x00-\x1f]/.test(value)) return "/";
  const pathname = value.split(/[?#]/)[0];
  return pathname === "/login" || pathname.startsWith("/login/") ? "/" : value;
}

export async function requirePortfolioAccess(returnPath = "/") {
  if (!hasAccess((await cookies()).get(ACCESS_COOKIE)?.value)) {
    redirect(`/login?next=${encodeURIComponent(returnPath)}`);
  }
}
