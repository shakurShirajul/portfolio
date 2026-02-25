
import blogs from "@/lib/blogs.json";
import BlogCard from "@/components/shared/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Shakur Shirajul",
  description: "Read technical articles, developer stories, and web development tips by Shakur Shirajul. Explore MERN stack, WordPress, and more.",
  keywords: [
    "full stack developer",
    "self taught developer",
    "web development",
    "MERN stack",
    "WordPress",
    "competitive programming",
    "portfolio",
    "Shakur Shirajul",
  ],
  openGraph: {
    title: "Blogs | Shakur Shirajul",
    description: "Read technical articles, developer stories, and web development tips by Shakur Shirajul. Explore MERN stack, WordPress, and more.",
    url: "https://shakurshirajul.com/blogs",
    images: blogs.map((blog) => ({
      url: blog.thumbnail,
      width: 1200,
      height: 630,
      alt: blog.title,
    })),
  },
  alternates: {
    canonical: "https://shakurshirajul.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold playfair-display">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}