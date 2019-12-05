import React, { Component } from "react";
import "./App.css";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import Register from "../Register/Register";
import Users from "../Users/Users";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../Common/NotFound/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
      registeredUsers: [],
      redirect: false
    };
    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  saveInput = (value, type) => {
    if (value && type && type) {
      this.setState({
        [type]: value
      });
    }
  };

  validateAndSubmitForm = () => {
    if (
      this.state.userName.length > 1 &&
      this.state.password.length > 1 &&
      this.emailRegex.test(String(this.state.email).toLowerCase())
    ) {
      let userDetails = {
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
      };
      this.setState(
        {
          registeredUsers: [...this.state.registeredUsers, userDetails]
        },
        () => {
          this.clearForm();
          this.setState({
            redirect: true
          });
        }
      );
    } else {
      window.M.toast({ html: "Please enter valid registration details!" });
    }
  };

  clearForm = () => {
    this.setState({
      userName: "",
      password: "",
      email: "",
      redirect: false
    });
  };

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
          <div className="container">
            <div className="row">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Register
                      saveInput={this.saveInput}
                      validateAndSubmitForm={this.validateAndSubmitForm}
                      clearForm={this.clearForm}
                      redirect={this.state.redirect}
                    />
                  )}
                />
                <Route
                  path="/register"
                  render={props => (
                    <Register
                      saveInput={this.saveInput}
                      validateAndSubmitForm={this.validateAndSubmitForm}
                      clearForm={this.clearForm}
                      redirect={this.state.redirect}
                    />
                  )}
                />
                <Route
                  path="/users"
                  render={props => (
                    <Users usersList={this.state.registeredUsers} />
                  )}
                />
                <Route
                  path="/dashboard"
                  render={props => (
                    <Dashboard userData={this.state.registeredUsers} />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
