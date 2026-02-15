import { Card } from "../ui/card";

export default function Blogs() {
  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
        Blogs
      </h1>
      <div className="py-8 sm:py-10">
        <p className="text-center text-sm sm:text-base text-muted-foreground">
          Coming Soon
        </p>
      </div>
    </Card>
  );
}
