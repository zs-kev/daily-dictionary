import styles from "./ButtonLink.module.css";

export interface ButtonLinkProps {
  // eslint-disable-next-line no-unused-vars
  handleClick: (children: string) => void;
  children: any;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ handleClick, children }) => {
  return (
    <button className={styles.button} onClick={() => handleClick(children)}>
      {children}
    </button>
  );
};

export default ButtonLink;
