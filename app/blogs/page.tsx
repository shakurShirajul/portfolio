import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read technical articles and insights on web development, React, Next.js, TypeScript, and software engineering best practices by Shakur Shirajul.',
  openGraph: {
    title: 'Blog | Shakur Shirajul',
    description: 'Technical articles and insights on web development and software engineering.',
    url: 'https://shakurshirajul.com/blogs',
  },
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Blog</h1>
        <div className="py-10 sm:py-16 md:py-20 text-center">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}