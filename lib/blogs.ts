import "server-only";

import { cache } from "react";
import { connection } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Blog as PayloadBlog } from "@/shared/payload-types";

function normalizeBlog(blog: PayloadBlog) {
  return {
    ...blog,
    seoTitle: blog.seoTitle?.trim() || blog.title,
    publishedAt: blog.publishedAt || blog.createdAt,
    faqs: blog.faqs ?? [],
  };
}

// Request-time reads make publishes and unpublishes visible without a rebuild.
// React cache deduplicates the article and metadata query within one render only.
export const getPublishedBlogs = cache(async () => {
  await connection();
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "blogs",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    pagination: false,
    depth: 1,
    draft: false,
    overrideAccess: false,
  });

  return docs.map(normalizeBlog);
});

export const getPublishedBlogBySlug = cache(async (slug: string) => {
  await connection();
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "blogs",
    where: {
      and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
    },
    limit: 1,
    depth: 1,
    draft: false,
    overrideAccess: false,
  });

  return docs[0] ? normalizeBlog(docs[0]) : null;
});
