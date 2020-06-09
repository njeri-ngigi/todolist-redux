import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { id, text, completed } = this.props;
    return (
      <div>
        <li>{text}</li>
      </div>
    );
  }
}

export default Todo;
