import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const useBlogs = (email) => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchBlogs = async () => {
    try {
      if (!email) return;
      const res = await axios.get(
        `http://localhost:5000/api/blogs/my-blogs?email=${user.email}`
      );
      setBlogs(res.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/blogs/${id}/publish`, {
        isPublished: !currentStatus,
      });
      fetchBlogs();
    } catch (error) {
      console.error("Failed to toggle publish status", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [email]); // Refetch when email is available or changes

  return {
    blogs,
    fetchBlogs,
    deleteBlog,
    togglePublish,
  };
};

export default useBlogs;
