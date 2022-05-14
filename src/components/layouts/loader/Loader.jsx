import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Loader.module.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = ({loading, color, size}) => {
  return (
    <div className={styles.loaderContainer}>
      <ClipLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Loader;
