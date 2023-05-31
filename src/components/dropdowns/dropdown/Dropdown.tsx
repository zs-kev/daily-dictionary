import Image from "next/image";
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
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            onClick={(event) => {
              event.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.label}
            className={`${styles.option} ${option.class}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <Image
        src={"./assets/images/icons/icon-down-arrow.svg"}
        alt={"change font"}
        width="15"
        height="9"
        className={styles.arrow}
      />
    </div>
  );
};

export default Dropdown;
