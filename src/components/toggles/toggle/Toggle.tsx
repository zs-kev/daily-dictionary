import styles from "./Toggle.module.css";

export interface IToggle {
  sampleTextProp: string;
}

const Toggle: React.FC<IToggle> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Toggle;
