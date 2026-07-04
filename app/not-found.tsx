import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background">
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]",
          "bg-size-[44px_44px]",
        )}
      />
      <div className="relative z-10 flex flex-col items-center pwx-6 text-center">
        <p className="font-pacifico text-7xl leading-none text-foreground sm:text-8xl ">
          404
        </p>
        <h1 className="font-gabarito mt-6 text-2xl font-semibold tracking-tight text-foreground">
          This page took a different path
        </h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-6 rounded-full",
          )}
        >
          <ArrowLeft />
          Back home
        </Link>
      </div>
    </div>
  );
}
