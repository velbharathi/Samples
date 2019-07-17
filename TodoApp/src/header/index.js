import React from "react";
import styles from "./style.module.css";

const Header = ({ name }) => {
  return <h3 className={styles["container"]}>{name}</h3>;
};

export default Header;
