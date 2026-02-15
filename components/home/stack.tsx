import Link from "next/link";
import { Card } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import data from "../../lib/data.json";

export default function Stack() {
  const { stack } = data;
  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
        Stack
      </h1>
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center items-center">
        {stack.map((tech) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <Link
                href={tech.link}
                target="_blank"
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Card>
  );
}
