import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="fixed w-full flex items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain z-0 rounded-lg"
        style={{ backgroundImage: 'url("../static/bg.png")' }}
      ></div>

      <div className="relative max-w-4xl p-10 text-right z-10 bg-white bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-black">Welcome</h1>
        <p className="mt-4 text-2xl text-gray-800">
          I'm a UG student at IIT Patna, majoring in mathematics and computing.
          To see my projects go to{" "}
          <Link
            to="/projects"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Projects
          </Link>
          . I am interested in web development and competitive programming. I
          also have an understanding of AI & Machine Learning.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold rounded-lg"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
