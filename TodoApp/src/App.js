import React, { Component } from "react";
import AddItem from "./add-item";
import Todo from "./todo";
import "./App.css";
import Completed from "./completed";

class App extends Component {
  constructor(props) {
    super(props);

    // holds the list of all the todo items to save in the list.
    this.state = { todos: [] };
  }

  // helper method to set todo
  setTodos = todos => {
    this.setState({ todos });
  };

  // add a new todo 
  // create a object the id as unique string with performance.now() time related api
  addTodo = name => {
    this.setTodos([
      ...this.state.todos,
      { name, completed: false, id: (performance.now() + "").replace(".", "") }
    ]);
  };

  // remove todo based on the id
  removeTodo = id => {
    this.setTodos(this.state.todos.filter(todo => todo.id !== id));
  };

  // update the todo based on id - can update the name and id 
  // should be handled with object destruction
  updateTodo = (id, name, completed) => {
    let updateTodo = this.state.todos.find(todo => todo.id === id);
    if (updateTodo) {
      this.setTodos([
        ...this.state.todos.filter(todo => todo.id !== id),
        { name, completed, id }
      ]);
    }
  };

  // compare function to sort the array of objects
  compare = (a, b) => {
    const todoA = a.name.toUpperCase();
    const todoB = b.name.toUpperCase();

    let comparison = 0;
    if (todoA > todoB) {
      comparison = 1;
    } else if (todoA < todoB) {
      comparison = -1;
    }
    return comparison;
  };

  render() {
    let { todos } = this.state;
    return (
      <div className="App">
        <AddItem addItem={this.addTodo} />
        <Todo
          todos={todos.filter(todo => !todo.completed).sort(this.compare)}
          updateTodo={this.updateTodo}
          removeTodo={this.removeTodo}
        />
        <Completed
          todos={todos.filter(todo => todo.completed).sort(this.compare)}
          updateTodo={this.updateTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
