import React, { Component } from "react";
import styles from "./style.module.css";

class Checkbox extends Component {

  toggleCheckboxChange = () => {
    const { onChange, id } = this.props;
    onChange && onChange(id);
  };

  render() {
    const { label, id, checked } = this.props;

    return (
      <label className={styles["container"]}>
        {label}
        <input
          type="checkbox"
          checked={checked}
          value={id}
          onChange={this.toggleCheckboxChange}
        />
        <span className={styles["checkmark"]} />
      </label>
    );
  }
}

export default Checkbox;
