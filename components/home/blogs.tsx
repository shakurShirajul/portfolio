import BlogCard from "../shared/blog-card";
import { Card } from "../ui/card";

export default function Blogs() {

  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Blogs</h1>
      <div className="py-8 sm:py-10">
        <div className="grid grid-cols-3 gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </Card>
  );
}
