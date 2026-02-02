import { LucideMail, LucideMapPin, LucidePhone } from "lucide-react";

import data from "../../lib/data.json";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Kbd } from "../ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Work {
  logo: string;
  company: string;
  role: string;
  link: string;
  start: string;
  end: string;
}

interface Education {
  logo: string;
  institution: string;
  degree: string;
  start: string;
  end: string;
  link: string;
}

export default function Sidebar() {
  const { work, education, socials } = data;

  return (
    <aside className="col-span-2 space-y-5">
      <Card className="w-full">
        <CardHeader className="">
          <CardTitle>Public Profile</CardTitle>
          <Separator className="my-1" />
          <CardDescription className="flex items-center gap-2">
            {socials.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger>
                  <Link href={social.link} target="_blank">
                    <Image
                      src={social.logo}
                      width={40}
                      height={40}
                      alt={social.name}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <Separator className="my-1" />
          <CardDescription className="space-y-2">
            <p className="flex items-center gap-2">
              <Kbd>
                <LucideMapPin size={18} />
              </Kbd>
              Lives in Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Kbd>
                <LucideMail size={18} />
              </Kbd>
              <a
                href="mailto:siirajulisllam@gmail.com"
                className="hover:underline"
              >
                siirajulisllam@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Kbd>
                <LucidePhone size={18} />
              </Kbd>
              +8801747493837
            </p>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <Separator className="my-1" />
          {work.map((item: Work, index: number) => (
            <div key={index} className="flex gap-2 items-center">
              <Link href={item.link} target="_blank">
                <Image
                  src={item.logo}
                  alt={item.company}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
              </Link>
              <div>
                <Link
                  href={item.link}
                  className="font-semibold"
                  target="_blank"
                >
                  {item.company}
                </Link>
                <p className="text-xs font-medium">{item.role}</p>
                <p className="text-xs">
                  {item.start} - {item.end}
                </p>
              </div>
            </div>
          ))}
          <CardTitle>Education</CardTitle>
          <Separator className="my-1" />
          {education.map((item: Education, index: number) => (
            <div key={index} className="flex gap-2 items-center">
              <Link href={item.link} target="_blank">
                <Image
                  src={item.logo}
                  alt={item.institution}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
              </Link>
              <div>
                <Link
                  href={item.link}
                  className="font-semibold"
                  target="_blank"
                >
                  {item.institution}
                </Link>
                <p className="text-xs font-medium">{item.degree}</p>
                <p className="text-xs">
                  {item.start} - {item.end}
                </p>
              </div>
            </div>
          ))}
        </CardHeader>
      </Card>
    </aside>
  );
}
