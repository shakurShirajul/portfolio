"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import { LucideVerified } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import data from "../../lib/data.json";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

export default function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  const { stack } = data;
  return (
    <div className="col-span-4 ">
      {isLoading ? (
        <Card className="pt-0">
          <Skeleton className="w-full h-40 rounded-t-xl" />
          <Skeleton className="w-32 h-32 -mt-16 ml-6 rounded-2xl z-100" />
          <div className="ml-6">
            <h1 className="text-3xl flex items-center gap-2 font-semibold">
              Shirajul Islam Shakur
              <span>
                <LucideVerified className="text-blue-500 stroke-blue-500" />
              </span>
            </h1>
            <p>
              Fullstack Developer || Competitive Programmer || Tech Enthusiast
            </p>
          </div>
        </Card>
      ) : (
        <div>
          <Card className="relative pt-0">
            <Image
              alt="cover-photo"
              src="https://images.unsplash.com/photo-1662116137244-b7c6fdc1ac35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={677}
              height={160}
              className="relative z-20 h-40 w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
            />
            <Image
              src="https://res.cloudinary.com/djlqvqxao/image/upload/f_auto,fl_force_strip/v1769829077/ChatGPT_Image_Jan_24_2026_12_35_50_PM_e14fpa.png"
              alt="Shakur"
              width={128}
              height={128}
              className="w-32 h-32 rounded-2xl -mt-16 ml-6 object-cover z-100"
            />
            <div className="ml-6 ">
              <h1 className="text-3xl flex items-center gap-2 font-semibold ">
                Shirajul Islam Shakur
                <span>
                  <LucideVerified className="text-blue-500 stroke-blue-500" />
                </span>
              </h1>
              <p>
                Fullstack Developer || Competitive Programmer || Tech Enthusiast
              </p>
            </div>
            <div className="mx-6">
              <h1 className="text-2xl font-semibold">Stack</h1>
              <div className="flex flex-wrap gap-5 justify-center mt-2">
                {stack.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <Link href={tech.link} target="_blank">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={40}
                          height={40}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="mx-6">
              <h1 className="text-2xl font-semibold">Blogs</h1>
              <div></div>
            </div>
          </Card>
          {/* <Card></Card> */}
        </div>
      )}
    </div>
  );
}
