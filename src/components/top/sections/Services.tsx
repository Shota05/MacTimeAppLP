type Service = {
  title: string;
  subtitle: string;
  points: string[];
  href: string;
};

const services: Service[] = [
  {
    title: "HP制作（コーポレート / LP）",
    subtitle: "要件整理からUI設計・実装・運用まで",
    points: [
      "要件定義・情報設計（IA）",
      "Next.js / Headless CMS連携",
      "高速表示・基本SEO・計測設計",
    ],
    href: "#contact",
  },
  {
    title: "自社アプリ開発",
    subtitle: "小さく作って早く検証、段階的に拡張",
    points: ["PoC/MVP開発", "API/バックエンド設計", "品質基盤（テスト/監視）"],
    href: "#contact",
  },
  {
    title: "データ分析コンサル",
    subtitle: "意思決定に直結するKPI設計と可視化",
    points: [
      "KPI/イベント設計",
      "ダッシュボード構築",
      "分析プロセス内製化支援",
    ],
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            サービス
          </h2>
          <p className="mt-3 text-gray-600">
            企画から運用まで、必要なところだけでも伴走します。
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden>✔</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
              >
                詳細を相談する →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
