import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <Link
          to="/settings"
          className="brand-logo right"
          style={{ cursor: "pointer" }}
        >
          <i className="material-icons">settings</i>
        </Link>
        <ul>
          <li>
            <Link to="/">Active Task</Link>
          </li>
          <li>
            <Link to="/tasks">All Tasks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
