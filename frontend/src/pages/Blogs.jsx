import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="bg-cover bg-center flex mb-10 bg-white py-2">
        <div className="max-w-6xl mx-10 px-8 text-center">
          <h1 className="font-crimsontext text-3xl font-bold text-gray-800 ml-20">
            List of Blogs
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl mb-10 pb-14">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-5xl w-full bg-white p-8 mb-12 shadow-lg rounded-lg"
          >
            <Link
              to={`/blogs/${blog.id}`}
              onClick={() => (window.location.href = `/blogs/${blog.id}`)}
            >
              <h2 className="text-2xl font-bold mb-4 cursor-pointer">
                {blog.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-4">
              {blog.author && <span>By {blog.author} | </span>}
              {blog.date && <span>{blog.date}</span>}
              <div className="mt-4">
                {blog.tags &&
                  blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-gray-700 bg-gray-200 last:mr-0 mr-1"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <div className="prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content.length > 50
                  ? blog.content.substring(0, 50)
                  : blog.content}
              </ReactMarkdown>
              {blog.content.length > 50 && "..."}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Blogs;
