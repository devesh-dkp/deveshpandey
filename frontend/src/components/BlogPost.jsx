import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";

const BlogPost = ({ blogs }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blogs.length > 0) {
      const blog = blogs.find((blog) => blog.id === id);
      if (blog) {
        setBlog(blog);
        setLoading(false);
      } else {
        setError("Blog post not found.");
        setLoading(false);
      }
    }
  }, [blogs, id]);

  if (loading) {
    return <div className="max-w-3xl mx-auto p-8 my-8">Loading...</div>;
  }

  if (error) {
    console.log(error);
    return (
      <div className="max-w-3xl mx-auto p-8 my-8">Error loading blog post.</div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-8 my-8">Blog post not found.</div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-8 mb-40">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          {blog.author && <span>By {blog.author} | </span>}
          {blog.category && <span>{blog.category} | </span>}
          {blog.date && <span>{blog.date}</span>}
        </div>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </div>
        <footer className="text-sm text-gray-600 mt-4">
          <a href="/blogs" className="text-blue-500 hover:text-blue-700">
            Back to Blogs
          </a>
        </footer>
      </div>
    </>
  );
};

export default BlogPost;
