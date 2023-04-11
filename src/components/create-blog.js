import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Stephen");
  const [isPending, setIsPending] = useState(false);
  const data = { title, body, author };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    fetch("http://localhost:8000/blogs-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/");
      setIsPending(false);
    });
  };

  return (
    <>
      <h2
        style={{
          margin: "40px auto",
          textAlign: "center",
          color: "rgb(237 ,84, 114)",
        }}
      >
        Create new blog
      </h2>
      <form className="form-style" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Body</label>
        <textarea
          placeholder="blog body content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option>Stephen</option>
          <option>Holland</option>
        </select>
        {isPending && <button>Adding blog....</button>}
        {!isPending && <button type="submit">Add blog</button>}
      </form>
    </>
  );
}
export default CreateBlog;
