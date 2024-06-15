import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 8000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="fixed top-0 t-0 m-4 z-10">
      <button
        className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="mt-2 w-64 bg-white rounded-lg shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-blue-500 hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/comment" className="text-blue-500 hover:underline">
                Write a Comment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
