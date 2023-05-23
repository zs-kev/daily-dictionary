import styles from "./ToggleSwitch.module.css";

interface toggleSwitchProps {
  checked: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<toggleSwitchProps> = ({ checked, onToggle }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default ToggleSwitch;
