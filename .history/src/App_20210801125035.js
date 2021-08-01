import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <About />
        <Shop />
      </div>
    </Router>
  );
};

export default App;
