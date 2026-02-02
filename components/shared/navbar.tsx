import { LucideSearch } from "lucide-react";
import { Button } from "../ui/button";
import ModeToggle from "./mode-toggle";
import { Kbd } from "../ui/kbd";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-5">
      <div className="flex justify-end gap-2 items-center">
          <Link href="/" className="">
            Portfolio
          </Link>
          <Link href="/blogs">
            Blog
          </Link>
        <Button variant="outline" className="rounded-xl">
          <LucideSearch />
          <Kbd className="ml-1">⌘ K</Kbd>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
