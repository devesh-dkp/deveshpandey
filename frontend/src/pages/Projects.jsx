import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import projectService from "../services/projs";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectService.getAll().then((initialProjects) => {
      setProjects(initialProjects);
    });
  }, []);

  return (
    <>
      <div className="bg-cover bg-center flex items-center justify-center bg-white py-2">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold text-black">Projects</h1>
          <p className="mt-4 text-xl text-gray-500">
            Here are some of the projects that I have worked on. You can find
            more of my projects on my{" "}
            <a
              href="https://github.com/devesh-dkp"
              className="text-blue-500 hover:text-blue-700 no-underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto py-4 pb-24 mb-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
