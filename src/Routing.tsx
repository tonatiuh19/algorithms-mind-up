import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TwoArrayDS from "./screens/TwoDArrayDS/TwoDArrayDS";
import HomePage from "./screens/HomePage/HomePage";

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TwoArrayDS">2D Array - DS</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/TwoArrayDS">
            <TwoArrayDS />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
