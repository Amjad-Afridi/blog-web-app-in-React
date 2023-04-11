import React from "react";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div>
      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        404 Error{" "}
      </h2>
      <p
        style={{
          marginBottom: "15px",
        }}
      >
        the content you are trying is not found
      </p>
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default Error404;
