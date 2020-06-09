import React, { Component } from "react";
import id from "uuid/dist/v4";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: id(),
          text: "Learn Redux",
          completed: true,
        },
        {
          id: id(),
          text: "Master Redux",
          completed: false,
        },
        {
          id: id(),
          text: "Learn Mobx",
          completed: false,
        },
      ],
    };
  }

  addTodo = text => {
    const newTodo = { id: id(), text: text, completed: false };
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
