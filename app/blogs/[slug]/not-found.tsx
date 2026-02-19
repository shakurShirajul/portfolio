import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen flex items-center justify-center">
      <Card className="p-8 sm:p-12 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-muted p-6">
            <FileQuestion className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Blog Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/blogs">
          <Button className="group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Button>
        </Link>
      </Card>
    </div>
  );
}
