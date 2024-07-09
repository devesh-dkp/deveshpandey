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

  const [tag, setTag] = useState("all");

  const tags = projects.map((project) => project.tag);

  return (
    <>
      <div className="bg-cover bg-center flex mb-10 bg-white py-2">
        <div className="max-w-6xl mx-10 px-8 text-center">
          <h1 className="font-crimsontext text-xl text-black ml-20 mt-4">
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
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-black text-left ml-40 mb-8">
          Projects
        </h1>
        {/* // make a filter which is set to all by default and then filter the projects based on the tag
      // tag can be taken from project.tag
      // the filter can be a dropdown menu */}
        <div className="mr-40 mb-8">
          <select
            onChange={(e) => setTag(e.target.value)}
            className="p-2 border-2 border-gray-200 rounded-lg"
          >
            <option value="all">All</option>
            {[...new Set(tags)].map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mx-auto max-w-5xl mb-10">
        {
          // filter the projects based on the tag
          projects
            .filter((project) => project.tag === tag || tag === "all")
            .map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                livelink={project.livelink}
              />
            ))
        }
      </div>
    </>
  );
};

export default Projects;
