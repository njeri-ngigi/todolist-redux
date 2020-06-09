import id from "uuid/dist/v4";
import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { TOGGLE_COMPLETE } from "./constants";
import { UPDATE_TODO } from "./constants";

const todos = [];

export const reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: id(), text: action.payload.text, completed: false },
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_COMPLETE:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};
