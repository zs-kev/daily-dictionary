import styles from "./ToggleSwitch.module.css";

interface toggleSwitchProps {
  checked: boolean;
  onToggle: () => void;
  contentLeft?: any;
  contentRight?: any;
  contentMargin?: number;
}

const ToggleSwitch: React.FC<toggleSwitchProps> = ({
  checked,
  onToggle,
  contentLeft,
  contentRight,
  contentMargin = 0,
}) => {
  return (
    <label className={styles.container}>
      {contentLeft && (
        <div style={{ marginRight: contentMargin + "rem" }}>{contentLeft}</div>
      )}
      <div className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </div>
      {contentRight && (
        <div style={{ marginLeft: contentMargin + "rem" }}>{contentRight}</div>
      )}
    </label>
  );
};

export default ToggleSwitch;
