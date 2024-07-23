import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const profileUrl =
    "https://github.com/devesh-dkp/devesh/blob/main/images/profile.jpg?raw=true";
  return (
    <div className="flex flex-col mx-auto md:flex-row items-center justify-center my-12 md:my-24 px-4 md:px-0 justify-between w-11/12 md:w-3/4">
      <div className="w-1/2 md:w-1/4">
        <img
          src={profileUrl}
          alt="Devesh Kumar Pandey"
          // make a rectangle shape with rounded corners and thick borders
          className="rounded-lg border-4 border-black-200 object-center shadow-lg md:w-128 md:h-128"
        />
      </div>
      <div className="w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold text-blue-800">
          Hi, I'm Devesh Kumar Pandey
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          I'm a UG student at IIT Patna, majoring in mathematics and computing.
          To see my projects go to{" "}
          <Link
            to="/projects"
            className="text-blue-500 hover:text-blue-700 font-medium no-underline"
          >
            Projects
          </Link>
          . I am interested in web development and competitive programming. I
          like reading documentations, new stories,etc. I also have an
          understanding of AI & Machine Learning.
        </p>
        <Link
          to="/about"
          className="text-white bg-blue-800 px-4 py-2 rounded-lg mt-4 inline-block"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
