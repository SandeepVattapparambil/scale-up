import React from "react";
import "./style.css";

import Row from "../Common/Row/Row";
import UsreItem from "./UserItem/UserItem";

function User(props) {
  return (
    <div className="users-listing">
      <Row>
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Registered Users</span>
            </div>
          </div>
        </div>
        {props.usersList && props.usersList.length ? (
          props.usersList.map((user, key) => {
            return <UsreItem key={key} user={user}></UsreItem>;
          })
        ) : (
          <div className="col s12 m6 offset-m3">
            <p>No users registered..</p>
          </div>
        )}
      </Row>
    </div>
  );
}

export default User;
