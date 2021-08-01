import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
const App = () => {
  return (
    <div className="App">
      <Nav />
    </div>
  );
};

export default App;
