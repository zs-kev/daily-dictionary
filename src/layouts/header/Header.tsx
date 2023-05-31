"use client";

import ToggleSwitch from "@/components/toggles/toggleSwitch/ToggleSwitch";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import Dropdown from "@/components/dropdowns/dropdown/Dropdown";
import styles from "./Header.module.css";

const options = [
  { label: "Sans Serif", value: "sans-serif", class: styles.sans },
  { label: "Serif", value: "serif", class: styles.serif },
  { label: "Mono", value: "mono", class: styles.mono },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const currentFont = localStorage.getItem("font");
      const option = options.find((option) => option.value === currentFont);
      if (option) {
        setValue(option);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof value === "object") {
      handleFontChange(value.value);
      handleSave(value.value);
    }
  }, [value]);

  const handleSave = (font: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("font", font);
    }
  };

  const handleFontChange = (font: string) => {
    const globalFont = "--global-font-family";
    const globalFontItalic = "--global-font-family-italic";

    if (font === "sans-serif") {
      document.documentElement.style.setProperty(
        globalFont,
        "var(--sans-serif)"
      );
      document.documentElement.style.setProperty(
        globalFontItalic,
        "var(--sans-serif)"
      );
    } else if (font === "serif") {
      document.documentElement.style.setProperty(globalFont, "var(--serif)");
      document.documentElement.style.setProperty(
        globalFontItalic,
        "var(--serif-italic)"
      );
    } else if (font === "mono") {
      document.documentElement.style.setProperty(globalFont, "var(--mono)");
      document.documentElement.style.setProperty(
        globalFontItalic,
        "var(--mono)"
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className={styles.container}>
        <Image
          src="/assets/images/logos/logo.svg"
          alt="Daily Dictionary"
          width="32"
          height="36"
        />
      </header>
    );
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
      <div className={styles.wrapper}>
        <Dropdown
          options={options}
          value={value}
          onChange={(option) => setValue(option)}
        />
        <div className={styles.divider} />
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
