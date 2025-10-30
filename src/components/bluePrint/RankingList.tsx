"use client";
import { useMemo } from "react";
import type { Blueprint } from "../../../lib/bluePrint/types";
import { computeScore } from "../../../lib/bluePrint/scoring";
import BlueprintCard from "./BlueprintCard";

export default function RankingList({
  items,
  query,
}: {
  items: Blueprint[];
  query: string;
}) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = !q
      ? items
      : items.filter((b) => {
          const hay = (
            b.title +
            " " +
            b.description +
            " " +
            b.author +
            " " +
            b.tags.join(" ") +
            " " +
            b.categories.join(" ")
          ).toLowerCase();
          return hay.includes(q);
        });
    return [...base]
      .sort((a, b) => computeScore(b) - computeScore(a))
      .slice(0, 10);
  }, [items, query]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
      {filtered.map((b) => (
        <BlueprintCard key={b.id} b={b} />
      ))}
    </div>
  );
}
