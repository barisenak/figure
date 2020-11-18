import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Figure from "./Figure";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Figure />
          </Route>
          <Route path="/:view"></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
