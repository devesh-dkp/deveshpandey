import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hello! I'm Devesh Kumar Pandey, a passionate developer with a strong
          background in Mathematics and Computing from IIT Patna. I've worked on
          a variety of projects including financial analytics, e-commerce
          applications, and web development platforms. My skills span across
          multiple programming languages and technologies, including C++,
          Python, JavaScript, React.js, Node.js, and more.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In addition to my technical expertise, I've achieved significant
          milestones in competitive programming with notable ratings on
          platforms like Codeforces, Codechef, and Leetcode. I have also been an
          active participant in the Facebook Hacker Cup.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Beyond academics and projects, I've contributed to the community as a
          mentor and have taken part in various extracurricular activities. My
          journey in tech is driven by continuous learning and a deep curiosity
          to solve complex problems.
        </p>
        <p className="text-lg text-blue-500 text-center mt-4">
          <a
            href="../static/Devesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
