import React from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";
function Home() {
  const { blogs, isloading, error } = useFetch(
    "http://localhost:8000/blogs-data"
  );
  return (
    <>
      {error && <div>{error}</div>}
      {isloading && (
        <div style={{ fontSize: "20px", fontWeight: "bolder", color: "blue" }}>
          {" "}
          loading blogs....{" "}
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
}

export default Home;
