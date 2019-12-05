import React from "react";
import "./style.css";

import Row from "../Common/Row/Row";

function Dashboard(props) {
  return (
    <div className="users-listing">
      <Row>
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Dashboard</span>
            </div>
            <div className="card-content body grey-text">
              <p>Total number of Users registered : {props.userData.length}</p>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Dashboard;
