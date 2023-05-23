import styles from "./PlayAudioButton.module.css";

export interface IPlayAudioButton {
  sampleTextProp: string;
}

const PlayAudioButton: React.FC<IPlayAudioButton> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default PlayAudioButton;
