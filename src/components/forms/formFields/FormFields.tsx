import styles from "./FormFields.module.css";

export interface IFormFields {
  sampleTextProp: string;
}

const FormFields: React.FC<IFormFields> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default FormFields;
