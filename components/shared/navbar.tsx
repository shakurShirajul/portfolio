"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-1/2 z-50 mt-2 w-[calc(100%-1rem)] max-w-4xl -translate-x-1/2 rounded-full border border-border/60 bg-background/80 p-2 backdrop-blur-sm md:w-full md:p-1">
      <div className="flex items-center justify-between gap-2">
        <Link href="/" className="text-2xl ml-2 font-pacifico">
        shakur<span className="text-[#FF6A1C]">.</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-border/60 p-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <Button
                  variant={active ? "secondary" : "ghost"}
                  className={`rounded-full ${active ? "text-foreground" : "text-muted-foreground"}`}
                  size="sm"
                >
                  {link.name}
                </Button>
              </Link>
            );
          })}
          <Button className="rounded-full text-sm" size="sm">
            <Download />
            <span>CV</span>
          </Button>
        </div>

        <div className="relative md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-full border-border/60 bg-background/90"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>

          {menuOpen ? (
            <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-md">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link key={link.name} href={link.href}>
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        className={`w-full justify-start rounded-xl ${active ? "text-foreground" : "text-muted-foreground"}`}
                        size="sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  );
                })}
                <Button className="mt-1 w-full justify-start rounded-xl text-sm" size="sm">
                  <Download />
                  <span>CV</span>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
