import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { stacks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Stacks() {
  return (
    <section
      aria-labelledby="technologies-heading"
      className="max-w-4xl mx-auto w-full mt-10 px-4 md:px-8 space-y-4"
    >
      <h2
        id="technologies-heading"
        className="font-gabarito text-2xl font-semibold"
      >
        Technologies I Use
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {stacks.map((stack) => (
          <Tooltip key={stack.name}>
            <TooltipTrigger
              render={
                <Link
                  href={stack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 active:scale-95"
                />
              }
            >
              <Image
                src={stack.logo}
                alt={stack.name}
                width={48}
                height={48}
                loading="lazy"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                quality={80}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="merriweather">{stack.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
