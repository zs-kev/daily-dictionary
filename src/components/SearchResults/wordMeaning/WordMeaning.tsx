import styles from "./WordMeaning.module.css";

export interface IWordMeaning {
  sampleTextProp: string;
}

const WordMeaning: React.FC<IWordMeaning> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default WordMeaning;
