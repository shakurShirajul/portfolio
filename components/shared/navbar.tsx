import { LucideSearch } from "lucide-react";
import { Button } from "../ui/button";
import ModeToggle from "./mode-toggle";
import { Kbd } from "../ui/kbd";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-3 sm:mb-4 md:mb-5">
      <div className="flex justify-between sm:justify-end gap-2 sm:gap-3 items-center flex-wrap">
        <div className="flex gap-3 sm:gap-4 items-center">
          <Link href="/" className="text-sm sm:text-base font-medium inter hover:text-primary transition-colors px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-accent">
            Portfolio
          </Link>
          <Link href="/blogs" className="text-sm sm:text-base font-medium inter hover:text-primary transition-colors px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-accent">
            Blog
          </Link>
        </div>
        <div className="flex gap-1.5 sm:gap-2 items-center">
          <Button variant="outline" className="rounded-xl text-sm sm:text-base h-9 sm:h-10 px-3 sm:px-4">
            <LucideSearch className="w-4 h-4 sm:w-5 sm:h-5" />
            <Kbd className="ml-1 hidden md:inline-flex text-xs">⌘ K</Kbd>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
