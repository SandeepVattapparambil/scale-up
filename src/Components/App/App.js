import React, { Component } from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Container from "../Common/Container/Container";
import Row from "../Common/Row/Row";
import Navbar from "../Navbar/Navbar";

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
          <Navbar />
          <Container>
            <Row>
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
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}
export default App;
