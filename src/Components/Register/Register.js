import React from "react";
import "./style.css";

function Register(props) {
  let registerForm = React.createRef();

  function clearForm() {
    registerForm.current.reset();
    props.clearForm();
  }

  return (
    <div className="register-page">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Register</span>
              <p>Enter your login details below.</p>
            </div>
            <div className="card-content grey-text">
              <div className="row">
                <form className="col s12" autoComplete="off" ref={registerForm}>
                  <div className="row">
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
                  </div>
                  <div className="row">
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
                  </div>
                  <div className="row">
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
                  </div>
                </form>
              </div>
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
      </div>
    </div>
  );
}

export default Register;
