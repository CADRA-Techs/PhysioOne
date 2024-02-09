import React from "react";
import ErrorPng from "./assets/img/404.png";

function Error404() {
  return (
    <section className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src={ErrorPng} alt="error" />

              <h3>Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <a href="/" className="default-btn">
                Go to Home
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
