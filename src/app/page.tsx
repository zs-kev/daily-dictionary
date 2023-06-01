"use client";

import LoadedResults from "@/layouts/Searchresults/loadedResults/LoadedResults";
import LoadingResults from "@/layouts/Searchresults/loadingResults/LoadingResults";
import Search from "@/layouts/search/Search";
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
      {status === "idle" && <LoadingResults status={"idle"} />}
      {status === "error" && <LoadingResults status={"error"} />}
      {status === "loading" && <LoadingResults status={"loading"} />}
      {status === "success" && <LoadedResults result={result} />}
    </div>
  );
}
