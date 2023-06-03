import WordMeaning from "@/components/SearchResults/wordMeaning/WordMeaning";
import PlayAudioButton from "@/components/buttons/audio/PlayAudioButton";
import Image from "next/image";
import styles from "./LoadedResults.module.css";

export default function LoadedResults({ result, handleClick }: any) {
  let word: string = "",
    phonetic: string = "",
    url: string = "";

  const audioLink: string[] = [];

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
      phonetics,
    } = result[0];

    word = firstWord;
    phonetic = firstPhonetic;
    url = sourceUrls[0];

    if (phonetics) {
      phonetics.forEach((phonetic: any) => {
        const { audio } = phonetic;
        if (audio) {
          audioLink.push(audio);
        }
      });
    }

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
    if (partsOfSpeechMeanings[partOfSpeech].length > 0) {
      return (
        <div key={index}>
          <div className={styles.partofspeech}>
            <h2>{partOfSpeech}</h2>
            <div />
          </div>
          <WordMeaning meanings={meanings} handleClick={handleClick} />
        </div>
      );
    }
    return;
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainword}>
          <h1>{word}</h1>
          {phonetic && <p className={styles.phonetic}>{phonetic}</p>}
        </div>
        {audioLink.length > 0 && <PlayAudioButton audioLinks={audioLink} />}
      </div>
      {definitionMeaning}
      <div className={styles.linkLine} />
      <a href={url} rel="noopener noreferrer" target="_blank">
        <span className={`${styles.source} ${styles.link}`}>Source</span>
        <span className={styles.link}>{url}</span>
        <Image
          src={"./assets/images/icons/icon-new-window.svg"}
          alt={"Open link in new window"}
          width={13}
          height={13}
          className={styles.icon}
        />
      </a>
    </div>
  );
}
