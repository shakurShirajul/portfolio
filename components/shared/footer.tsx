import { Download } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { navLinks, socials } from "@/lib/data";
import Link from "next/link";
import { Social } from "@/shared/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-6 max-w-4xl mx-auto w-full px-4 md:px-8 mt-10">
      <div className="flex justify-between items-start"> 
        <div className="font-gabarito space-y-5">
          <h5>Shirajul Islam Shakur</h5>
          <ul className="flex text-sm gap-4 text-muted-foreground">
            {
              navLinks.map((navLink)=>
                <li key={navLink.name}>
                  <Link href={navLink.href} className="hover:underline">
                    {navLink.name}
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex text-sm gap-2">
                {
                  socials.map((social: Social)=>
                    <Link key={social.name} href={social.link} target="_blank" className="transition-transform hover:scale-110 active:scale-95">
                      <Image src={social.logo} alt={social.name} width={20} height={20}/>
                    </Link>
                  )
                }
            </div>
            <a
              href="/shirajul-islam-shakur-cv.pdf"
              download
              className={cn(buttonVariants({ size: "sm" }), "rounded-full text-sm")}
            >
                <Download aria-hidden="true" />
                <span>CV</span>
            </a>
        </div>
      </div>
      <div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Shirajul Islam Shakur. All rights
          reserved.{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
