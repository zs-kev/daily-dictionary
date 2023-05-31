"use client";

import NoResults from "@/layouts/Searchresults/noResults/NoResults";
import Search from "@/layouts/search/Search";
import { SearchWord } from "@/lib/api/DictionaryApi";

export default function Home() {
  const { status, result, handleSearch } = SearchWord();

  const submitSearch = (word: string) => {
    handleSearch(word);
  };

  console.log(status);

  return (
    <div>
      <Search submitSearch={submitSearch} />
      {status === "error" && <NoResults />}
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
