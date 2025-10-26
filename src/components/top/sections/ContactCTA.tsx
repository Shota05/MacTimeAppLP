import Link from "next/link";
import { site } from "../../../../lib/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            相談ベースでお気軽にご連絡ください
          </h2>
          <p className="mt-3 text-gray-300">
            要件が固まっていなくても問題ありません。現状を伺い、最適な進め方をご提案します。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href={`mailto:${site.contactEmail}`}
              className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              メールで問い合わせる
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/10"
            >
              料金・進め方の目安
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            ※ 入力フォーム連携は後日実装（このセクションはリンクのみ）
          </p>
        </div>
      </div>
    </section>
  );
}
