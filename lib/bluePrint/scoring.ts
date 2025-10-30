import type { Blueprint } from "./types";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export function computeScore(b: Blueprint): number {
  // Recency (50%): 0 days => 100, >=365 days => 0
  let recencyPart = 0;
  if (b.lastUpdated) {
    const days = Math.max(
      0,
      (Date.now() - new Date(b.lastUpdated).getTime()) / (1000 * 60 * 60 * 24)
    );
    recencyPart = 100 * (1 - clamp(days, 0, 365) / 365);
  } else {
    recencyPart = 40; // neutral-ish if unknown
  }

  // Community (50%): diminishing returns
  const m = b.metrics || {};
  const stars = m.gistStars ?? 0;
  const replies = m.replies ?? 0;
  const likes = m.likes ?? 0;
  const views = m.views ?? 0;

  const raw = stars * 4 + replies * 0.6 + likes * 1.2 + views * 0.001;
  const community = Math.min(100, Math.sqrt(raw) * 3.5);

  return clamp(recencyPart * 0.5 + community * 0.5, 0, 100);
}
