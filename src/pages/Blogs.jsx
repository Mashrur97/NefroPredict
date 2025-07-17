import React, { useContext, useEffect, useState } from "react";
import Squares from "../../Reactbits/Squares/Squares";
import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/blogs/published"
        );
        const data = await response.json(); // parse JSON
        setBlogPosts(data?.data || []);
      } catch (error) {
        console.error("Failed to load published blogs", error);
      }
    };

    fetchPublishedBlogs();
  }, []);
  console.log(blogPosts);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full bg-black text-white min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#1e3a8a"
          hoverFillColor="#1e1e1e"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl text-center font-bold mb-8 text-blue-400">
          Blogs
        </h1>

        {blogPosts.map((post, index) => (
          <div
            key={post._id}
            className="space-y-3 p-5 rounded-2xl bg-blue-950 text-white shadow-md shadow-blue-900/30 mb-6"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="rounded-xl w-full h-40 object-cover border border-blue-800"
            />
            <p className="font-semibold text-xl text-blue-300">{post.title}</p>

            <div className="py-3 border-y border-dashed border-blue-700">
              <p className="text-blue-100">
                {expandedIndex === index
                  ? post.content
                  : post.content.slice(0, 180) + "..."}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-400 mt-2 font-semibold hover:underline"
              >
                {expandedIndex === index ? "Show less ▲" : "Read more ▼"}
              </button>
            </div>
            <p className="text-sm text-blue-500">
              Added at: {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}

        {user?.role === "user" && (
          <div className="text-center mt-10">
            <button className="relative rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Post your own blog</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
