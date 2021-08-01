import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <div>
      <h1>Hello from App</h1>

      <Dashboard href="/src/components/Dashboard.js">Dashboard</Dashboard>
    </div>
  );
};

export default App;
