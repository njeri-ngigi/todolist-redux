import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class Todo extends Component {
  render() {
    const { id, text, completed, deleteTodo, toggleComplete } = this.props;
    return (
      <div className="Todo">
        <li>
          {text}{" "}
          <div className="actions">
            <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
            <DeleteIcon onClick={() => deleteTodo(id)} />
            <EditIcon style={{ marginLeft: "5px" }} />
          </div>
        </li>
      </div>
    );
  }
}

export default Todo;
