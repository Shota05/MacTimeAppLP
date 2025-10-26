import { useTranslations } from "next-intl";
import LeadForm from "@/components/senderPreflight/LeadForm";

export default function Page() {
  const t = useTranslations("SenderPreflight/LP"); // メッセージ名前空間: LP

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("heroSub")}
        </p>
        <div className="flex justify-center">
          <a
            href="#lead"
            className="inline-flex items-center rounded-md border px-5 py-3 text-base font-medium bg-black text-white hover:opacity-90"
          >
            {t("cta")}
          </a>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-12 text-center text-sm text-gray-500">
        <span>
          Standards‑based checks for SPF • DKIM • DMARC • One‑Click • TLS‑RPT •
          BIMI
        </span>
      </section>

      {/* What you get / check / need */}
      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <Card
          title={t("sections.whatYouGet")}
          items={[t("get.summary"), t("get.pdf"), t("get.recheck")]}
        />
        <Card
          title={t("sections.whatWeCheck")}
          items={[
            t("check.spf"),
            t("check.dkim"),
            t("check.dmarc"),
            t("check.unsubscribe"),
          ]}
        />
        <Card
          title={t("sections.whatWeNeed")}
          items={[t("need.domain"), t("need.esp"), t("need.header")]}
        />
      </section>

      {/* How it works */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t("sections.howItWorks")}</h2>
        <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
          <li>{t("how.submit")}</li>
          <li>{t("how.receive")}</li>
          <li>{t("how.recheck")}</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t("sections.pricing")}</h2>
        <div className="mt-4 rounded-lg border p-6">
          <p className="text-lg font-medium">{t("pricing.line1")}</p>
          <p className="text-sm text-gray-600 mt-2">
            {t("pricing.disclaimer")}
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead" className="mt-16">
        <LeadForm />
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t("sections.faq")}</h2>
        <div className="mt-4 space-y-4">
          <Faq q={t("faq.q1")} a={t("faq.a1")} />
          <Faq q={t("faq.q2")} a={t("faq.a2")} />
          <Faq q={t("faq.q3")} a={t("faq.a3")} />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sender Preflight 48 — All rights reserved.
      </footer>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-lg border p-4">
      <summary className="font-medium cursor-pointer">{q}</summary>
      <p className="mt-2 text-gray-700">{a}</p>
    </details>
  );
}
