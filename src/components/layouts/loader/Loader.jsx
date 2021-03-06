import { SpinnerDotted } from "spinners-react";
import styles from "./Loader.module.css";


const Loader = ({color, size}) => {
  return (
    <div className={styles.loaderContainer}>
      <SpinnerDotted color={color} size={size}/>
    </div>
  );
};

export default Loader;
