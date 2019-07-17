import React, { Component } from "react";
import Header from "../header";
import TextField from "../components/TextField";
import Button from "../components/Button";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  add = () => {
    let { name } = this.state;
    let { addItem } = this.props;
    if (name) {
      addItem && addItem(name);
      this.setState({ name: "" });
    }
  };

  updateName = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <Header name={"Add Item"} />
        <TextField value={this.state.name} onChange={this.updateName} />
        <Button onClick={this.add}>Add</Button>
      </div>
    );
  }
}

export default AddItem;
