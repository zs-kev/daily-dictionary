import Input from "@/components/forms/formFields/input/Input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

export default function Search({
  submitSearch,
  disabled,
  currentSearchWord,
}: {
  submitSearch: any;
  disabled: boolean;
  currentSearchWord: string;
}) {
  const [searchTerm, setSearchTerm] = useState(currentSearchWord);
  const [inputState, setInputState] = useState("idle");

  useEffect(() => {
    setSearchTerm(currentSearchWord);
  }, [currentSearchWord]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim().length === 0) {
      setInputState("error");
      return;
    }
    setInputState("idle");
    submitSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        value={searchTerm}
        name="search"
        placeholder="Search for any word..."
        type="text"
        onChange={handleChange}
        inputState={inputState}
        disabled={disabled}
      >
        <button type="submit" className={styles.button}>
          <Image
            src="/assets/images/icons/icon-search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </button>
      </Input>
    </form>
  );
}
