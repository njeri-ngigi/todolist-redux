import React, { Component } from "react";
import { connect } from "react-redux";
import { addingTodo } from "../actions";

const mapStateToProps = state => {
  return {
    text: state.newTodo.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(addingTodo(event.target.value)),
  };
};

class NewTodoForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    if (!this.props.text) return;
    this.props.addTodo(this.props.text);
    this.setState({ text: "" });
  };

  render() {
    const { text, handleChange } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
