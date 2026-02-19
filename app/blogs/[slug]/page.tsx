import blogs from "@/lib/blogs.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const plainTextContent = blog.content
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return {
    title: blog.title,
    description: plainTextContent,
    openGraph: {
      title: blog.title,
      description: plainTextContent,
      url: `https://shakurshirajul.com/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      images: [
        {
          url: blog.thumbnail,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: plainTextContent,
      images: [blog.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.thumbnail,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: "Shirajul Islam Shakur",
      url: "https://shakurshirajul.com",
    },
    publisher: {
      "@type": "Person",
      name: "Shirajul Islam Shakur",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-4xl mx-auto min-h-screen">
        <div className="space-y-4 sm:space-y-6">
          {/* Back Navigation */}
          <Link className="cursor-pointer" href="/blogs">
            <Button
              variant="ghost"
              size="sm"
              className="group -ml-2 hover:bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blogs
            </Button>
          </Link>

          {/* Blog Content Card */}
          <div className="p-6 sm:p-8 md:p-10">
            <article>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 sm:mb-8">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.date}>{formattedDate}</time>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] mb-6 sm:mb-8 rounded-lg overflow-hidden">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                />
              </div>

              {/* Blog Content */}
              <div
                className="text-xl prose prose-neutral dark:prose-invert prose-sm sm:prose-base md:prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-justify prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:font-semibold prose-strong:text-foreground
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border
                  prose-img:rounded-lg prose-img:shadow-md
                  prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic
                  prose-ul:list-disc prose-ol:list-decimal
                  prose-li:marker:text-primary"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </div>

          {/* Back to Blogs Footer */}
          {/* <div className="flex justify-center pb-4">
            <Link href="/blogs">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                View All Blogs
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
