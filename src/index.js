import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { todosReducer, newTodoReducer } from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({
  allTodos: todosReducer,
  newTodo: newTodoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
