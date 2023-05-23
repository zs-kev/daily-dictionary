import styles from "./ToggleSwitch.module.css";

interface toggleSwitchProps {
  checked: boolean;
  onToggle: () => void;
  iconBefore?: any;
  iconAfter?: any;
}

const ToggleSwitch: React.FC<toggleSwitchProps> = ({
  checked,
  onToggle,
  iconBefore,
  iconAfter,
}) => {
  return (
    <label className={styles.switch}>
      {iconBefore}
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span className={`${styles.slider} ${styles.round}`}></span>
      {iconAfter}
    </label>
  );
};

export default ToggleSwitch;
