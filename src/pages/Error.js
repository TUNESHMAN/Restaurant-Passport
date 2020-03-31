import React from "react";
import "./Error.css";
import {Link} from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="page-wrap">
          <h1 className="error">404</h1>
          <div className="content">
            <h2 className="error-desc">
              Looks like you need to retrace your steps
            </h2>
            <Link className="error-button" to="/">
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
