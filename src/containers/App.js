import React, { Component } from "react";
import id from "uuid/dist/v4";
import TodoList from "../components/TodoList";
import "./App.css";

class App extends Component {
  state = {
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

  // addTodo = text => {
  //   const newTodo = { id: id(), text, completed: false };
  //   const todos = [...this.state.todos, newTodo];
  //   this.setState({ todos });
  // };

  // deleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => todo.id !== id);
  //   this.setState({ todos });
  // };

  // toggleComplete = id => {
  //   const todos = this.state.todos.map(todo =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   this.setState({ todos });
  // };

  // updateTodo = (id, text) => {
  //   const todos = this.state.todos.map(todo =>
  //     todo.id === id ? { ...todo, text } : todo
  //   );
  //   this.setState({ todos });
  // };

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          toggleComplete={this.toggleComplete}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default App;
