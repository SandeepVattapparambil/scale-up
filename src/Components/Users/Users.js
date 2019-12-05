import React from "react";
import "./style.css";

function User(props) {
  return (
    <div className="users-listing">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Registered Users</span>
            </div>
          </div>
        </div>
        {props.usersList && props.usersList.length ? (
          props.usersList.map((user, key) => {
            return (
              <div key={key} className="col s12 m6 offset-m3">
                <div className="card-panel z-depth-1">
                  <div className="row valign-wrapper">
                    <div className="col s4 m2">
                      <img
                        src="img/user.png"
                        alt=""
                        className="circle responsive-img valign"
                      />
                    </div>
                    <div className="col s8 m10">
                      <span className="black-text">
                        User Name : {user.userName}
                      </span>
                      <br></br>
                      <span className="black-text">
                        Password : {user.password}
                      </span>
                      <br></br>
                      <span className="black-text">Email : {user.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col s12 m6 offset-m3">
            <p>No users registered..</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
