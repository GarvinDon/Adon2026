import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AccessForm from "@/components/AccessForm";
import { ACCESS_COOKIE, hasAccess, safeReturnPath } from "@/lib/access";

export const metadata: Metadata = {
  title: "访问作品集 · Adon",
  robots: { index: false, follow: false },
};

export default async function Login({ searchParams }: {
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const params = await searchParams;
  const returnPath = safeReturnPath(typeof params.next === "string" ? params.next : "/");
  if (hasAccess((await cookies()).get(ACCESS_COOKIE)?.value)) redirect(returnPath);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-6 py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative w-full max-w-sm">
        <p className="mb-8 text-center text-xl font-bold tracking-tight text-primary">Adon<span className="text-gray-300">.</span></p>
        <section className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-gray-200/40 sm:p-9">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary"><LockKeyhole size={22} aria-hidden="true" /></div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">欢迎访问我的作品集</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">输入访问密码，了解我的设计思考与项目实践。</p>
          <AccessForm returnPath={returnPath} />
        </section>
        <p className="mt-6 text-center text-xs tracking-wide text-gray-400">Adon · Product Designer</p>
      </div>
    </main>
  );
}
