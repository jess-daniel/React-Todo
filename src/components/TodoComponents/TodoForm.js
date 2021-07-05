import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  handleChanges = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo Item"
            name="todo"
            value={this.state.title}
            onChange={this.handleChanges}
          />
          <div>
            <button type="submit">Add Todo</button>
            <button type="submit" onClick={this.props.clearCompleted}>
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
