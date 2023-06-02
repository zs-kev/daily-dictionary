import styles from "./WordMeaning.module.css";

interface WordMeaningProps {
  meanings: {
    meanings: {
      definition: string;
      example: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  // eslint-disable-next-line no-unused-vars
  handleClick: (clickedWord: string) => void;
}

const WordMeaning: React.FC<WordMeaningProps> = ({ meanings, handleClick }) => {
  const [meaning] = meanings;

  if (!meaning) {
    return null;
  }

  return (
    <div>
      <h3>Meaning</h3>
      <ul className={styles.list}>
        {meaning.meanings.map((meaning, index) => (
          <li key={index}>
            <p className={styles.meaning}>{meaning.definition}</p>
            {meaning.example.length > 0 && (
              <p className={styles.example}>{`"${meaning.example}"`}</p>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div>
          <h3>Synonyms</h3>
          {meaning.synonyms.map((synonym, index) => (
            <button key={index} onClick={() => handleClick(synonym)}>
              {synonym}
            </button>
          ))}
        </div>
      )}
      {meaning.antonyms.length > 0 && (
        <div>
          <h3>Antonyms</h3>
          {meaning.antonyms.map((antonym, index) => (
            <button key={index} onClick={() => handleClick(antonym)}>
              {antonym}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordMeaning;
