import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#D1D1D1" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li style={currentTab(history, "/cart")} className="nav-item">
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          A. Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Signin
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Singnout
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
