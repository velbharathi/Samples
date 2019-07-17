import React, { Component } from "react";
import Entry from "../entry";
import Header from "../header";
class Todo extends Component {
  render() {
    let { todos, updateTodo, removeTodo } = this.props;
    return (
      <div>
        <Header name="Todo" />
        {todos &&
          todos.map(todo => (
            <Entry {...todo} updateTodo={updateTodo} removeTodo={removeTodo} />
          ))}
      </div>
    );
  }
}

export default Todo;
