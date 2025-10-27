import { useTranslations } from "next-intl";
import LeadForm from "@/components/senderPreflight/LeadForm";

export default function Page() {
  const t = useTranslations("senderPreflight.LP");

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {t("heroSub")}
        </p>
        <div className="flex justify-center">
          <a
            href="#lead"
            className="inline-flex items-center rounded-lg border border-transparent px-6 py-3 text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-purple-500/30 transition-all"
          >
            {t("cta")}
          </a>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-12 text-center text-sm text-slate-500">
        <span className="inline-block px-4 py-2 rounded-full bg-slate-100">
          Standards‑based checks for SPF • DKIM • DMARC • One‑Click • TLS‑RPT •
          BIMI
        </span>
      </section>

      {/* What you get / check / need */}
      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <Card
          title={t("sections.whatYouGet")}
          items={[t("get.summary"), t("get.pdf"), t("get.recheck")]}
          gradient="from-blue-50 to-indigo-50"
          borderColor="border-blue-200"
        />
        <Card
          title={t("sections.whatWeCheck")}
          items={[
            t("check.spf"),
            t("check.dkim"),
            t("check.dmarc"),
            t("check.unsubscribe"),
          ]}
          gradient="from-purple-50 to-pink-50"
          borderColor="border-purple-200"
        />
        <Card
          title={t("sections.whatWeNeed")}
          items={[t("need.domain"), t("need.esp"), t("need.header")]}
          gradient="from-indigo-50 to-purple-50"
          borderColor="border-indigo-200"
        />
      </section>

      {/* How it works */}
      <section className="mt-16 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("sections.howItWorks")}
        </h2>
        <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
          <li>{t("how.submit")}</li>
          <li>{t("how.receive")}</li>
          <li>{t("how.recheck")}</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("sections.pricing")}
        </h2>
        <div className="mt-4 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
          <p className="text-lg font-medium text-slate-800">
            {t("pricing.line1")}
          </p>
          <p className="text-sm text-slate-600 mt-2">
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
        <h2 className="text-2xl font-semibold text-slate-800">
          {t("sections.faq")}
        </h2>
        <div className="mt-4 space-y-4">
          <Faq q={t("faq.q1")} a={t("faq.a1")} />
          <Faq q={t("faq.q2")} a={t("faq.a2")} />
          <Faq q={t("faq.q3")} a={t("faq.a3")} />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sender Preflight 48 — All rights reserved.
      </footer>
    </main>
  );
}

function Card({
  title,
  items,
  gradient,
  borderColor,
}: {
  title: string;
  items: string[];
  gradient: string;
  borderColor: string;
}) {
  return (
    <div
      className={`rounded-xl border ${borderColor} bg-gradient-to-br ${gradient} p-6 shadow-sm hover:shadow-md transition-shadow`}
    >
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300 transition-colors">
      <summary className="font-medium cursor-pointer text-slate-800">
        {q}
      </summary>
      <p className="mt-2 text-slate-700">{a}</p>
    </details>
  );
}
