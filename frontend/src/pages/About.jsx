import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>

      <p className="text-lg text-gray-600 mb-6">
        I'm Devesh Kumar Pandey, a student in the unique 5-year integrated
        dual-degree program offered jointly by IIT Patna and IIM Mumbai. My
        academic journey combines bachelor's in Mathematics and Computing with
        advanced business education in Operations and Supply Chain Management.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Education Timeline
      </h2>
      <ul className="list-none space-y-4 mb-6">
        <li className="flex items-center">
          <div className="bg-blue-500 rounded-full h-4 w-4 mr-4"></div>
          <div>
            <p className="font-semibold">2024 - 2026 (Expected)</p>
            <p>MBA in Operations and Supply Chain Management, IIM Mumbai</p>
          </div>
        </li>
        <li className="flex items-center">
          <div className="bg-blue-500 rounded-full h-4 w-4 mr-4"></div>
          <div>
            <p className="font-semibold">2021 - 2025</p>
            <p>BS in Mathematics and Computing, IIT Patna</p>
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Skills & Interests
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        My technical skills include Python, R, and SQL, with a focus on data
        structures, algorithms, and machine learning. I'm passionate about
        applying these skills to solve complex business problems, particularly
        in supply chain optimization and operations management.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Career Goals
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        I aim to leverage my unique blend of technical and managerial skills to
        drive innovation in technology-driven industries. My goal is to bridge
        the gap between advanced analytics and strategic business decisions,
        particularly in the realm of supply chain and operations management.
      </p>

      <div className="mt-8">
        <a
          href="https://devesh-dkp.github.io/devesh/images/devesh_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Check out my resume
        </a>
      </div>
    </div>
  );
};

export default About;
