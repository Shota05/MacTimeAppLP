import Link from "next/link";
import { site } from "../../../../lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-indigo-100 blur-3xl"
      ></div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl"
      ></div>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            ビジネスを前に進める
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              デザイン × 開発 × データ活用
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">{site.description}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              まずは相談する
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 hover:bg-gray-50"
            >
              サービスを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
