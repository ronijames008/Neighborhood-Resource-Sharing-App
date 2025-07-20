import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound404;
