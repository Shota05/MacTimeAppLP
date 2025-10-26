const steps = [
  {
    title: "01 ヒアリング",
    text: "課題・目的・制約を整理。短期/中長期のゴールを言語化します。",
  },
  {
    title: "02 提案/見積",
    text: "要件定義・スコープ・スケジュール。まず小さく始められる案も提示。",
  },
  {
    title: "03 実装/検証",
    text: "デザイン・開発・計測を一体で進行。早いサイクルで検証・改善。",
  },
  {
    title: "04 運用/伴走",
    text: "保守・運用・追加改善。体制内製化や引き継ぎもサポート。",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            進め方
          </h2>
        </header>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.title} className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
