import styles from "./NoResults.module.css";

export default function NoResults() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>&#128533;</div>
      <h1 className={styles.heading}>No Definitions Found</h1>
      <p className={styles.text}>
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}
