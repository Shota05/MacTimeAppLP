type Case = {
  title: string;
  category: string;
  description: string;
  href: string;
};

const cases: Case[] = [
  {
    title: "BtoB企業の採用サイト刷新",
    category: "HP制作",
    description: "CMS移行とLighthouse改善で応募CVR向上。※ 実績名は仮置き。",
    href: "#contact",
  },
  {
    title: "サブスク向けWebアプリ MVP",
    category: "自社アプリ開発",
    description: "4週間でMVP→ユーザテスト。段階的に課金/分析を追加。",
    href: "#contact",
  },
  {
    title: "データ可視化ダッシュボード",
    category: "分析コンサル",
    description: "KPI再設計とダッシュボード整備で意思決定の即時性を改善。",
    href: "#contact",
  },
];

export default function CaseStudies() {
  return (
    <section id="works" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            実績（サンプル）
          </h2>
          <p className="mt-3 text-gray-600">
            実名・詳細は NDA/ヒアリング後に共有可能です。
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-xs font-medium text-indigo-700">
                {c.category}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>
              <a
                href={c.href}
                className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
              >
                詳しく聞く →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
