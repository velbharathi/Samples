import React from "react";
import classnames from "classnames";
import styles from "./style.module.css";

const Button = ({ containerClassName, children, type, ...others }) => {
  return (
    <button
      className={classnames(styles["button"], styles[type], containerClassName)}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
