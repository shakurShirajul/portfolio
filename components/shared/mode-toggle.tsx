"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Kbd } from "../ui/kbd";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = (): void => {
    const audio = new Audio('/sound/toggle-button.mp3');
    audio.play().catch(console.error);
    setTheme(theme && theme === "light" ? "dark" : "light");
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" onClick={() => toggleTheme()}>
          <p>{theme && theme === "light" ? <LucideSun /> : <LucideMoon />}</p>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          Toggle Mode <Kbd>D</Kbd>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
