import React from "react";
import useBlogs from "./useBlogs";
import BlogForm from "./BlogForm";
import BlogTable from "./BlogTable";
import Nav from "../../../Components/Nav";
// import BlogForm from "../blogs/BlogForm";
// import BlogTable from "../blogs/BlogTable";
// import useBlogs from "../blogs/useBlogs";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";

const BlogManager = () => {
  const { user } = useContext(AuthContext);
  const { blogs, fetchBlogs, deleteBlog } = useBlogs(user?.email);

  return (
    <div>
      
      <BlogForm email={user?.email} onBlogCreated={fetchBlogs} />
      <h1 className="text-white text-center text-3xl font-bold mb-5">Your Posts</h1>
      <BlogTable blogs={blogs} onDelete={deleteBlog} onUpdated={fetchBlogs} />
    </div>
  );
};

export default BlogManager;
