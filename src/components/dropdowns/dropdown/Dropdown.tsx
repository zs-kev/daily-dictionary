import styles from "./Dropdown.module.css";

export interface IDropdown {
  sampleTextProp: string;
}

const Dropdown: React.FC<IDropdown> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Dropdown;
