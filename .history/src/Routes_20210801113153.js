import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
