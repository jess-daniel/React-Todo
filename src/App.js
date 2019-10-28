import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    title: "Finish MVP",
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

  toggleComplete = checkedItem => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === checkedItem) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = checkedItem => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === false;
      })
    });
  };

  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
