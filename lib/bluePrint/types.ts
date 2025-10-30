export type Metrics = {
  gistStars?: number;
  replies?: number;
  likes?: number;
  views?: number;
};

export type Blueprint = {
  id: string;
  title: string;
  description: string;
  author: string;
  categories: string[];
  forumUrl?: string;
  docsUrl?: string;
  blueprintUrl?: string; // raw YAML or gist URL
  repoUrl?: string;
  lastUpdated?: string; // ISO
  tags: string[];
  metrics?: Metrics;
};
