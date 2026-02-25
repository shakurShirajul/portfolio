import Image from "next/image";
import { Card } from "../ui/card";
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
        <div className="px-5 ">
          <h1 className="text-lg  playfair-display sm:text-xl md:text-2xl lg:text-3xl flex flex-wrap items-center gap-1.5 sm:gap-2 font-semibold">
            Shirajul Islam Shakur
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-4.5 text-info select-none "
                aria-label="Verified"
              >
                <path
                  fill="blue"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                ></path>
              </svg>
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
