// frontend/src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CommentForm from "./components/CommentForm";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="fixed w-full flex-col max-h-screen">
          <Navbar />
          <div className="flex-grow bg-gray-100 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/comment" element={<CommentForm />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
