import React from "react";

const Project = ({ title, description, link, image }) => {
  return (
    <div className="rounded-md shadow-md hover:shadow-lg md:w-80">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-md"
        />
      )}
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="btn btn-primaryp">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
