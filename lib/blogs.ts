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
  readingTime: string;
  category: string;
  thumbnail: string;
  thumbnailAlt: string;
  content: string;
  faqs: BlogFaq[];
}

export const blogs: Blog[] = blogData;
