import { educations } from "@/lib/data";
import Image from "next/image";

export default function Educations() {
  return (
    <section
      aria-labelledby="education-heading"
      className="max-w-4xl mx-auto w-full mt-10 px-4 md:px-8"
    >
      <h2 id="education-heading" className="font-gabarito text-2xl font-semibold">
        Education
      </h2>
      <div>
        {educations.map((education, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-2 mt-4"
          >
            <div className="flex flex-row gap-2 items-start w-full">
              <Image
                src={education.logo}
                alt={education.institution}
                width={40}
                height={40}
                className="rounded-lg"
              />{" "}
              <div className="flex justify-between w-full">
                <div className="grid grid-cols-1">
                  <h3 className="font-semibold text-sm md:text-base">
                    {education.degree}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {education.institution}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {education.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
