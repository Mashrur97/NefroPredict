import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const BlogForm = ({ email, onBlogCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please upload an image");
      return;
    }

    if (!email) {
      toast.error("User email not found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Cloudinary
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append("upload_preset", "cloudy");
      imageData.append("cloud_name", "drbmetoqj");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drbmetoqj/image/upload",
        imageData
      );

      const imageUrl = cloudRes.data.secure_url;

      // Create blog post with image URL & author email
      const result = await axios.post("http://localhost:5000/api/blogs", {
        title: formData.title,
        content: formData.content,
        imageUrl,
        authorEmail: email,
      });

      if (result.data?.data?._id) {
        toast.success("Blog posted successfully!");
        setFormData({ title: "", content: "" });
        setImageFile(null);
        onBlogCreated?.();
      } else {
        toast.error("Blog post failed");
      }
    } catch (error) {
      toast.error("Failed to post blog");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="animate-fadeIn">
      <p className="text-3xl mb-8 font-bold text-white text-center">
        Post Blog
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow-2xl mb-6 space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-blue-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="relative w-full rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 mt-2 disabled:opacity-50"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">
            {loading ? "Posting..." : "Post Blog"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
