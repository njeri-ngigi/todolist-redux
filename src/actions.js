import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { TOGGLE_COMPLETE } from "./constants";
import { UPDATE_TODO } from "./constants";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
