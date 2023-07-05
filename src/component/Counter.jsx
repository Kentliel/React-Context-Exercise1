import React, { useState, createContext } from "react";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";


export const CounterContext = createContext(null);

const Counter = () => {
    const [count, setCount] = useState(0);
  
    // Funciones para aumentar y disminuir el contador
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
  
    return (
      <CounterContext.Provider value={{ count, increment, decrement }}>
        <div>
          <h2>Contador: {count}</h2>
          <NextBtn />
          <PrevBtn />
        </div>
      </CounterContext.Provider>
    );
  };

  export default Counter;