import { useState } from "react";
import React from "react";

function Count() {
    const [Count, setCount] = useState(0);

  function increase() {
    setCount(Count + 1)
  }
  function decrease() {
    setCount(Count -1)
  }
  return (
    <div className="container">
      <h3>{Count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Count;