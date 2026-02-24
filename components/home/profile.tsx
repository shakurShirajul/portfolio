import Image from "next/image";
import { Card } from "../ui/card";
import { LucideVerified } from "lucide-react";
import PersonalDetails from "../shared/personal-details";
import PublicProfile from "../shared/public-profile";
import Experience from "../shared/experience";
import About from "./about";

export default function Profile() {
  return (
    <div>
      <Card className="relative pt-0 overflow-hidden">
        <Image
          alt="Abstract technology background with circuit board patterns"
          src="https://images.unsplash.com/photo-1662116137244-b7c6fdc1ac35?q=75&w=800&auto=format&fit=crop"
          width={800}
          height={180}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 800px"
          quality={75}
          className="relative z-20 h-28 sm:h-32 md:h-36 lg:h-40 w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
        />
        <Image
          src="https://res.cloudinary.com/djlqvqxao/image/upload/w_256,h_256,c_fill,f_auto,q_auto:good,fl_force_strip/v1769829077/ChatGPT_Image_Jan_24_2026_12_35_50_PM_e14fpa.png"
          alt="Shirajul Islam Shakur - Profile Picture"
          width={128}
          height={128}
          priority
          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
          quality={90}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 ml-4 sm:ml-5 md:ml-6 object-cover z-100"
        />
        <div className="px-5">
          <h1 className="text-lg playfair-display sm:text-xl md:text-2xl lg:text-3xl flex flex-wrap items-center gap-1.5 sm:gap-2 font-semibold">
            Shirajul Islam Shakur
            <span className="flex items-center">
              <LucideVerified className="text-blue-500 stroke-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </span>
          </h1>
          <p className="text-xs merriweather sm:text-sm md:text-base mt-1 text-muted-foreground">
            Fullstack Developer || Competitive Programmer || Tech Enthusiast
          </p>
        </div>
      </Card>
      {/* This section will be shown on mobile and tablet */}
      <div className="space-y-5 mt-5 lg:hidden">
        <About />
        <PublicProfile />
        <PersonalDetails />
        <Experience />
      </div>
    </div>
  );
}
