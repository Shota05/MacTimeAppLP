import ScorePill from "./ScorePill";
import Badge from "./Badge";
import { computeScore } from "../../../lib/bluePrint/scoring";
import type { Blueprint } from "../../../lib/bluePrint/types";

function importUrl(b: Blueprint): string | null {
  if (!b.blueprintUrl) return null;
  return (
    "https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=" +
    encodeURIComponent(b.blueprintUrl)
  );
}

export default function BlueprintCard({ b }: { b: Blueprint }) {
  const score = computeScore(b);
  const iu = importUrl(b);
  return (
    <article className="group relative rounded-2xl border border-gray-700 bg-gray-700 p-5 shadow-soft transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-tight">
          <a
            href={b.forumUrl || b.docsUrl || b.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="decoration-sky-300 hover:underline"
          >
            {b.title}
          </a>
        </h3>
        <ScorePill score={score} />
      </div>
      <p className="mt-2 text-gray-700">{b.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge>{b.author}</Badge>
        {b.categories.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
        {b.lastUpdated && (
          <Badge>Updated {new Date(b.lastUpdated).toLocaleDateString()}</Badge>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {iu ? (
          <a
            href={iu}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-sky-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            One‑click Import
          </a>
        ) : (
          <a
            href={b.forumUrl || b.docsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            Open Details
          </a>
        )}
        {b.forumUrl && (
          <a
            href={b.forumUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Forum
          </a>
        )}
        {b.docsUrl && (
          <a
            href={b.docsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Docs
          </a>
        )}
      </div>
    </article>
  );
}
