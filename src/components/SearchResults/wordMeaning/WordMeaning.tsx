interface WordMeaningProps {
  meanings: {
    meanings: {
      definition: string;
      example: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
}

const WordMeaning: React.FC<WordMeaningProps> = ({ meanings }) => {
  const [meaning] = meanings;

  if (!meaning) {
    return null;
  }

  return (
    <div>
      <h3>Meaning</h3>
      <ul>
        {meaning.meanings.map((meaning, index) => (
          <li key={index}>
            <p>{meaning.definition}</p>
            {meaning.example.length > 0 && <p>{`"${meaning.example}"`}</p>}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div>
          <h3>Synonyms</h3>
          {meaning.synonyms.map((synonym, index) => (
            <p key={index}>{synonym}</p>
          ))}
        </div>
      )}
      {meaning.antonyms.length > 0 && (
        <div>
          <h3>Antonyms</h3>
          {meaning.antonyms.map((antonym, index) => (
            <p key={index}>{antonym}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordMeaning;
