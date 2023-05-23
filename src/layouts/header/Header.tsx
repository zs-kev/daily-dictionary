"use client";

import ToggleSwitch from "@/components/toggles/toggleSwitch/ToggleSwitch";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

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
    <header className={styles.container}>
      <Image
        src="/assets/images/logos/logo.svg"
        alt="Daily Dictionary"
        width="32"
        height="36"
      />
      <div>
        <ToggleSwitch onToggle={handleClick} checked={themeCheck} />
      </div>
    </header>
  );
}
