import Image from "next/image";

const SUPPORT_URL =
  process.env.NEXT_PUBLIC_SUPPORT_URL || "https://buymeacoffee.com/yourname";

// ダウンロードは安定パス /download に集約（実体URLは route.ts でリダイレクト）
const DOWNLOAD_PATH = "/download";

export default function Page() {
  return (
    <main className="relative">
      {/* 薄い放射グラデーション */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="mx-auto h-[520px] max-w-6xl bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            {/* シンプルなアプリアイコン風SVG（置き換え可） */}
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
          <span className="text-lg font-semibold tracking-tight">
            YourAppName
          </span>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer ugc"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ☕ サポート
          </a>
          <a
            href={DOWNLOAD_PATH}
            className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
          >
            ダウンロード
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:pt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            あなたのMacを、もっと軽やかに。
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            YourAppName は、日々の作業を少しだけ速く・心地よくする macOS
            ユーティリティ。インストールしてすぐ、違いが分かります。
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={DOWNLOAD_PATH}
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              {/* ↓ ダウンロードアイコン */}
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
              <span>macOS 用にダウンロード</span>
            </a>

            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer ugc"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-5 py-3 font-semibold text-slate-700 backdrop-blur transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
            >
              <span aria-hidden>☕</span>
              <span>作者を応援する</span>
            </a>
          </div>

          {/* 対応環境などのバッジ */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              macOS 12 以降
            </span>
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              Apple Silicon / Intel
            </span>
            <span className="rounded-full border border-slate-300 px-2.5 py-1 dark:border-slate-700">
              ユニバーサルバイナリ
            </span>
          </div>
        </div>

        {/* スクリーンショット / モック */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* 実画像に差し替える: /public/screenshot.png を追加 */}
          <div className="relative">
            <Image
              src="/screenshot.png"
              width={1280}
              height={800}
              alt="YourAppName のスクリーンショット"
              className="block w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* 特長（簡潔版） */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 sm:grid-cols-3">
        {[
          {
            title: "軽量・高速",
            desc: "ネイティブ実装で起動も最小メモリ使用量も軽快。",
          },
          {
            title: "シンプル設計",
            desc: "余計なUIを省き、必要な機能に素早くアクセス。",
          },
          {
            title: "安心の自動更新",
            desc: "新機能や修正を自動で取得（Sparkle などを想定）。",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
              {/* 小さな汎用アイコン */}
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
              aria-label="お問い合わせ"
            >
              お問い合わせ
            </a>
            <a
              className="hover:underline"
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer ugc"
            >
              サポート
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
