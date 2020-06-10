import React, { Component } from "react";

class NewTodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.text) return;
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.handleChange} />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
