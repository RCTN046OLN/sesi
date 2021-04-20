import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../store/actions/counterAction";

const Todo = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(incrementCounter());
  };

  const handleDec = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Counter2</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleInc}>+ Inc</button>{" "}
      <button onClick={handleDec}>- Dec</button>
    </div>
  );
};

export default Todo;
