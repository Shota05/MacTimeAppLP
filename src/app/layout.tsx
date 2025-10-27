import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // 例: "G-XXXXXXXXXX"

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.example"), // 後で本番ドメインに変更
  title: {
    default: "7:77 — macOS ユーティリティ",
    template: "%s | 7:77",
  },
  description: "7:77 は macOS をより快適にする軽量ユーティリティです。",
  openGraph: {
    title: "7:77",
    description: "7:77 は macOS をより快適にする軽量ユーティリティです。",
    url: "https://your-domain.example",
    siteName: "7:77",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "7:77" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7:77",
    description: "7:77 は macOS をより快適にする軽量ユーティリティです。",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <body className={`${inter.className} min-h-full  antialiased `}>
        {children}
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
