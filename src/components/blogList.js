import React from "react";
import { Link } from "react-router-dom";
function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-info" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Auther : {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
