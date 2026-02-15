"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function KeyboardShortcut() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    console.log("KeyboardShortcut component mounted, adding listener");
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "D" || e.key === "d") {
        const audio = new Audio("/sound/toggle-button.mp3");
        audio.volume = 0.1; // Set volume (0.0 to 1.0)
        audio.play().catch(console.error);
        setTheme(theme && theme === "light" ? "dark" : "light");
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [setTheme, theme]);
  return <div></div>;
}
