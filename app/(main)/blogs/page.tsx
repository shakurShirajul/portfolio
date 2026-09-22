import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

const description =
  "Articles by Shirajul Islam Shakur about full-stack development, programming, practical projects, and lessons from a developer's journey.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Blog",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description,
  },
};

export default function BlogsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog",
      description,
      url: `${SITE_URL}/blogs`,
      author: { "@id": `${SITE_URL}/#person` },
      blogPost: blogs.map((blog) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        url: `${SITE_URL}/blogs/${blog.slug}`,
        datePublished: blog.publishedAt,
        image: blog.thumbnail,
        author: { "@id": `${SITE_URL}/#person` },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blogs`,
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-32 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="max-w-2xl space-y-3">
        <h1 className="font-gabarito text-4xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="text-muted-foreground">
          Notes on full-stack development, problem-solving, and lessons learned
          while building real software.
        </p>
      </header>

      <section aria-labelledby="latest-articles" className="mt-10">
        <h2 id="latest-articles" className="sr-only">
          Latest articles
        </h2>
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="overflow-hidden rounded-2xl border bg-card"
          >
            <Link href={`/blogs/${blog.slug}`} className="group md:flex">
              <div className="relative aspect-video md:w-2/5 md:shrink-0">
                <Image
                  src={blog.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <time
                  dateTime={blog.publishedAt}
                  className="text-sm text-muted-foreground"
                >
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                    timeZone: "UTC",
                  }).format(new Date(blog.publishedAt))}
                </time>
                <h3 className="mt-2 font-gabarito text-2xl font-semibold leading-tight">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {blog.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  Read article <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
