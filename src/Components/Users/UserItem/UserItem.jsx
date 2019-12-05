import React from "react";

function UserItem(props) {
  return (
    <div className="col s12 m6 offset-m3">
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
              User Name : {props.user.userName}
            </span>
            <br></br>
            <span className="black-text">Password : {props.user.password}</span>
            <br></br>
            <span className="black-text">Email : {props.user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;