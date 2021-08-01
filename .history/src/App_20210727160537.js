import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  changeTime() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <h1>Hello! This is a class component clock.</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const funcClock = (props) => {
  const [time, setTime] = useState(new Date());
  const changeTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const tick = setInterval(() => changeTime(), 1000);
    return () => {
      clearInterval(tick);
    };
  });
  return <div></div>;
};
