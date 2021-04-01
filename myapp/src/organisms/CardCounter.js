import { useState, useEffect } from "react";

const CardCounter = () => {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("component mounting <<<<<<<");
  }, []);

  useEffect(() => {
    console.log("component updation <<<<<<<");
  }, [counter, persons]);

  useEffect(() => {
    return () => {
      console.log("component willunmount <<<<<<<");
    };
  }, []);

  const handleInc = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleInc}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
};

export default CardCounter;
