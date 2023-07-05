import React from "react";
import { useContext } from "react";
import { CounterContext } from "./Counter";

const NextBtn = () => {
    const { increment } = useContext(CounterContext);
  
    return <button onClick={increment}>Siguiente</button>;
  };

  export default NextBtn;