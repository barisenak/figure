import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Figure from "./Figure";

const types = ["square", "circle"];
const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

class Router extends Component {
  state = {
    type: "square",
    color: "red",
  };

  updateStateType = (itemType) => {
    this.setState({ type: itemType });
  };

  updateStateColor = (itemColor) => {
    this.setState({ color: itemColor });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          {types.map((item) => {
            return (
              <Link to={`/${item}/${this.state.color}`}>
                <button onClick={() => this.updateStateType(item)}>
                  {item}
                </button>
              </Link>
            );
          })}
          {colors.map((item) => {
            return (
              <Link to={`/${this.state.type}/${item}`}>
                <button onClick={() => this.updateStateColor(item)}>
                  {item}
                </button>
              </Link>
            );
          })}
        </div>

        <Switch>
          <Route path="/:view/:color">
            <Figure />
          </Route>
          <Route path="/:view">
            <Figure />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
