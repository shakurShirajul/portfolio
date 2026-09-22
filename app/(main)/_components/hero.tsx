import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import shakur from "../../../public/shakur.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto flex  w-full max-w-4xl flex-col py-20 px-4 md:px-8">
        <div className="flex flex-1 flex-col-reverse items-center justify-center gap-8 md:flex-row md:justify-between">
          {/* Text content */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-gabarito text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-5xl">
              I<span className="text-[#FF6A1C]">&apos;</span>m <span className="font-pacifico font-normal">Shakur</span>
              <br />
              Full-stack developer
            </h1>

            <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-muted-foreground text-pretty md:mx-0">
              I build production software people actually use — most recently{" "}
              <Link
                href="/projects/bit-crm"
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                Bit CRM
              </Link>
              , a sales CRM plugin published on the WordPress.org directory.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Developer at Bit Code · Chattogram, Bangladesh
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-1 md:justify-start">
              <Link
                href="/#projects"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-4")}
              >
                View Projects
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-4",
                )}
              >
                <Mail aria-hidden="true" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative shrink-0">
            <Image
              src={shakur}
              alt="Shirajul Islam Shakur, full-stack developer"
              width={120}
              height={120}
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
