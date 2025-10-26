import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/top/Header";
import Footer from "../../components/top/Footer";
import { site } from "../../../lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  icons: { icon: "/favicon.ico" }, // 置き換え可
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} min-h-dvh bg-white text-gray-900 antialiased`}
      >
        <Header />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
