// frontend/src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CommentForm from "./components/CommentForm";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
import blogService from "./services/blog";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getAll().then((initialBlogs) => {
      setBlogs(initialBlogs);
    });
  }, []);
  return (
    <Router>
      <div className="w-full flex-col flex">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs blogs={blogs} />} />
            <Route path="/blogs/:id" element={<BlogPost blogs={blogs} />} />
            <Route path="/comment" element={<CommentForm />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
