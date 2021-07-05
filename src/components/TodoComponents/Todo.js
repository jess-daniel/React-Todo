import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.item.completed ? " complete" : ""}`}
      onClick={() => props.toggleComplete(props.item.id)}
    >
      <h2>{props.item.title}</h2>
    </div>
  );
};

export default Todo;
