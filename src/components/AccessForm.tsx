"use client";

import { useActionState, useState } from "react";
import { ArrowRight, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { unlockPortfolio } from "@/app/login/actions";

export default function AccessForm({ returnPath }: { returnPath: string }) {
  const [state, formAction, pending] = useActionState(unlockPortfolio, { error: "" });
  const [visible, setVisible] = useState(false);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <input type="hidden" name="next" value={returnPath} />
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">访问密码</label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={visible ? "text" : "password"}
            autoComplete="current-password"
            autoFocus
            required
            aria-invalid={Boolean(state.error)}
            aria-describedby={state.error ? "password-error" : "password-hint"}
            placeholder="请输入密码"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-12 text-base text-gray-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-blue-50 aria-[invalid=true]:border-red-400"
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            aria-label={visible ? "隐藏密码" : "显示密码"}
            aria-pressed={visible}
            className="absolute inset-y-0 right-0 px-4 text-gray-400 hover:text-gray-700 focus-visible:outline-primary rounded-r-xl"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {state.error ? (
          <p id="password-error" role="alert" className="mt-2 text-sm text-red-600">{state.error}</p>
        ) : (
          <p id="password-hint" className="mt-2 text-xs text-gray-400">密码区分大小写</p>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:opacity-60"
      >
        {pending ? <><LoaderCircle size={16} className="animate-spin" />正在验证…</> : <>进入作品集<ArrowRight size={16} /></>}
      </button>
    </form>
  );
}
