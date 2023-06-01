import styles from "./LoadingResults.module.css";

export default function LoadingResults() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>&#128270;</div>
      <h1 className={styles.heading}>Let&apos;s See What We Can Find</h1>
    </div>
  );
}
