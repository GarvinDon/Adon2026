"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ACCESS_COOKIE, createAccessToken, matchesPassword, safeReturnPath } from "@/lib/access";

export async function unlockPortfolio(_state: { error: string }, formData: FormData) {
  const password = formData.get("password");
  if (typeof password !== "string" || !matchesPassword(password)) {
    return { error: "密码不正确，请重新输入。" };
  }

  (await cookies()).set(ACCESS_COOKIE, createAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  const returnPath = formData.get("next");
  redirect(safeReturnPath(typeof returnPath === "string" ? returnPath : "/"));
}
