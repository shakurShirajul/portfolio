import { Blog } from "@/types";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blogs/${blog.slug}`} className="block">
      <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/30 p-0">
        <div className="relative overflow-hidden block">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 block"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
            Read More <ArrowRight className="w-3 h-3" />
          </div>
        </div>
        <CardHeader className="pb-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground pb-2">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={blog.date}>{formattedDate}</time>
          </div>
          <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors duration-200">
            {blog.title}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
