import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import "./App.css";

import { addTodo } from "../actions";
import { deleteTodo } from "../actions";
import { toggleComplete } from "../actions";
import { updateTodo } from "../actions";

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleComplete: id => dispatch(toggleComplete(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  };
};

class App extends Component {
  render() {
    const {
      todos,
      addTodo,
      deleteTodo,
      toggleComplete,
      updateTodo,
    } = this.props;
    return (
      <div className="App">
        <TodoList
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
