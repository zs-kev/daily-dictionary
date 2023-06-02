import WordMeaning from "@/components/SearchResults/wordMeaning/WordMeaning";
import Link from "next/link";
import styles from "./LoadedResults.module.css";

export default function LoadedResults({ result, handleClick }: any) {
  let word: string = "",
    phonetic: string = "",
    url: string = "";

  const partsOfSpeechMeanings: Record<string, any[]> = {
    noun: [],
    pronoun: [],
    verb: [],
    adjective: [],
    adverb: [],
    preposition: [],
    conjunction: [],
    interjection: [],
  };

  const partsOfSpeech = [
    "noun",
    "pronoun",
    "verb",
    "adjective",
    "adverb",
    "preposition",
    "conjunction",
    "interjection",
  ];

  if (Array.isArray(result) && result.length > 0) {
    const {
      word: firstWord,
      phonetic: firstPhonetic,
      sourceUrls,
      meanings,
    } = result[0];

    word = firstWord;
    phonetic = firstPhonetic;
    url = sourceUrls[0];

    if (meanings) {
      meanings.forEach((meaning: any) => {
        const { partOfSpeech, definitions, synonyms, antonyms } = meaning;

        if (
          Object.prototype.hasOwnProperty.call(
            partsOfSpeechMeanings,
            partOfSpeech
          )
        ) {
          const meaningData = definitions.map((definition: any) => ({
            definition: definition.definition,
            example: definition.example || [],
          }));
          partsOfSpeechMeanings[partOfSpeech].push({
            meanings: meaningData,
            synonyms,
            antonyms,
          });
        }
      });
    }
  }

  const definitionMeaning = partsOfSpeech.map((partOfSpeech, index) => {
    const meanings = partsOfSpeechMeanings[partOfSpeech];

    return (
      <div key={index}>
        <h2>
          {partsOfSpeechMeanings[partOfSpeech].length > 0 && partOfSpeech}
        </h2>
        <WordMeaning meanings={meanings} handleClick={handleClick} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>{word}</h1>
          <p className={styles.phonetic}>{phonetic}</p>
        </div>
        {definitionMeaning}
      </div>
      <Link href={url}>
        Source <span>{url}</span>
      </Link>
    </div>
  );
}
