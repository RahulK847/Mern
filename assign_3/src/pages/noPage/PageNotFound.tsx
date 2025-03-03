import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  return (
    <div className="pagenotfound-container">
      <h1 className="pagenotfound-title">404</h1>
      <p className="pagenotfound-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="pagenotfound-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
