"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-1/2 z-50 mt-2 w-[calc(100%-1rem)] max-w-4xl -translate-x-1/2 rounded-full border border-border/60 bg-background/80 p-2 backdrop-blur-sm md:w-full md:p-1"
    >
      <div className="flex items-center justify-between gap-2">
        <Link href="/" className="text-2xl ml-2 font-pacifico">
        shakur<span className="text-[#FF6A1C]">.</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-border/60 p-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({
                    variant: active ? "secondary" : "ghost",
                    size: "sm",
                  }),
                  "rounded-full",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle compact />
          <a
            href="/shirajul-islam-shakur-cv.pdf"
            download
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full text-sm",
            )}
          >
            <Download aria-hidden="true" />
            <span>CV</span>
          </a>
        </div>

        <div className="relative flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full border-border/60 bg-background/90"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>

          {menuOpen ? (
            <div
              id="mobile-navigation-menu"
              className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-md"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        buttonVariants({
                          variant: active ? "secondary" : "ghost",
                          size: "sm",
                        }),
                        "w-full justify-start rounded-xl",
                        active ? "text-foreground" : "text-muted-foreground",
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <a
                  href="/shirajul-islam-shakur-cv.pdf"
                  download
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mt-1 w-full justify-start rounded-xl text-sm",
                  )}
                >
                  <Download aria-hidden="true" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
