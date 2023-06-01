"use client";

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

  console.log(status);

  return (
    <div>
      <Search
        submitSearch={submitSearch}
        disabled={status === "loading" ? true : false}
      />
      {status === "idle" && <Welcome />}
      {status === "error" && <NoResults />}
      {status === "loading" && <LoadingResults />}
      {status === "success" && (
        <div>
          {Array.isArray(result) && result.length > 0 && (
            <div>
              <p>Word: {result[0]?.word}</p>
              <p>Phonetic: {result[0]?.phonetic}</p>
              {/* Display additional information as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
