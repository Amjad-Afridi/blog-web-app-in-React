import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/blog-details";
import CreateBlog from "./components/create-blog";
import Error404 from "./components/404-eror";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
