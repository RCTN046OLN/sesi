const { createStore } = require("redux");

const initialState = {
  counter: 0,
  todos: [],
};

// gak boleh ada side effect
// gak boleh nerima var dari luar
// harus return

const reducer = (state = initialState, action) => {
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

// console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: "INCREMENT",
  payload: 10,
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});

// console.log(store.getState());
