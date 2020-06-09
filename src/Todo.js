import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: props.text,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.value);
    this.setState({ value: "", isEditing: false });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value, isEditing } = this.state;
    const { id, text, completed, deleteTodo, toggleComplete } = this.props;

    return isEditing ? (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
      </form>
    ) : (
      <div className="Todo">
        <li className={`${completed ? "done" : null}`}>
          <span className="label">{text}</span>
          <div className="actions">
            <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
            <DeleteIcon onClick={() => deleteTodo(id)} />
            <EditIcon
              style={{ marginLeft: "5px" }}
              onClick={() => this.setState({ isEditing: true })}
            />
          </div>
        </li>
      </div>
    );
  }
}

export default Todo;
