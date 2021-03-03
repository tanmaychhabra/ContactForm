import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <React.Fragment>
      <nav>
        <ul className="nav-links">
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
