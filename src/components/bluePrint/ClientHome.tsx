"use client";

import { useState } from "react";
import Header from "../../components/bluePrint/Header";
import SearchBar from "../../components/bluePrint/SearchBar";
import RankingList from "../../components/bluePrint/RankingList";
import BentoFeatures from "../../components/bluePrint/BentoFeatures";
import CTASection from "../../components/bluePrint/CTASection";
import { blueprints } from "../../../lib/bluePrint/data/blueprints";
import type { Copy } from "../../../lib/bluePrint/copy";
type HeroVariant = {
  key: "a" | "b" | "c";
  title: string;
  subtitle: string;
  cta: string;
  note?: string;
};

export default function ClientHome({
  hero,
  copy,
}: {
  hero: HeroVariant;
  copy: Copy;
}) {
  const [q, setQ] = useState("");

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-700">
            {hero.subtitle}
          </p>

          <div className="mx-auto mt-6 max-w-2xl">
            <SearchBar onChange={setQ} placeholder={copy.search.placeholder} />
            <p className="mt-2 text-xs text-gray-500">{copy.search.tip}</p>
            <div className="mt-4">
              <a
                href="#cta"
                className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-700"
              >
                {hero.cta}
              </a>
            </div>
            {hero.note && (
              <p className="mt-2 text-xs text-gray-500">{hero.note}</p>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-10">
          <BentoFeatures items={copy.benefits.items} />
        </section>

        {/* Top 10 */}
        <section id="top10" className="mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">{copy.demo.heading}</h2>
            <span className="text-sm text-gray-500">
              Sorted by quality score (demo)
            </span>
          </div>
          <RankingList items={blueprints} query={q} />
          <p className="mt-4 text-xs text-gray-500">{copy.demo.lead}</p>
          <p className="mt-1 text-xs text-gray-500">{copy.demo.disclaimer}</p>
        </section>

        {/* CTA */}
        <CTASection copy={copy.cta} />

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 py-6 text-sm text-gray-600">
          <div className="mx-auto max-w-7xl px-4 space-y-1">
            {copy.footer.legal.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
