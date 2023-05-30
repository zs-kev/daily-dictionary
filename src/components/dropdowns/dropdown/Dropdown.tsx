import { useState } from "react";
import styles from "./Dropdown.module.css";

type SelectOption = {
  label: string;
  value: any;
  class: string;
};

// eslint-disable-next-line no-unused-vars
type NewType = (value: SelectOption | undefined) => void;

interface dropdownProps {
  value?: SelectOption;
  options: SelectOption[];
  onChange: NewType;
}

const Dropdown: React.FC<dropdownProps> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  function selectOption(option: SelectOption) {
    onChange(option);
  }

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={1}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button className={styles.arrow}></button>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            onClick={(event) => {
              event.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.label}
            className={`${styles.optionz} ${option.class}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
