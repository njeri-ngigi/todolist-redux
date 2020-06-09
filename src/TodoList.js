import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const {
      todos,
      addTodo,
      deleteTodo,
      toggleComplete,
      updateTodo,
    } = this.props;
    return (
      <div className="TodoList">
        <h1>
          TodoList <span>Get things done, one at a time</span>
        </h1>
        <ul>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
        <NewTodoForm addTodo={addTodo} />
      </div>
    );
  }
}

export default TodoList;
