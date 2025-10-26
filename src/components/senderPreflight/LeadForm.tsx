"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function LeadForm() {
  const t = useTranslations("SenderPreflight/LeadForm");
  const locale = useLocale();
  const searchParams = useSearchParams();

  // UTM をクエリから拾って一緒に送る（存在しなければ空文字）
  const utm = useMemo(
    () => ({
      utm_source: searchParams.get("utm_source") ?? "",
      utm_campaign: searchParams.get("utm_campaign") ?? "",
      utm_content: searchParams.get("utm_content") ?? "",
    }),
    [searchParams]
  );

  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const body = {
      email: String(data.email || ""),
      company: String(data.company || ""),
      domain: String(data.domain || ""),
      esp: String(data.esp || ""),
      volume: String(data.volume || "lt5k"),
      header: String(data.header || ""),
      agree: data.agree === "on",
      locale, // 追加：リクエストのロケール
      ...utm, // 追加：UTM
    };

    try {
      setPending(true);
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-requested-with": "XMLHttpRequest",
        },
        body: JSON.stringify(body),
      });
      setPending(false);

      if (res.ok) {
        setDone(true);
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j?.errors ? t("errors.required") : t("errors.submitFailed"));
      }
    } catch {
      setPending(false);
      setError(t("errors.network"));
    }
  }

  if (done) {
    return (
      <div
        className="rounded-lg border p-6 bg-green-50"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-semibold">{t("success.title")}</h3>
        <p className="text-sm text-gray-700 mt-2">{t("success.body")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border p-6 space-y-4"
      aria-busy={pending}
    >
      <h3 className="font-semibold text-lg">{t("title")}</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <Field
          label={t("fields.email.label")}
          name="email"
          type="email"
          placeholder={t("fields.email.placeholder")}
          autoComplete="email"
          required
        />

        <Field
          label={t("fields.company.label")}
          name="company"
          placeholder={t("fields.company.placeholder")}
          autoComplete="organization"
          required
        />

        <Field
          label={t("fields.domain.label")}
          name="domain"
          placeholder={t("fields.domain.placeholder")}
          autoCapitalize="none"
          autoCorrect="off"
          required
        />

        <Field
          label={t("fields.esp.label")}
          name="esp"
          placeholder={t("fields.esp.placeholder")}
          autoCapitalize="none"
          autoCorrect="off"
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {t("fields.volume.label")}
          </label>
          <select
            name="volume"
            className="mt-1 w-full rounded-md border px-3 py-2"
          >
            <option value="lt5k">{t("fields.volume.lt5k")}</option>
            <option value="5to20k">{t("fields.volume.5to20k")}</option>
            <option value="gt20k">{t("fields.volume.gt20k")}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t("fields.header.label")}
        </label>
        <textarea
          name="header"
          required
          rows={8}
          className="mt-1 w-full rounded-md border px-3 py-2 font-mono text-sm"
          placeholder={t("fields.header.placeholder")}
          spellCheck={false}
          autoCorrect="off"
        />
        <p className="mt-1 text-xs text-gray-500">{t("fields.header.help")}</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="agree"
          required
          className="h-4 w-4"
          id="agree"
        />
        <label htmlFor="agree" className="text-sm text-gray-700">
          {t("consent")}
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        disabled={pending}
        className="inline-flex items-center rounded-md border px-5 py-2.5 bg-black text-white disabled:opacity-60"
      >
        {pending ? t("buttons.submitting") : t("buttons.submit")}
      </button>
    </form>
  );
}

function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, id, name, ...rest } = props;
  const inputId = id || (name ? String(name) : undefined);
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-md border px-3 py-2"
      />
    </div>
  );
}
