"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import { LucideVerified } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import data from "../../lib/data.json";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import PersonalDetails from "../shared/personal-details";
import PublicProfile from "../shared/public-profile";
import Experience from "../shared/experience";

export default function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  const { stack } = data;
  return (
    <div className="col-span-6 lg:col-span-4">
      {isLoading ? (
        <Card className="pt-0">
          <Skeleton className="w-full h-28 sm:h-32 md:h-36 lg:h-40 rounded-t-xl" />
          <Skeleton className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 ml-4 sm:ml-5 md:ml-6 rounded-2xl z-100" />
          <div className="ml-4 sm:ml-5 md:ml-6 pb-4">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center gap-1.5 sm:gap-2 font-semibold">
              Shirajul Islam Shakur
              <span>
                <LucideVerified className="text-blue-500 stroke-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base mt-1">
              Fullstack Developer || Competitive Programmer || Tech Enthusiast
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-5">
          <Card className="relative pt-0 overflow-hidden">
            <Image
              alt="cover-photo"
              src="https://images.unsplash.com/photo-1662116137244-b7c6fdc1ac35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={677}
              height={160}
              className="relative z-20 h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
            />
            <Image
              src="https://res.cloudinary.com/djlqvqxao/image/upload/f_auto,fl_force_strip/v1769829077/ChatGPT_Image_Jan_24_2026_12_35_50_PM_e14fpa.png"
              alt="Shakur"
              width={128}
              height={128}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 ml-4 sm:ml-5 md:ml-6 object-cover z-100"
            />
            <div className="ml-4 sm:ml-5 md:ml-6 pb-4 sm:pb-5 md:pb-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-wrap items-center gap-1.5 sm:gap-2 font-semibold">
                Shirajul Islam Shakur
                <span className="flex items-center">
                  <LucideVerified className="text-blue-500 stroke-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base mt-1 text-muted-foreground">
                Fullstack Developer || Competitive Programmer || Tech Enthusiast
              </p>
            </div>
          </Card>
          {/* This section will be shown on mobile and tablet */}
          <div className="space-y-5 lg:hidden">
            <PublicProfile/>
            <PersonalDetails/>
            <Experience/>
          </div>
          {/* stack sections */}
          <Card className="p-4 sm:p-5 md:p-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Stack</h1>
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
          {/* blogs sections */}
          <Card className="p-4 sm:p-5 md:p-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Blogs</h1>
            <div className="py-8 sm:py-10">
              <p className="text-center text-sm sm:text-base text-muted-foreground">Coming Soon</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
