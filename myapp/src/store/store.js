import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initailState = {
  counter: 0,
  todo: [],
  users: [],
  isLoginSuccess: false,
  isLoginError: null,
  isLoginPending: false,
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_IS_LOGIN_SUCCESS":
      return { ...state, isLoginSuccess: action.payload };
    case "SET_IS_LOGIN_ERROR":
      return { ...state, isLoginError: action.payload };
    case "SET_IS_LOGIN_PENDING":
      return { ...state, isLoginPending: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
