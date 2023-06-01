"use client";

import LoadedResults from "@/layouts/Searchresults/loadedResults/LoadedResults";
import LoadingResults from "@/layouts/Searchresults/loadingResults/LoadingResults";
import NoResults from "@/layouts/Searchresults/noResults/NoResults";
import Search from "@/layouts/search/Search";
import Welcome from "@/layouts/welcome/Welcome";
import { SearchWord } from "@/lib/api/DictionaryApi";

export default function Home() {
  const { status, result, handleSearch } = SearchWord();

  const submitSearch = (word: string) => {
    handleSearch(word);
  };

  return (
    <div>
      <Search
        submitSearch={submitSearch}
        disabled={status === "loading" ? true : false}
      />
      {status === "idle" && <Welcome />}
      {status === "error" && <NoResults />}
      {status === "loading" && <LoadingResults />}
      {status === "success" && <LoadedResults result={result} />}
    </div>
  );
}
