// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pass Gmail/Yahoo sender requirements in 48 hours — header-only.",
  description:
    "We run a preflight audit for SPF/DKIM/DMARC alignment and One-Click Unsubscribe. You send a domain + raw header, we return a PDF with exact DNS values and top-3 fixes. This is not definitive.",
  openGraph: {
    title: "Pass Gmail/Yahoo sender requirements in 48 hours — header-only.",
    description:
      "Preflight audit for SPF/DKIM/DMARC + One-Click Unsubscribe. Get a PDF report with DNS values and fixes.",
    type: "website",
    url: "https://mac-time-app-lp.vercel.app/senderPreflight/en",
    siteName: "HeaderCheck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pass Gmail/Yahoo sender requirements — header-only.",
    description:
      "SPF/DKIM/DMARC preflight audit + unsubscribe validation. PDF report within 48h.",
  },
  metadataBase: new URL(
    "https://mac-time-app-lp.vercel.app/senderPreflight/en"
  ),
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale); // Server Components へロケールを配布
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
