"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between max-w-4xl w-full mt-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
      <Link href="/" className="text-2xl font-pacifico">
        shakur<span className="text-[#FF6A1C]">.</span>
      </Link>
      <div className="flex items-center gap-2 border rounded-full p-1">
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
    </div>
  );
}
