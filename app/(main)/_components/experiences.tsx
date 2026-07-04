import { experiences } from "@/lib/data";
import Image from "next/image";

export default function Experiences() {
  return (
    <div className="max-w-4xl mx-auto w-full mt-10 px-4 md:px-8">
      <h1 className="font-gabarito text-2xl font-semibold">My Experiences</h1>
      <div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-2 mt-4"
          >
            <div className="flex flex-row gap-2 items-start w-full">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={40}
                height={40}
                className="rounded-lg shrink-0 h-8 w-8 md:h-10 md:w-10"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-2 w-full">
                <div className="grid grid-cols-1">
                  <h2 className="font-semibold text-sm md:text-base">{experience.company}</h2>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {experience.designation}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground md:text-right whitespace-nowrap">
                  {experience.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
