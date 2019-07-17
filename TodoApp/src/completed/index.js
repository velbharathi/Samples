import React from "react";
import Header from "../header";
import Entry from "../entry";

const Completed = ({ todos, updateTodo, removeTodo }) => {
  return (
    <div>
      <Header name="Completed" />
      {todos &&
        todos.map(todo => (
          <Entry {...todo} updateTodo={updateTodo} removeTodo={removeTodo} />
        ))}
    </div>
  );
};

export default Completed;
