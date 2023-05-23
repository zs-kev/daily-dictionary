"use client";

import ToggleSwitch from "@/components/toggles/toggleSwitch/ToggleSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div></div>;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  let themeCheck = currentTheme === "dark" ? true : false;

  const handleClick = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      themeCheck = false;
    } else {
      setTheme("dark");
      themeCheck = true;
    }
  };

  return (
    <header>
      <ToggleSwitch onToggle={handleClick} checked={themeCheck} />
    </header>
  );
}
