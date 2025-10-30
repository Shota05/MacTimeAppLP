import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HA Blueprints Hub — search & quality signals",
  description:
    "Find reliable Home Assistant Blueprints with quality signals and one-click import.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "HA Blueprints Hub",
    description:
      "Search, compare, and import trusted Home Assistant Blueprints.",
    url: "https://example.com",
    siteName: "HA Blueprints Hub",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HA Blueprints Hub",
    description: "Search & rank Home Assistant Blueprints",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
