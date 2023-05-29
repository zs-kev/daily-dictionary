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

  const moonSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}>
      <path
        className={styles.stroke}
        fill="none"
        stroke="#838383"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );

  return (
    <header className={styles.container}>
      <Image
        src="/assets/images/logos/logo.svg"
        alt="Daily Dictionary"
        width="32"
        height="36"
      />
      <div>
        <ToggleSwitch
          onToggle={handleClick}
          checked={themeCheck}
          contentRight={moonSvg}
          contentMargin={1}
        />
      </div>
    </header>
  );
}
