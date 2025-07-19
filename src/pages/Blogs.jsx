import React, { useContext, useEffect, useState } from "react";
import Particles from "../../Reactbits/Particles/Particles";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { user, isLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/blogs/published"
        );
        const data = await response.json();
        setBlogPosts(data?.data || []);
      } catch (error) {
        console.error("Failed to load published blogs", error);
      }
    };

    fetchPublishedBlogs();
  }, []);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full bg-black text-white min-h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full min-h-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.04}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <h1 className="text-4xl text-center font-bold mb-12 text-white">
          Blog Posts
        </h1>

        {isLoading && (
          <div className="flex justify-center mb-10">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}

        {blogPosts.map((post, index) => (
          <div
            key={post._id}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-8 mb-12 hover:shadow-lg transition duration-300 w-full"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="rounded-md w-full h-[400px] object-cover mb-6"
            />
            <h2 className="text-3xl font-semibold text-white mb-4">
              {post.title}
            </h2>

            <div className="border-y border-gray-700 py-4 text-gray-300 text-base leading-relaxed">
              <p>
                {expandedIndex === index
                  ? post.content
                  : post.content.slice(0, 300) + "..."}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-400 mt-3 font-semibold hover:underline"
              >
                {expandedIndex === index ? "Show less ▲" : "Read more ▼"}
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Posted on {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}

        {user?.role === "user" && (
          <div className="text-center mt-16">
            <NavLink
              to={"/user/dashboard"}
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition font-medium"
            >
              ✍️ Post your own blog
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
