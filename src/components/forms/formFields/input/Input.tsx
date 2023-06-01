import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  value: any;
  name: string;
  placeholder: string;
  type: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  inputState?: string;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  placeholder,
  type,
  onChange,
  children,
  inputState,
  disabled,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const inputElement = ref.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          inputState === "error" && styles.barError
        } ${isFocused && styles.active}`}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className={styles.searchBar}
          ref={ref}
          disabled={disabled}
        />
        {children}
      </div>
      <p
        className={`${styles.errorText} ${
          inputState === "error" && styles.textError
        }`}
      >
        Whoops, can&apos;t be empty...
      </p>
    </div>
  );
};

export default Input;
