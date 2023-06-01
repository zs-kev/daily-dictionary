import Link from "next/link";
import styles from "./LoadedResults.module.css";

export default function LoadedResults({ result }: any) {
  console.log(result);

  let word,
    phonetic,
    url = "";
  let nounMeanings: any[][] = [];
  let pronounMeanings: any[][] = [];
  let verbMeanings: any[][] = [];
  let adjectiveMeanings: any[][] = [];
  let adverbMeanings: any[][] = [];
  let prepositionMeanings: any[][] = [];
  let conjunctionMeanings: any[][] = [];
  let interjectionMeanings: any[][] = [];

  if (Array.isArray(result) && result.length > 0) {
    word = result[0].word;
    phonetic = result[0].phonetic;
    url = result[0].sourceUrls[0];

    const { meanings } = result[0];

    if (meanings) {
      nounMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "noun")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      pronounMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "pronoun")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      verbMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "verb")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      adjectiveMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "adjective")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      adverbMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "adverb")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      prepositionMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "preposition")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      conjunctionMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "conjunction")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);

      interjectionMeanings = meanings
        .filter((meaning: any) => meaning.partOfSpeech === "interjection")
        .map(({ definitions, synonyms, antonyms }: any) => [
          definitions.map((definition: any) => [
            definition.definition,
            definition.example || [],
          ]),
          synonyms,
          antonyms,
        ]);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>{word}</h1>
          <p className={styles.phonetic}>{phonetic}</p>
        </div>

        {nounMeanings.length > 0 && (
          <div>
            <h2>Noun</h2>
            {nounMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {pronounMeanings.length > 0 && (
          <div>
            <h2>Pronoun</h2>
            {pronounMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {verbMeanings.length > 0 && (
          <div>
            <h2>Verb</h2>
            {verbMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {adjectiveMeanings.length > 0 && (
          <div>
            <h2>Adjective</h2>
            {adjectiveMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {adverbMeanings.length > 0 && (
          <div>
            <h2>Adverb</h2>
            {adverbMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {prepositionMeanings.length > 0 && (
          <div>
            <h2>Preposition</h2>
            {prepositionMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {conjunctionMeanings.length > 0 && (
          <div>
            <h2>Conjunction</h2>
            {conjunctionMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {interjectionMeanings.length > 0 && (
          <div>
            <h2>Interjection</h2>
            {interjectionMeanings.map(
              ([definitions, synonyms, antonyms]: any[], index: number) => (
                <div key={index}>
                  <h3>Meaning</h3>
                  <ul>
                    {definitions.map(
                      ([definition, examples]: any[], index: number) => (
                        <li key={index}>
                          {definition}
                          {examples.length > 0 && <span>{examples}</span>}
                        </li>
                      )
                    )}
                  </ul>
                  {synonyms.length > 0 && (
                    <div>
                      <h3>Synonyms</h3>
                      <ul>
                        {synonyms.map((synonym: string, index: number) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {antonyms.length > 0 && (
                    <div>
                      <h3>Antonyms</h3>
                      <ul>
                        {antonyms.map((antonym: string, index: number) => (
                          <li key={index}>{antonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
      <Link href={url}>
        Source <span>{url}</span>
      </Link>
    </div>
  );
}
