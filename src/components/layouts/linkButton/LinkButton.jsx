import { Link } from "react-router-dom";
import styles from "../linkButton/LinkButton.module.css";

const LinkButton = ({ children, to, customClass }) => {
  return (
    <Link className={`${styles.btn} ${styles[customClass]}`} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
