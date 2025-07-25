import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error-component">
      <i className="fa-solid fa-triangle-exclamation error-font"></i>
      <h1 className="error-404">404</h1>
      <h2 className="erro-page">Page Not Found</h2>
      <p className="error-text">
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our home page or try to use a search?
      </p>
      <Link className="error-btn">Go Back To Home</Link>
    </div>
  );
};

export default Error;
