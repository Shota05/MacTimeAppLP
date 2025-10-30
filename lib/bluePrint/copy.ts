// Centralized English copy for the LP (A/B hero variants)
export type Copy = {
  hero: {
    variants: {
      key: "a" | "b" | "c";
      title: string;
      subtitle: string;
      cta: string;
      note?: string;
    }[];
  };
  search: { placeholder: string; tip: string; empty: string };
  demo: { heading: string; lead: string; disclaimer: string };
  benefits: { items: { title: string; body: string }[] };
  how: { steps: string[] };
  cta: {
    title: string;
    subtitle?: string;
    button: string;
    success: string;
    error: string;
    invalid: string;
    formAction?: string;
  };
  faq: { q: string; a: string }[];
  footer: { legal: string[] };
};

export const en: Copy = {
  hero: {
    variants: [
      {
        key: "a",
        title:
          "Search Home Assistant Blueprints across sources—with simple trust signals.",
        subtitle:
          "Find Blueprints from the forum and GitHub in one place, compare a simple score based on recency and community reactions, then jump to one‑click import. This is not definitive.",
        cta: "Get early access",
        note: "No spam. At most one update per week.",
      },
      {
        key: "b",
        title: "Stop opening 20 tabs. Find the Blueprint that actually works.",
        subtitle:
          "Use last updated, likes/replies/views, and author activity as quick indicators. One‑click import when available. This is not definitive.",
        cta: "Try the demo",
      },
      {
        key: "c",
        title: "Search → Compare → Import. No more Blueprint rabbit holes.",
        subtitle:
          "Cross‑source search (Forum + GitHub/Gist), a simple quality score, and My Home Assistant deep‑links.",
        cta: "See the Top 10",
      },
    ],
  },
  search: {
    placeholder: "e.g., battery, IKEA, awtrix, Blacky",
    tip: "Matches title, description, author, and tags.",
    empty: "No results. Try a broader keyword or different spelling.",
  },
  demo: {
    heading: "Demo Ranking — Top 10",
    lead: "Hand‑picked examples sorted by a demo score. Numbers are indicative and may change. This is not definitive.",
    disclaimer:
      "Always verify details on the linked forum/doc pages before use.",
  },
  benefits: {
    items: [
      {
        title: "Cross‑source search",
        body: "Index Forum + GitHub (incl. Gist) in one list.",
      },
      {
        title: "Trust signals",
        body: "Combine last updated with likes/replies/views and stars into a simple score.",
      },
      {
        title: "One‑click import",
        body: "Open the Blueprint import dialog in My Home Assistant.",
      },
      {
        title: "Safety‑first",
        body: "Every card links to the author; metrics are indicative only.",
      },
    ],
  },
  how: {
    steps: [
      "Search: enter a keyword or pick a tag.",
      "Compare: check score, last updated, author, and source links.",
      "Import: use one‑click when available. If the deep‑link fails, follow manual import steps in the FAQ. This is not definitive.",
    ],
  },
  cta: {
    title: "Want this to go live?",
    subtitle: "We’re measuring real usage to tune ranking and coverage.",
    button: "Get early access",
    success: "Thanks—We’ll email you when beta is live.",
    error: "Submission failed. Please try again later.",
    invalid: "Enter a valid email address.",
    // Replace with your real endpoint:
    formAction: "/api/earlyAccess",
  },
  faq: [
    {
      q: "Is this official?",
      a: "No. It’s a community project, not affiliated with Home Assistant or Nabu Casa. Names/logos are trademarks.",
    },
    {
      q: "How is the score calculated?",
      a: "We combine recency and community reactions (forum likes/replies/views, GitHub stars) with outlier‑resistant math. It’s an indicator, not a guarantee. This is not definitive.",
    },
    {
      q: "How is this different from HACS?",
      a: "HACS handles distribution/installation. This project focuses on cross‑source discovery and trust signals.",
    },
    {
      q: "One‑click import doesn’t open on my setup.",
      a: "Some setups/browsers block My Home Assistant deep‑links. Manual import: Settings → Automations & Scenes → Blueprints → Import → paste the blueprint URL. This is not definitive.",
    },
    {
      q: "What data do you collect?",
      a: "Aggregate usage only (search terms, import clicks). No personal data.",
    },
    {
      q: "What’s on the roadmap?",
      a: "Semi‑automated crawl → richer tags/categories → maintainability signals → public API.",
    },
  ],
  footer: {
    legal: [
      "Metrics are indicative only. This is not definitive.",
      "Home Assistant® is a trademark of Nabu Casa, Inc.",
      "We link to author pages; we don’t host or redistribute Blueprints.",
    ],
  },
};
