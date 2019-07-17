import React from "react";
import classnames from "classnames";
import styles from "./style.module.css";

const TextField = ({ containerClassName, ...others }) => {
  console.log(others);
  return (
    <input
      type="text"
      className={classnames(styles["container"], containerClassName)}
      {...others}
    />
  );
};

export default TextField;
