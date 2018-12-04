import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <TodoForm
          onSubmit={this._onSubmit}
          term={this.state.term}
          onChange={this._onChange}
        />

        <div>
          <List items={this.state.items} delete={this.delete} />
        </div>
      </div>
    );
  }

  _onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  _onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
}

export default TodoList;
