import React from "react";
import { useContext } from "react";
import { CounterContext } from "./Counter";

const PrevBtn = () => {
    const { decrement } = useContext(CounterContext);
  
    return <button onClick={decrement}>Anterior</button>;
  };

  export default PrevBtn;