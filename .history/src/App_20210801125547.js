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
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
};
const Home = () => {
  <div>
    <h1>Home page is me</h1>
  </div>;
};

export default App;
