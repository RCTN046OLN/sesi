import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter Component</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setCounter(counter - 1)}>Decrement </button>{" "}
        <p style={{ margin: 10 }}  data-testid="counter">
          {counter}
        </p>
        <button onClick={() => setCounter(counter + 1)}> Increment</button>
      </div>
    </div>
  );
}

export default Counter;
