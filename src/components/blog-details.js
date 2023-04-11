import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

function BlogDetails() {
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, isloading, error } = useFetch(
    "http://localhost:8000/blogs-data/" + id
  );

  const handleDelete = () => {
    setIsPending(true);
    fetch("http://localhost:8000/blogs-data/" + blogs.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      navigate("/");
      console.log(res);
      setIsPending(false);
    });
  };
  return (
    <>
      {error && <div>{error}</div>}
      {isloading && (
        <div style={{ fontSize: "20px", fontWeight: "bolder", color: "blue" }}>
          {" "}
          loading blogs....{" "}
        </div>
      )}
      {blogs && (
        <article className="blog-info">
          <h2>{blogs.title}</h2>
          <p>{blogs.body}</p>
          {!isPending && <button onClick={handleDelete}>delete blog</button>}
          {isPending && <button disabled>deleting blog...</button>}
        </article>
      )}
    </>
  );
}

export default BlogDetails;
