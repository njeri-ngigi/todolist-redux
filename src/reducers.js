import id from "uuid/dist/v4";
import {
  ADDED_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  UPDATE_TODO,
  ADDING_NEW_TODO,
} from "./constants";

const initialState = {
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

export const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDED_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: id(), text: action.payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
};

const initialStateNewTodo = {
  text: "",
};

export const newTodoReducer = (state = initialStateNewTodo, action = {}) => {
  switch (action.type) {
    case ADDING_NEW_TODO:
      return Object.assign({}, state, { text: action.payload });
    default:
      return state;
  }
};
