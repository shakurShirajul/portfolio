import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogsPage() {
    return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8">
            <div
                className={cn(
                    "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]",
                    "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]",
                    "bg-size-[44px_44px]",
                )}
            />
            <div className="relative z-10 flex max-w-2xl flex-col items-center px-2 text-center sm:px-4">
                <p className="font-pacifico text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                    Delicious content is simmering. Check back soon!
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
