import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogsPage() {
    return (
       <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background">
            <div
                className={cn(
                    "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]",
                    "bg-size-[44px_44px]",
                )}
            />
            <div className="relative z-10 flex flex-col items-center pwx-6 text-center">
                <p className="font-pacifico text-5xl leading-none text-foreground">
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
