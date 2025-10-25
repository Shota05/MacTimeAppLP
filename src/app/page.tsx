"use client";

import type { MouseEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const SUPPORT_URL =
  process.env.NEXT_PUBLIC_SUPPORT_URL || "https://buymeacoffee.com/komatsushov";

// Stable path for download (server route should 302 to the real .dmg URL)
const DOWNLOAD_PATH = "/api/download";
const FILE_NAME = "YourApp.dmg"; // GA label for the downloaded file

export default function Page() {
  // GA4: track click -> navigate safely (beacon + event_callback + fallback)
  const handleDownloadClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Respect new-tab / modifier clicks
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      e.currentTarget.target === "_blank"
    ) {
      return;
    }

    e.preventDefault();
    const href = e.currentTarget.href || DOWNLOAD_PATH;

    let navigated = false;
    const go = () => {
      if (navigated) return;
      navigated = true;
      window.location.assign(href);
    };

    sendGAEvent("event", "file_download", {
      file_name: FILE_NAME,
      file_extension: "dmg",
      link_url: href,
      value: 1,
      transport_type: "beacon",
      event_callback: go,
    });

    setTimeout(go, 300);
  };

  return (
    <main className="relative">
      {/* Subtle radial grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="mx-auto h-[520px] max-w-6xl bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            {/* Simple app-icon style SVG (replace as you like) */}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
                fill="currentColor"
                opacity="0.08"
              />
              <path
                d="M7 2h10a3 3 0 0 1 3 3v2H4V5a3 3 0 0 1 3-3z"
                fill="currentColor"
                opacity="0.15"
              />
              <rect
                x="6"
                y="9"
                width="12"
                height="9"
                rx="2"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">7:77</span>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer ugc"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ☕ Support
          </a>
          <a
            href={DOWNLOAD_PATH}
            onClick={handleDownloadClick}
            className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
          >
            Download
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:pt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Take control of how time looks.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            <strong>7:77</strong> is a tiny macOS utility that lets you
            completely customize time display. Remap specific timestamps (e.g.,
            <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-sm dark:bg-slate-800">
              4:44 → 3:104
            </code>
            ), or rewrite whole ranges (e.g.,
            <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-sm dark:bg-slate-800">
              12:00–13:00 → “Chill 🤩”
            </code>
            ). Mark times you love (or prefer to avoid) and decide how they
            should appear—everywhere your clock shows.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={DOWNLOAD_PATH}
              onClick={handleDownloadClick}
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              {/* Download icon */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              <span>Download for macOS</span>
            </a>

            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer ugc"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-5 py-3 font-semibold text-slate-700 backdrop-blur transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
            >
              <span aria-hidden>☕</span>
              <span>Buy me a coffee</span>
            </a>
          </div>

          {/* Environment badges */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              macOS 12 or later
            </span>
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              Apple Silicon / Intel
            </span>
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              Universal Binary
            </span>
          </div>
        </div>

        {/* ▼ Screenshot area → autoplay video (/public/tophero.mp4) */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="relative">
            <video
              className="block w-full h-auto"
              src="/header.mp4" // public/tophero.mp4
              preload="metadata"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 sm:grid-cols-3">
        {[
          {
            title: "Remap exact times",
            desc: "Turn any specific clock time into something else (e.g., 4:44 → 3:104). Perfect for times you dislike—or ones you love.",
          },
          {
            title: "Range rules & labels",
            desc: "Rewrite entire ranges like 12:00–13:00 with custom text (e.g., “Chill 🤩”). Make lunch break literally look like a break.",
          },
          {
            title: "Simple, lightweight",
            desc: "Minimal UI, quick to set up, and designed to stay out of your way once configured.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
              {/* Generic small icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8l5-5" />
              </svg>
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              className="hover:underline"
              href="mailto:you@example.com"
              aria-label="Contact"
            >
              Contact
            </a>
            <a
              className="hover:underline"
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer ugc"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
