import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={app} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
