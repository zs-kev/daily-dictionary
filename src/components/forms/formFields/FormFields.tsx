import Image from "next/image";
import styles from "./FormFields.module.css";

export interface formFieldsProps {
  sampleTextProp: string;
}

const FormFields: React.FC<formFieldsProps> = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Search for any word..." />
        <button type="submit">
          <Image
            src={"./assets/images/icons/icon-search.svg"}
            alt="Search"
            width={16}
            height={16}
          />
        </button>
      </form>
    </div>
  );
};

export default FormFields;
