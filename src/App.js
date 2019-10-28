import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    title: "Finish MVP",
    id: Date.now(),
    completed: false
  },
  {
    title: "Do stretch",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  addTodo = title => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
