"use client";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Kbd } from "../ui/kbd";
import { LuMoon, LuSun } from "react-icons/lu";
import { LucideMoon, LucideSun } from "lucide-react";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (): void => {
    const audio = new Audio('/sound/toggle-button.mp3');
    audio.volume = 0.1;
    audio.play().catch(console.error);
    setTheme(theme && theme === "light" ? "dark" : "light");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild suppressHydrationWarning>
        <Button 
          variant="ghost" 
          onClick={() => toggleTheme()}
          className="h-9 sm:h-10 w-9 sm:w-10 p-0"
        >
          <span className="flex items-center justify-center">
            {theme === "light" && theme ? (
              <LucideSun size={16} />
            ) : (
              <LucideMoon size={16} />
            )}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs sm:text-sm">
          Toggle Mode <Kbd className="text-xs">D</Kbd>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
