import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.description,
    alternates: { canonical: `/blogs/${blog.slug}` },
    authors: [{ name: blog.author, url: SITE_URL }],
    openGraph: {
      type: "article",
      url: `/blogs/${blog.slug}`,
      title: blog.title,
      description: blog.description,
      publishedTime: blog.publishedAt,
      authors: [blog.author],
      images: [{ url: blog.thumbnail, alt: blog.thumbnailAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.thumbnail],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) notFound();

  const articleUrl = `${SITE_URL}/blogs/${blog.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      image: blog.thumbnail,
      datePublished: blog.publishedAt,
      mainEntityOfPage: articleUrl,
      author: { "@type": "Person", name: blog.author, url: SITE_URL },
      publisher: { "@type": "Person", name: blog.author, url: SITE_URL },
    },
    ...(blog.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: blog.faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]
      : []),
  ];

  const publishedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(blog.publishedAt));

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-20 pt-28 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Link
        href="/blogs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All articles
      </Link>

      <article className="mt-8">
        <header>
          <p className="text-sm font-medium text-[#D94F00]">{blog.category}</p>
          <h1 className="mt-3 font-gabarito text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {blog.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-2 text-sm text-muted-foreground">
            <span>By {blog.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={blog.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{blog.readingTime}</span>
          </div>
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border">
            <Image
              src={blog.thumbnail}
              alt={blog.thumbnailAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </header>

        <div
          className="mt-10 space-y-6 text-[1.05rem] leading-8 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:pt-6 [&_h2]:font-gabarito [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-foreground [&_li]:ml-5 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {blog.faqs.length > 0 ? (
          <section
            aria-labelledby="frequently-asked-questions"
            className="mt-12 space-y-6 text-[1.05rem] leading-8 text-muted-foreground"
          >
            <h2
              id="frequently-asked-questions"
              className="font-gabarito text-2xl font-semibold text-foreground"
            >
              Frequently asked questions
            </h2>
            {blog.faqs.map((item) => (
              <div key={item.question}>
                <h3 className="font-gabarito text-xl font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-2">{item.answer}</p>
              </div>
            ))}
          </section>
        ) : null}
      </article>
    </div>
  );
}
