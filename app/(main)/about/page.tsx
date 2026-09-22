import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import shakur from "../../../public/shakur.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/data";
import { personSchema } from "@/lib/person-schema";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shirajul Islam Shakur is a full-stack developer in Chattogram who builds production software with React, Next.js, TypeScript, Node.js, and Laravel — including Bit CRM, a WordPress CRM plugin.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Shirajul Islam Shakur",
    description:
      "Full-stack developer in Chattogram building production software with React, Next.js, TypeScript, Node.js, and Laravel.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shirajul Islam Shakur",
    description:
      "Full-stack developer in Chattogram building production software with React, Next.js, TypeScript, Node.js, and Laravel.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 w-full pt-30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...personSchema,
            mainEntityOfPage: `${SITE_URL}/about`,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex items-center justify-start gap-4">
        <Image
          src={shakur}
          alt="Shirajul Islam Shakur"
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="font-gabarito">
          <h1 className="text-2xl font-semibold tracking-tight">
            Shirajul Islam Shakur
          </h1>
          <p className="text-muted-foreground">
            Full-stack developer · Chattogram, Bangladesh
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-12">
        <p className="max-w-2xl text-lg leading-relaxed text-pretty">
          I build production software that real businesses depend on — most
          recently{" "}
          <Link
            href="/projects/bit-crm"
            className="font-medium underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground"
          >
            Bit CRM
          </Link>
          , a sales CRM plugin published on the WordPress.org directory and
          actively used by businesses running their pipeline on it.
        </p>

        <div className="max-w-2xl space-y-4">
          <h2 className="font-gabarito text-xl font-semibold">How I got here</h2>
          <p className="leading-relaxed text-muted-foreground">
            I started with a simple curiosity about how websites work. That
            turned into competitive programming on Codeforces and Beecrowd,
            where thousands of problems taught me the thing I still lean on
            most: break a hard problem into smaller ones, then stay patient
            until each piece works.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Problem-solving became web development, and small projects became
            full-stack applications. I studied Computer Science and Engineering
            at IIUC, then joined{" "}
            <a
              href="https://bitcode.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground"
            >
              Bit Code
            </a>{" "}
            as a developer — where the work stopped being exercises and started
            being software with users, deadlines, and consequences.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            On Bit CRM I built the plugin dashboard, client portal, invoice
            module, calendar, and activity system, and contributed to the visual
            workflow builder and the MCP server that lets the CRM be driven from
            tools like Claude. Shipping a React application inside the WordPress
            admin — an environment you do not control — taught me more about
            pragmatic engineering than any tutorial could.
          </p>
        </div>

        <div className="max-w-2xl space-y-4">
          <h2 className="font-gabarito text-xl font-semibold">How I work</h2>
          <p className="leading-relaxed text-muted-foreground">
            I care about code that the next person can read, state that stays
            predictable as a codebase grows, and interfaces that work on a phone
            and in dark mode because someone will use them that way. I would
            rather ask a clarifying question early than build the wrong thing
            well.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Day to day I work with <strong>React, Next.js, and TypeScript</strong>{" "}
            on the front end, <strong>Node.js, Express, PHP, and Laravel</strong>{" "}
            on the back end, and <strong>MongoDB and MySQL</strong> for data.
            Away from the keyboard I am usually gaming or reading — both are
            good at teaching you to look at a problem from an angle you had not
            considered.
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-2xl space-y-4 border-t pt-8 pb-16">
        <h2 className="font-gabarito text-xl font-semibold">Get in touch</h2>
        <p className="leading-relaxed text-muted-foreground">
          I am open to full-stack roles and freelance work. If you are building
          something and think I could help, I would like to hear about it.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/#contact"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-4")}
          >
            <Mail aria-hidden="true" />
            Send a message
          </Link>
          <a
            href="/shirajul-islam-shakur-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-4",
            )}
          >
            <FileText aria-hidden="true" />
            Download CV
          </a>
        </div>
        <div className="flex gap-4 pt-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} profile`}
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <Image src={social.logo} alt="" width={32} height={32} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
