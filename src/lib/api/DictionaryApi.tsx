import { useState } from "react";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function SearchWord() {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState<unknown | null>(null);

  async function getResult(word: string) {
    setStatus("loading");
    const response = await fetch(url + word);

    if (!response.ok) {
      setStatus("error");
      return;
    }

    const json = await response.json();
    setResult(json);
    setStatus("success");
  }

  function handleSearch(word: string) {
    getResult(word);
  }

  return { status, result, handleSearch };
}
