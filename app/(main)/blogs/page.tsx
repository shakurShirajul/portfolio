import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Shirajul Islam Shakur about full-stack development, programming, practical projects, and lessons from a developer's journey.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-32 md:px-8">
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
                <h2 className="mt-2 font-gabarito text-2xl font-semibold leading-tight">
                  {blog.title}
                </h2>
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
