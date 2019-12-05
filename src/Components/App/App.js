import React, { Component } from "react";
import "./App.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Login from "../Login/Login";
import Users from "../Users/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <div className="navbar-fixed">
            <nav className="white">
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo grey-text">
                  Registration Form
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/login" className="grey-text">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/users" className="grey-text">
                      Users
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="container">
            <div className="row">
              <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route path="/users" component={Users} />
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
