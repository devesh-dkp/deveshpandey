import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const profileUrl =
    "https://github.com/devesh-dkp/devesh/blob/main/images/profile.jpg?raw=true";
  return (
    <div className="flex flex-col mx-auto md:flex-row items-center justify-center my-12 md:my-24 px-6 md:px-0 justify-between md:w-3/4">
      <div className="md:w-1/3">
        <img
          src={profileUrl}
          alt="Devesh Kumar Pandey"
          className="rounded-lg border-4 border-blue-800"
        />
      </div>
      <div className="w-3/4 md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 font-sans">
          Devesh Kumar Pandey
        </h1>
        <h2 className="text-xl text-blue-600 mt-2 font-sans">
          Welcome to my Website!
        </h2>
        <p className="text-lg text-gray-600 mt-4 font-serif">
          I'm a 4th-year student in the IIT Patna-IIM Mumbai Integrated Dual
          Degree Program. My journey combines technical expertise in Mathematics
          and Computing with strategic insights from Operations & Supply Chain
          Management.
        </p>
        <p className="text-lg text-gray-600 mt-4 font-serif">
          Explore my{" "}
          <Link
            to="/projects"
            className="text-blue-500 hover:text-blue-700 font-medium no-underline"
          >
            Projects
          </Link>{" "}
          to see how I blend analytical skills with business acumen.
        </p>
        <Link
          to="/about"
          className="text-white bg-blue-800 px-4 py-2 rounded-lg mt-4 inline-block font-sans"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
