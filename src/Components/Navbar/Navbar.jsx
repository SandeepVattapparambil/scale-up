import React from "react";
import { Link } from "react-router-dom";

function Navabr(props) {
  return (
    <div className="navbar-fixed">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo grey-text">
            Registration Form
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/register" className="grey-text">
                Register
              </Link>
            </li>
            <li>
              <Link to="/users" className="grey-text">
                Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="grey-text">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navabr;
