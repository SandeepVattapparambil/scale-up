import React from "react";
import "./style.css";

function Dashboard(props) {
  return (
    <div className="users-listing">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">Dashboard</span>
            </div>
            <div className="card-content grey-text">
              <p>Total number of Users registered : {props.userData.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
