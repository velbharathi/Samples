import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import TextField from "../components/TextField";
import Button from "../components/Button";
import styles from "./style.module.css";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: props.name
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.setState({ name: nextProps.name });
    }
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  updateName = e => {
    this.setState({ name: e.target.value });
  };

  submitName = () => {
    let { id, updateTodo, completed } = this.props;
    if (this.state.name) {
      updateTodo(id, this.state.name, completed);
      this.toggleEdit();
    }
  };

  remove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    let { updateTodo, completed, id } = this.props;
    let { edit, name } = this.state;
    return (
      <div className={styles["entry"]}>
        <span>
          <Checkbox
            checked={completed}
            id={id}
            onChange={() => updateTodo(id, name, !completed)}
          />
        </span>
        <span>
          {edit ? (
            <TextField
              value={name}
              onChange={this.updateName}
              onBlur={this.submitName}
            />
          ) : completed ? (
            <strike>{name}</strike>
          ) : (
            name
          )}
        </span>
        <span className={styles["action-buttons"]}>
          <Button onClick={this.toggleEdit}>Edit</Button>
          <Button onClick={this.remove}>Remove</Button>
        </span>
      </div>
    );
  }
}

export default Entry;
