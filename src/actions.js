import {
  ADDED_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  UPDATE_TODO,
  ADDING_NEW_TODO,
} from "./constants";

export const addTodo = text => ({
  type: ADDED_TODO,
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

export const addingTodo = text => ({
  type: ADDING_NEW_TODO,
  payload: text,
});
