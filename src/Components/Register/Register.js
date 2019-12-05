import React from "react";
import { Redirect } from "react-router-dom";

import "./style.css";

import Row from "../Common/Row/Row";

function Register(props) {
  let registerForm = React.createRef();

  if (props.redirect) {
    props.clearForm();
    return <Redirect to="/users" />;
  }

  function clearForm() {
    registerForm.current.reset();
    props.clearForm();
  }

  return (
    <div className="register-page">
      <Row>
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Register</span>
              <p>Enter your login details below.</p>
            </div>
            <div className="card-content grey-text">
              <Row>
                <form
                  className="col s12"
                  autoComplete="off"
                  ref={registerForm}
                  method=""
                  action=""
                >
                  <Row>
                    <div className="input-field col s12">
                      <input
                        id="user_name"
                        type="text"
                        className="validate"
                        autoComplete="off"
                        minLength="1"
                        onChange={e =>
                          props.saveInput(e.currentTarget.value, "userName")
                        }
                      />
                      <label htmlFor="user_name">User Name</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        minLength="1"
                        className="validate"
                        autoComplete="off"
                        onChange={e =>
                          props.saveInput(e.currentTarget.value, "password")
                        }
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        autoComplete="off"
                        onChange={e =>
                          props.saveInput(e.currentTarget.value, "email")
                        }
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </Row>
                </form>
              </Row>
            </div>
            <div className="card-action">
              <a
                className="waves-effect btn-flat purple white-text"
                onClick={clearForm}
              >
                Clear
              </a>
              <a
                className="waves-effect btn-flat purple white-text"
                onClick={props.validateAndSubmitForm}
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Register;
