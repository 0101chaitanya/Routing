import React, { useState, useEffect } from "react";
import About from "./components/About";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      {/* <h1>Hello from App</h1>
       */}
      <Route path="/dashboard" />
    </div>
  );
};

export default App;
