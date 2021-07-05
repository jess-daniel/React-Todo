import React, { Component } from "react";

class TodoSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }


  handleChanges = e => {
    this.setState({
      query: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={this.state.query}
            onChange={this.handleChanges}
          />
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoSearch;
