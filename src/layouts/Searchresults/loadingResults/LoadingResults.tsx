import styles from "./LoadingResults.module.css";

export default function LoadingResults({ status }: { status: string }) {
  return (
    <div className={styles.container}>
      {status === "idle" && (
        <>
          <div className={styles.emoji}>&#128075;</div>
          <h1 className={styles.heading}>Welcome To Daily Dictionary</h1>
          <p className={styles.text}>
            To begin looking for your word, type it into the search bar and hit
            enter, we will take it from there.
          </p>
        </>
      )}
      {status === "loading" && (
        <>
          <div className={styles.emoji}>&#128270;</div>
          <h1 className={styles.heading}>Let&apos;s See What We Can Find</h1>
          <p className={styles.text}>
            Please hang on for a little bit while we search for your word in our
            database
          </p>
        </>
      )}
      {status === "error" && (
        <>
          <div className={styles.emoji}>&#128533;</div>
          <h1 className={styles.heading}>No Definitions Found</h1>
          <p className={styles.text}>
            Sorry pal, we couldn&apos;t find definitions for the word you were
            looking for. You can try the search again at a later time or head to
            the web instead.
          </p>
        </>
      )}
    </div>
  );
}
