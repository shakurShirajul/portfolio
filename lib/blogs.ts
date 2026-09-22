import blogData from "@/lib/blogs.json";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface Blog {
  title: string;
  seoTitle: string;
  slug: string;
  description: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  /** ISO date of the last substantive edit. Feeds schema dateModified. */
  updatedAt?: string;
  readingTime: string;
  category: string;
  /** Optional. Posts without one fall back to the site's default OG card. */
  thumbnail?: string;
  thumbnailAlt?: string;
  content: string;
  faqs: BlogFaq[];
}

/** Newest first, so the index and sitemap do not depend on hand-ordering. */
export const blogs: Blog[] = [...blogData].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
