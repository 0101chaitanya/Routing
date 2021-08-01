import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";

const App = (props) => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      }
      setColor("black");
    };
    document.addEventListener("click", changeColorOnClick);
    return () => {
      document.addEventListener("click", changeColorOnClick);
    };
  }, [color]);
  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default App;
