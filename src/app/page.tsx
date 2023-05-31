"use client";

import NoResults from "@/layouts/Searchresults/noResults/NoResults";
import Search from "@/layouts/search/Search";
import { SearchWord } from "@/lib/api/DictionaryApi";

export default function Home() {
  const { status, result, handleSearch } = SearchWord();

  const submitSearch = (word: string) => {
    handleSearch(word);
  };

  console.log(result);
  console.log(status);

  return (
    <div>
      <Search submitSearch={submitSearch} />
      {status === "error" && <NoResults />}
    </div>
  );
}
