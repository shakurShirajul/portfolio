import BlogCard from "../shared/blog-card";
import { Card } from "../ui/card";
import blogs from "../../lib/blogs.json";
import { Blog } from "@/types";
export default function Blogs() {
  console.log(blogs);

  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold playfair-display">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Card>
  );
}
