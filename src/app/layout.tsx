import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.example"), // 後で本番ドメインに変更
  title: {
    default: "YourAppName — macOS ユーティリティ",
    template: "%s | YourAppName",
  },
  description: "YourAppName は macOS をより快適にする軽量ユーティリティです。",
  openGraph: {
    title: "YourAppName",
    description:
      "YourAppName は macOS をより快適にする軽量ユーティリティです。",
    url: "https://your-domain.example",
    siteName: "YourAppName",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YourAppName" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourAppName",
    description:
      "YourAppName は macOS をより快適にする軽量ユーティリティです。",
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
    <html lang="ja" className="h-full">
      <body
        className={`${inter.className} min-h-full bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased dark:from-slate-950 dark:to-slate-900 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
