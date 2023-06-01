import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>&#128075;</div>
      <h1 className={styles.heading}>Welcome To Daily Dictionary</h1>
      <p className={styles.text}>
        To begin looking for your word, type it into the search bar and hit
        enter, we will take it from there.
      </p>
    </div>
  );
}
