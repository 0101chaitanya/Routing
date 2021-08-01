import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App;
