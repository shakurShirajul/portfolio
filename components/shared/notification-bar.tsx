"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="relative overflow-hidden berkshire-swash-regular bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white"
      role="banner"
      aria-label="Ramadan Kareem announcement"
    >
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      
      {/* Structured data for SEO */}
      <script           
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SpecialAnnouncement",
            "name": "Ramadan Kareem 2026",
            "text": "Wishing you a blessed month of peace, reflection, and spiritual growth during Ramadan",
            "datePosted": "2026-02-20",
            "category": "Religious Holiday"
          })
        }}
      />
      
      <div className="relative max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center flex-1 min-w-0">
            <span className="flex p-2 rounded-lg bg-white/10 backdrop-blur-sm animate-pulse">
              <span className="text-2xl animate-bounce" aria-hidden="true" role="img" aria-label="Crescent moon">
                🌙
              </span>
            </span>
            <div className="ml-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-300 animate-spin [animation-duration:3s] hidden sm:block" aria-hidden="true" />
              <p className="font-bold text-sm sm:text-base md:text-xl">
                <span className="inline bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-white to-yellow-200">
                  Ramadan Kareem!
                </span>
                <span className="inline ml-2 font-medium">
                  Wishing you a blessed month of peace, reflection, and spiritual growth
                </span>
                <span className="inline ml-1" role="img" aria-label="mosque and sparkles">
                  🕌✨
                </span>
              </p>
              <Sparkles className="h-4 w-4 text-yellow-300 animate-spin [animation-duration:3s] hidden sm:block" aria-hidden="true" />
            </div>
          </div>
          <Button
            onClick={() => setIsVisible(false)}
            className="inline-flex items-center justify-center p-1.5 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200 hover:scale-110"
            aria-label="Dismiss Ramadan Kareem announcement"
            type="button"
          >
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}