import { createStore } from "redux";

const initailState = {
  counter: 0,
  todo: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
