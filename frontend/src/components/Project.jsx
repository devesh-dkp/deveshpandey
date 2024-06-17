import React from "react";

const Project = ({ title, description, link, image }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mb-4 mx-auto max-w-4xl flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img
          src={image}
          alt={title}
          className="w-64 h-32 object-cover rounded-lg cursor-pointer"
        />
      </div>
      <div className="flex-1">
        <div className="text-2xl font-bold mb-2">{title}</div>
        <div className="text-gray-600 mb-2">{description}</div>
        <div>
          <a
            href={link}
            className="text-blue-800 hover:red-500 no-underline cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
