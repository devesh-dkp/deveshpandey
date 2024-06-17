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
      <div className="bg-cover bg-center flex mb-10 bg-white py-2">
        <div className="max-w-6xl mx-10 px-8 text-center">
          <h1 className="font-crimsontext text-xl text-black ml-20">
            These are some projects, I have worked on. You can find more on my{" "}
            <a
              href="https://github.com/devesh-dkp"
              className="text-blue-800 hover:red-500 no-underline"
            >
              Github.
            </a>
          </h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-black text-left ml-40 mb-8">
        Projects
      </h1>
      <div className="mx-auto max-w-5xl mb-10">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
