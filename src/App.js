import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}
