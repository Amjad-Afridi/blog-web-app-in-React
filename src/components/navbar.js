import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h1>My blogs </h1>
      <div className="links">
        <Link to="/">home page </Link>
        <Link to="/create-blog">create new blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
