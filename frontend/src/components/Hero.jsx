import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Hero = () => {
  const bgUrl =
    "https://github.com/devesh-dkp/devesh/blob/main/bg.png?raw=true";
  return (
    <div
      className="relative flex justify-end items-center h-screen bg-cover bg-center bg-white"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="max-w-lg w-full mx-10 px-8 py-5 bg-white bg-opacity-75 text-right">
        <div className="text-2xl font-bold mb-4">Welcome</div>
        <p className="text-lg text-gray-700 mb-4">
          I'm a UG student at IIT Patna, majoring in mathematics and computing.
          To see my projects go to{" "}
          <Link
            to="/projects"
            className="text-blue-800 hover:text-blue-600 font-medium no-underline"
          >
            Projects
          </Link>
          . I am interested in web development and competitive programming. I
          like reading documentations, new stories,etc. I also have an
          understanding of AI & Machine Learning.
        </p>
        <Link
          to="/about"
          className="text-blue-500 mt-4 hover:text-blue-700 font-medium no-underline"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
