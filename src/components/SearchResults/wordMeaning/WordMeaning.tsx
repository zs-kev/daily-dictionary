import ButtonLink from "@/components/buttons/buttonLink/ButtonLink";
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
    <div className={styles.container}>
      <h3 className={styles.definitionHeading}>Meaning</h3>
      <ul className={styles.list}>
        {meaning.meanings.map((meaning, index) => (
          <li key={index}>
            {meaning.definition}
            {meaning.example.length > 0 && (
              <p className={styles.example}>{`"${meaning.example}"`}</p>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className={`${styles.synAntWrapper} ${styles.hasAnt}`}>
          <h3 className={styles.synonym}>Synonyms</h3>
          <div className={styles.synAnt}>
            {meaning.synonyms.map((synonym, index) => (
              <ButtonLink key={index} handleClick={handleClick}>
                {synonym}
              </ButtonLink>
            ))}
          </div>
        </div>
      )}
      {meaning.antonyms.length > 0 && (
        <div className={styles.synAntWrapper}>
          <h3>Antonyms</h3>
          <div className={styles.synAnt}>
            {meaning.antonyms.map((antonym, index) => (
              <ButtonLink key={index} handleClick={handleClick}>
                {antonym}
              </ButtonLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordMeaning;
